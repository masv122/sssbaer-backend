<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\NotisController;
use App\Http\Controllers\API\SolicitudesAuxController;
use App\Http\Controllers\API\SolicitudesController;
use App\Http\Controllers\API\UserController;
use Illuminate\Support\Facades\Broadcast;
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


Broadcast::routes(['middleware' => ['auth:sanctum']]);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', [AuthController::class, 'user']);
    Route::get('/logout', [AuthController::class, 'logout']);
    Route::post('/solicitudes-admi', [SolicitudesAuxController::class, 'solicitudesAdmi']);
    Route::post('/solicitudes-usuario', [SolicitudesAuxController::class, 'solicitudesUsuario']);
    Route::get('/solicitudes-supervisor', [SolicitudesAuxController::class, 'solicitudesEnProcesoOCompletadas']);
    Route::get('/top-admis', [SolicitudesAuxController::class, 'topAdmis']);
    Route::apiResource('/users', UserController::class);
    Route::post('/delete-user', [UserController::class, 'destroy']);
    Route::apiResource('/solicitudes', SolicitudesController::class);
    Route::get('/notis', [NotisController::class, 'getNotis']);
    Route::get('/read-notis', [NotisController::class, 'markAsRead']);
    Route::get('/delete-notis', [NotisController::class, 'deleteNotis']);
});

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
