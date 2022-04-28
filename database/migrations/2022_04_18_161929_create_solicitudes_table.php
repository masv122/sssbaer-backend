<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;


class CreateSolicitudesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('solicitudes', function (Blueprint $table) {
            $table->id();
            $table->string('idAdministrador', 255)->nullable();
            $table->integer('idUsuario');
            $table->string('comentarioAdicional', 500)->nullable();
            $table->string('coordinacion', 255);
            $table->string('problema', 255);
            $table->boolean('enProceso')->default(false);
            $table->boolean('terminado')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('solicitudes');
    }
}
