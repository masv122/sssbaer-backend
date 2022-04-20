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
        return response([ 'solicitudes' => SolicitudesResource::collection($solicitudes), 'message' => 'Retrieved successfully'], 200);
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
            'idAdministrador' => 'max:255',
            'idUsuario' => 'required|max:255',
            'comentarioAdicional' => 'max:255',
            'coordinacion' => 'required',
            'problema' => 'required',
        ]);

        if ($validator->fails()) {
            return response(['error' => $validator->errors(), 'Validation Error']);
        }

        $Solicitudes = Solicitudes::create($data);

        return response(['Solicitudes' => new SolicitudesResource($Solicitudes), 'message' => 'Created successfully'], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Solicitudes  $solicitudes
     * @return \Illuminate\Http\Response
     */
    public function show(Solicitudes $id)
    {
        return response(['Solicitudes' => new SolicitudesResource($id), 'message' => 'Retrieved successfully'], 200);
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
        $solicitudes->update($request->all());

        return response(['solicitudes' => new SolicitudesResource($solicitudes), 'message' => 'Update successfully'], 200);
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
