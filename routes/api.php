<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\SolicitudesAuxController;
use App\Http\Controllers\API\SolicitudesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/info-user', [AuthController::class, 'infoUsuario'])->middleware('auth:sanctum');
Route::post('/solicitudes-usuario', [SolicitudesAuxController::class, 'solicitudesUsuario'])->middleware('auth:sanctum');
Route::apiResource('/solicitudes', SolicitudesController::class)->middleware('auth:sanctum');
