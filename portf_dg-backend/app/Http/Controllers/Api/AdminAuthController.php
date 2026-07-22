<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Laravel\Sanctum\NewAccessTokenResponse;

class AdminAuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required', 'string'],
        ]);

        //$expected = env('ADMIN_PASSWORD'); this is used only 
        //if we dont have a user model for admin, but we have one now,
        // so we can use the user model to check the password

        $admin = User::where('email', $request->input('email'))->first();
        if(!$admin || !Hash::check($request->input('password'), $admin->password)) {
            return response()->json(['message'=> 'Unauthorized'], 401);
        }
        //issue sanctum token for admin
        $token = $admin->createToken('admin')->plainTextToken;
        return response()->json([
            'token' => $token,
            'admin' => [
                'id' => $admin->id,
                'email' => $admin->email,
                'name' => $admin->name
            ]
        ]);


        // Create a Sanctum token without a full User model:
        // We'll use a lightweight "admin" token approach by issuing a token on a dedicated model
        // If you don't have an Admin/User model yet, we'll use Sanctum's token system by creating a minimal User table next.
        // For now, this method will be completed in the next step after we confirm your preference:
        // return response()->json(['message' => 'TODO: create token mechanism for admin login'], 501);
    }
}
