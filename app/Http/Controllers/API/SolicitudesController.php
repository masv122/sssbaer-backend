<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\SolicitudesResource;
use App\Models\Solicitudes;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class SolicitudesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $solicitudes = Solicitudes::all();
        return response(['solicitudes' => SolicitudesResource::collection($solicitudes), 'message' => 'Retrieved successfully'], 200);
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

        $Solicitudes = Solicitudes::create($data);

        return response()->json(['Solicitudes' => new SolicitudesResource($Solicitudes), 'message' => 'ok']);
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
/*         $validator = Validator::make($request->all(), [
            'enProceso' => 'boolean',
            'terminado' => 'boolean'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

                $solicitudes->enProceso = $request->enProceso;
        $solicitudes->terminado = $request->terminado;
        $solicitudes->comentarioAdicional = $request->comentarioAdicional;
        $data = [
            'enProceso' => $request->enProceso,
            'terminado' => $request->terminado,
            ''
        ]; */
        $id = $request->id;
        $solicitudes = Solicitudes::find($id);
        $solicitudes->update($request->all());
        return response(['project' => new SolicitudesResource($solicitudes), 'message' => 'Update successfully'], 200);
        /*        $solicitudes->update($request->all());

        return response(['solicitudes' => new SolicitudesResource($solicitudes), 'message' => 'Update successfully'], 200); */
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
