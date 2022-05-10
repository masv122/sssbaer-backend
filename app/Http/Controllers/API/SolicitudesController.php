<?php

namespace App\Http\Controllers\API;

use App\Events\EstadoActualizado;
use App\Events\SolicitudEnviada;
use App\Http\Controllers\Controller;
use App\Http\Resources\SolicitudesResource;
use App\Models\Solicitudes;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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

        $solicitudes = Solicitudes::create($data);
        $solicitud = DB::table('solicitudes')
            ->leftJoin('users', 'solicitudes.idUsuario', '=', 'users.id')
            ->select('solicitudes.*', 'users.name')
            ->where('solicitudes.id', '=', $solicitudes->id)
            ->get();
        event(new SolicitudEnviada($solicitud[0]));
        return response()->json(['Solicitudes' => new SolicitudesResource($solicitudes), 'message' => 'ok']);
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
    public function update(Request $request, Solicitudes $solicitudes)
    {
        $id = $request->id;
        $solicitudes = Solicitudes::find($id);
        $solicitudes->update($request->all());
        $solicitud = DB::table('solicitudes')
            ->leftJoin('users', 'solicitudes.idUsuario', '=', 'users.id')
            ->select('solicitudes.*', 'users.name')
            ->where('solicitudes.id', '=', $solicitudes->id)
            ->get();
        event(new EstadoActualizado($solicitud[0]));
        return response(['solicitud' => new SolicitudesResource($solicitudes), 'message' => 'Update successfully'], 200);
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
