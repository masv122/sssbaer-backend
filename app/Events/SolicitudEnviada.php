<?php

namespace App\Events;

use App\Models\Solicitudes;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class SolicitudEnviada implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * The solicitudes instance.
     *
     * @var \App\Solicitudes
     */
    public $user;
    public $text;
    public $hora;
    public $solicitud;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($user, $text, $hora, $solicitud)
    {
        $this->user = $user;
        $this->text = $text;
        $this->hora = $hora;
        $this->solicitud = $solicitud;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new Channel("SolicitudEnviada");
    }
}
