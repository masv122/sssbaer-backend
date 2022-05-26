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
        $solicitudes = DB::table('solicitudes')
        ->select("solicitudes.*", "users.name as nombre")
        ->leftJoin('users', 'solicitudes.idAdministrador', '=', 'users.id')
        ->where('idAdministrador', $id)
        ->get();
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

    public function topAdmis()
    {
        $users = DB::select('SELECT users.name,
                                    users.id,
                                    COUNT(solicitudes.terminado) AS terminadas
                            FROM users
                            INNER JOIN solicitudes ON (users.id = solicitudes.idAdministrador)
                            WHERE solicitudes.terminado = TRUE
                                AND users.admi = TRUE
                                AND MONTH(solicitudes.created_at) = MONTH(NOW())
                                AND YEAR(solicitudes.created_at) = YEAR(NOW()) GROUP  BY users.name
                            ORDER BY terminadas DESC
 ');

        return response()->json(['users' => $users]);
    }
}
