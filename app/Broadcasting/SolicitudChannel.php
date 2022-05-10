<?php

namespace App\Broadcasting;

use App\Models\Solicitudes;
use App\Models\User;

class SolicitudChannel
{
    /**
     * Create a new channel instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Authenticate the user's access to the channel.
     *
     * @param  \App\Models\User  $user
     * @return array|bool
     */
    public function join(User $user, Solicitudes $solicitudes)
    {
        return $user->id === $solicitudes->idUsuario;
    }
}
