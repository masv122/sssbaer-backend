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

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', [AuthController::class, 'user']);
    Route::get('/user/{id}', [AuthController::class, 'show']);
    Route::post('/solicitudes-usuario', [SolicitudesAuxController::class, 'solicitudesUsuario']);
    Route::post('/solicitudes-admi', [SolicitudesAuxController::class, 'solicitudesAdmi']);
    Route::apiResource('/solicitudes', SolicitudesController::class);
});

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
