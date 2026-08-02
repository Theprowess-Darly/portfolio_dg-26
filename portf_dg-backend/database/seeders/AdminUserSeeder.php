<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $email = env('ADMIN_EMAIL');
        if (!$email) return; // Exit if ADMIN_EMAIL is not set in the .env file

        $user = User::where('email', $email)->first();
        
        if (!$user) {
            User::create([
                'email' => $email,
                'name' => 'Admin',
                'password' => Hash::make(env('ADMIN_PASSWORD')),
            ]);
        }
    }
}
