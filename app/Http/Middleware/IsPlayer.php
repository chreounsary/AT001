<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class IsPlayer
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        return $next($request);
        if (\Auth::user()->hasRole('Player')) {
            return $next($request);
        }
        return response()->json(['message' => 'Opps! You do not have permission to access.', 'status_error' => 403], 400);
    }
}
