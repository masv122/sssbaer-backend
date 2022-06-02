<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\BroadcastMessage;
use Illuminate\Notifications\Notification;

class SolicitudActualizadaNotiAdmi extends Notification
{
    use Queueable;

    private $solicitud;
    private $admi;
    private $user;
    private $estado;

    public function __construct($user, $text, $hora, $estado, $solicitud)
    {
        $this->user = $user;
        $this->text = $text;
        $this->hora = $hora;
        $this->estado = $estado;
        $this->solicitud = $solicitud;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['database', 'broadcast'];
    }
    /**
     * Get the broadcastable representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return BroadcastMessage
     */
    public function toBroadcast($notifiable)
    {
        return new BroadcastMessage($this->getData());
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return $this->getData();
    }

    public function getData()
    {
        return [
            'name' => $this->user->name,
            'admi' => $this->user->admi,
            'text' => $this->text,
            'hora' => $this->hora,
            'estado' => $this->estado,
            'solicitud' => $this->solicitud->id,
        ];
    }
}
