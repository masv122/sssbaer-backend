<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Solicitudes extends Model
{
    use HasFactory;
    protected $fillable = [
        'idAdministrador',
        'idUsuario',
        'comentarioAdicional',
        'coordinacion',
        'problema',
        'enProceso',
        'terminado',
        'razonCancelado',
        'observacionesAlCompletar',
        'confirmada'
    ];
}
