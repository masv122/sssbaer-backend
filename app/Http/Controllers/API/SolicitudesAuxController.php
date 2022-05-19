<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;



class SolicitudesAuxController extends Controller
{
    public function solicitudesUsuario(Request $request)
    {
        $id = $request['id'];
        $solicitudes = DB::select('select * from solicitudes where idUsuario = :id', ['id' => $id]);
        return response()->json(['solicitudes' => $solicitudes]);
    }


    public function solicitudesAdmi(Request $request)
    {
        $id = $request['id'];
        $solicitudes = DB::select('select * from solicitudes where idAdministrador = :id', ['id' => $id]);
        return response()->json(['solicitudes' => $solicitudes]);
    }

    public function solicitudesEnProcesoOCompletadas()
    {
        $solicitudes = DB::table('solicitudes')
        ->join('users', 'solicitudes.idAdministrador', '=', 'users.id')
        ->select('solicitudes.*', 'users.name as admiName', 'users.id as admiID')
        ->get();
        return response()->json(['solicitudes' => $solicitudes]);
    }

}
