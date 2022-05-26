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
            'admi' => 'required|boolean',
            'supervisor' => 'boolean'
        ]);

        $user = User::create([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'password' => Hash::make($validatedData['password']),
            'admi' => $validatedData['admi'],
            'admi' => $validatedData['supervisor'],
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

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json([
            'res' => true,
        ]);
    }

    public function user(Request $request)
    {
        return $request->user();
    }

/*     public function show($id)
    {
        $usuario = User::find($id);
        if (is_null($usuario)) {
            return response()->json(['message' => 'No se encuentra usuario', 'id' => $id], 404);
        }
        return response()->json([new UserResource($usuario)]);
    } */


 /*    public function index()
    {
        $usuarios = User::all();
        return response(['users' => UserResource::collection($usuarios), 'message' => 'Retrieved successfully'], 200);
    } */
}
