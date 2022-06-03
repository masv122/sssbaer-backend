<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class NotisController extends Controller
{
    public function getNotis(Request $request)
    {
        $notis = $request->user()->notifications;
        return response()->json($notis);
    }

    public function markAsRead(Request $request)
    {
        $request->user()->unreadNotifications->markAsRead();
        return response()->json(['success' => true]);
    }

    public function deleteNotis(Request $request)
    {
        $request->user()->notifications()->delete();
        return response()->json(['success' => true]);
    }
}
