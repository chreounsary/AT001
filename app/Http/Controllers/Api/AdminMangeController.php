<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\JsonResponse;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
class AdminMangeController extends Controller
{
    /**
     * index Request
    */
    public function index(Request $request)
    {
        return response()->json(['success' => true, 'data'=> []], 200);
    }
}
