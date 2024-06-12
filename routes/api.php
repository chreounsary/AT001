<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/** Class Controller **/
use App\Http\Controllers\Api\PassportAuthController;
use App\Http\Controllers\Api\AdminMangeController;

/** Route Public **/
Route::get('getToken', [PassportAuthController::class, 'accessTokens']);
Route::post('register', [PassportAuthController::class, 'register']);
Route::post('login', [PassportAuthController::class, 'login']);

/** Route Admin **/
Route::middleware(['auth:sanctum', 'isAdmin'])->group(function () {
    Route::get('roles', [AdminMangeController::class, 'index']);
});    

Route::any('{any}', function(){
    return response()->json([
    	'status' => 'error',
        'message' => 'Resource not found'], 404);
})->where('any', '.*');;
