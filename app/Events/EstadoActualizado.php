<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class EstadoActualizado implements ShouldBroadcast
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
    public $tipo;
    public $solicitud;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($user, $text, $hora, $tipo, $solicitud)
    {
        $this->user = $user;
        $this->text = $text;
        $this->hora = $hora;
        $this->tipo = $tipo;
        $this->solicitud = $solicitud;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new Channel("EstadoActualizado");
    }
}
