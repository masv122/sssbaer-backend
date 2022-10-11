<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $usuarios = User::all();
        return response(['users' => UserResource::collection($usuarios), 'message' => 'Retrieved successfully'], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $usuario = User::find($id);
        if (is_null($usuario)) {
            return response()->json(['message' => 'No se encuentra usuario', 'id' => $id], 404);
        }
        return response()->json([new UserResource($usuario)]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $id = $request->id;
        $user = User::find($id);
        if ($request['password']) {
            $validatedData = $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'email|required|string',
                'password' => 'string|min:8',
            ]);
            $user->update([
                'name' => $validatedData['name'],
                'email' => $validatedData['email'],
                'password' => Hash::make($validatedData['password']),
            ]);
        } else {
            $validatedData = $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'email|required|string',
            ]);
            $user->update([
                'name' => $validatedData['name'],
                'email' => $validatedData['email'],
            ]);
        }

        return response(['message' => 'Update successfully',], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $id = $request->id;
        $user = User::find($id);
        $user->delete();
        return response(['message' => 'Deleted']);
    }
}
