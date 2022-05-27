<?php

namespace App\Http\Controllers\API;

use App\Events\EstadoActualizado;
use App\Events\SolicitudEnviada;
use App\Events\SolicitudUsuarioActualizada;
use App\Http\Controllers\Controller;
use App\Http\Resources\SolicitudesResource;
use App\Models\Solicitudes;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Symfony\Component\Console\Output\ConsoleOutput;

class SolicitudesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $solicitudes = DB::table('solicitudes')
            ->leftJoin('users', 'solicitudes.idUsuario', '=', 'users.id')
            ->select('solicitudes.*', 'users.name')
            ->get();
        return response(['solicitudes' => $solicitudes, 'message' => 'Retrieved successfully'], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();

        $validator = Validator::make($data, [
            'idUsuario' => 'required|max:255',
            'comentarioAdicional' => 'max:255',
            'coordinacion' => 'required',
            'problema' => 'required',
        ]);

        if ($validator->fails()) {
            return response(['error' => $validator->errors(), 'Validation Error'], 400);
        }

        $solicitud = Solicitudes::create($data);
        $user = DB::table('users')
            ->select('users.name', 'users.admi')
            ->where('users.id', '=', $solicitud->idUsuario)
            ->get();
        $text = "Ha enviado una solicitud con ID " . $solicitud->id . ": " . $solicitud->comentarioAdicional;
        $hora = date("H:i");
        event(new SolicitudEnviada($user[0], $text, $hora, $solicitud));
        return response()->json(['Solicitudes' => new SolicitudesResource($solicitud), 'message' => 'ok']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Solicitudes  $solicitudes
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $solicitudes = Solicitudes::find($id);
        if (is_null($solicitudes)) {
            return response()->json('Data not found', 404);
        }
        return response()->json([new SolicitudesResource($solicitudes)]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Solicitudes  $solicitudes
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Solicitudes $solicitud)
    {
        $id = $request->id;
        $solicitud = Solicitudes::find($id);
        $idAdmiAux = $solicitud->idAdministrador;
        $solicitud->update($request->all());
        $idAdmi = $solicitud->idAdministrador;
        if ($solicitud->enProceso == 1 && $solicitud->terminado == 0) {
            $tipo = "aceptado";
            $text = "Ha aceptado la solicitud con ID " . $solicitud->id;
        } else if ($solicitud->enProceso == 0 && $solicitud->terminado == 1) {
            $tipo = "completado";
            $text = "Ha completado la solicitud con ID " . $solicitud->id;
        } else if (!empty($solicitud->razonCancelado)) {
            $idAdmi = $idAdmiAux;
            $tipo = "rechazado";
            $text = "Ha rechazado la solicitud con ID " . $solicitud->id;
        }
        $user = DB::table('users')
            ->select('users.name', 'users.admi')
            ->where('users.id', '=', $idAdmi)
            ->get();
        $hora = date("H:i");
        EstadoActualizado::dispatch($user[0], $text, $hora, $tipo, $solicitud);
        SolicitudUsuarioActualizada::dispatch($solicitud);
        return response(['solicitud' => new SolicitudesResource($solicitud), 'message' => 'Update successfully'], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Solicitudes  $solicitudes
     * @return \Illuminate\Http\Response
     */
    public function destroy(Solicitudes $solicitudes)
    {
        $solicitudes->delete();

        return response(['message' => 'Deleted']);
    }
}
