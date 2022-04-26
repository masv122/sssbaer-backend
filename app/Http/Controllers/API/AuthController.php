<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;



class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'email|required|string|unique:users',
            'password' => 'required|string|min:8',
            'admi' => 'required|boolean'
        ]);

        $user = User::create([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'password' => Hash::make($validatedData['password']),
            'admi' => $validatedData['admi'],
        ]);

        $accessToken = $user->createToken('authToken')->plainTextToken;

        return response()->json(['message' => 'Created successfully']);
    }

    public function login(Request $request)
    {
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'message' => 'informacion de ingreso invalida'
            ], 401);
        }
        $user = User::where('email', $request['email'])->firstOrFail();

        $accessToken = $user->createToken('authToken')->plainTextToken;

        return response()->json(['access_token' => $accessToken, 'token_type' => 'Bearer']);
    }

    public function infoUsuario(Request $request)
    {
        return $request->user();
    }
}
