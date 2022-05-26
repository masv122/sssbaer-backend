<?php

namespace Database\Seeders;

use Faker\Core\Number;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert(
            [
                [
                    'name' => Str::random(10),
                    'email' => 'a@a.com',
                    'password' => Hash::make(12345678),
                    'admi' => 0,
                    'supervisor' => 0

                ],
                [
                    'name' => Str::random(10),
                    'email' => 'b@b.com',
                    'password' => Hash::make(12345678),
                    'admi' => 0,
                    'supervisor' => 0

                ],
                [
                    'name' => Str::random(10),
                    'email' => 'c@c.com',
                    'password' => Hash::make(12345678),
                    'admi' => 1,
                    'supervisor' => 0

                ],
                [
                    'name' => Str::random(10),
                    'email' => 'd@d.com',
                    'password' => Hash::make(12345678),
                    'admi' => 1,
                    'supervisor' => 0

                ],
                [
                    'name' => Str::random(10),
                    'email' => 'e@e.com',
                    'password' => Hash::make(12345678),
                    'admi' => 0,
                    'supervisor' => 1
                ]
            ]
        );
    }
}
