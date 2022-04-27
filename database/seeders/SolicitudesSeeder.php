<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class SolicitudesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('solicitudes')->insert([
            [
                'comentarioAdicional' => Str::random(10),
                'coordinacion' => Str::random(10),
                'problema' => Str::random(10),
                'idUsuario' => 1
            ],
            [
                'comentarioAdicional' => Str::random(10),
                'coordinacion' => Str::random(10),
                'problema' => Str::random(10),
                'idUsuario' => 1
            ],
            [
                'comentarioAdicional' => Str::random(10),
                'coordinacion' => Str::random(10),
                'problema' => Str::random(10),
                'idUsuario' => 2
            ],
            [
                'comentarioAdicional' => Str::random(10),
                'coordinacion' => Str::random(10),
                'problema' => Str::random(10),
                'idUsuario' => 2
            ],
            [
                'comentarioAdicional' => Str::random(10),
                'coordinacion' => Str::random(10),
                'problema' => Str::random(10),
                'idUsuario' => 2
            ]
        ]);
    }
}
