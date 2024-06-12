<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
// use Illuminate\Validation\Validator;
use Illuminate\Support\Facades\Validator;
// use Validator;
use Illuminate\Http\JsonResponse;
use App\Models\User;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Auth;
class PassportAuthController extends Controller
{
    /**
     * Registration Req
    */
    public function register(Request $request)
    {
        try {
            $params = [];
            $validator = Validator::make($request->all(), [
                'username' => 'required|min:4|unique:users,username',
                'password' => 'required|min:6',
                'currencycode' => 'required|min:3',
                'ip' => 'required',
            ]);
            
            if ($validator->fails()) {
                return response()->json(['message' => $validator->errors()->first()]);
            }

            # Request Datas
            $params['username'] = $request->username;
            $params['password'] = $request->password;
            $params['brandcode'] = 'BRAND008';
            $params['auhtoritys'] = "PLAYER";
            $params['currencycode'] = 'USA';
            $params['ip'] = $request->ip;

            User::create($params);
            return response()->json(['success' => true,'message'=> 'Register successfully.'], 200);
        } catch (\Throwable $ex) {
            return response()->json(['message' => $ex->getMessage()], 400);
        }
    }
    
    /**
     * Login Req
     */
    public function login(Request $request)
    {
        try {
            $private = false;
            $validator = Validator::make($request->all(), [
                'username' => 'required|min:4',
                'password' => 'required|min:6',
                'ip' => 'required',
            ]);
            
            if ($validator->fails()) {
                return response()->json(['message' => $validator->errors()->first()]);
            }

            //Check Account
            $user = User::where("username", $request->username)->first();
            if(!empty($user) && $user->status == "INACTIVE"){
                return response()->json(['message' => 'Your account has baned'], 400);
            }
            //Login By Agent
            $auth = self::LoginByUser($request);
            if(!empty($auth)){
                $roles = $user->getRoleNames();
                $permissions = $user->getAllPermissions();
                return response()->json(['user' => $auth, 'roles' => $roles, 'permissions' => [], 'success' => true], 200);
            }
            return response()->json(['success' => false, 'message'=> 'Login Unsuccessful.'], 200);
        } catch (\Throwable $ex) {
            return response()->json(['message' => $ex->getMessage()], 400);
        }
    }

    public function LoginByUser(Request $request) 
    {
        $users = [];
        $credentials = [
            'username' => $request['username'],
            'password' => $request['password'],
        ];
        if(Auth::attempt($credentials)) {
            #Auth
            $auth = Auth::user();
            $users['usr_sitename'] = $auth->name;
            $users['usr_username'] = $auth->username;
            $users['usr_ip'] = $request->ip;
            $users['usr_lastlogin'] = $auth->created_at;
            $users['usr_token'] = $auth->createToken("MyApp")->plainTextToken;
            return $users;
        }
        return false;
    }
}
