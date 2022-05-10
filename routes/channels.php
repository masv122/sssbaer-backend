<?php

use App\Broadcasting\SolicitudChannel;
use App\Models\Solicitudes;
use Illuminate\Support\Facades\Broadcast;
use Illuminate\Support\Facades\Log;

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

Broadcast::channel('App.Models.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});


Broadcast::channel('solicitudes.{solicitudId}', function ($user, $solicitudId) {
    return $user->id === Solicitudes::findOrNew($solicitudId)->idUsuario;
});
