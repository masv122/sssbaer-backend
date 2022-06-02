<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class SolicitudActualizadaMail extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    private $solicitud;
    private $admi;
    private $user;
    private $estado;
    public function __construct($solicitud, $admi, $user, $estado)
    {
        $this->solicitud = $solicitud;
        $this->user = $user;
        $this->admi = $admi;
        $this->estado = $estado;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        $url = url('/usuario/dashboard/solicitudes-usuario');
        return (new MailMessage)
            ->subject('Solicitud N° ' . $this->solicitud->id . " " . $this->estado)
            ->greeting('¡Hola ' . $this->user->name . '!')
            ->line('Tu solicitud N° ' . $this->solicitud->id . ' ha sido ' . $this->estado . ' por el administrador ' . $this->admi->name . '.')
            ->action('Ver solicitudes', $url)
            ->line($this->estado == 'completada' ? "Si ha sido atendido con satisfaccion puedes confirmala en el panel de usuario." : "")
            ->line('Gracias por ser paciente');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
