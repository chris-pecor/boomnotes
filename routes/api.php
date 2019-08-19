<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

/**
 * Just a basic notes application that will serve from the root route
 * 
 * Route::get($uri, $callback);
 * Route::post($uri, $callback);
 * Route::put($uri, $callback);
 * Route::delete($uri, $callback);
 */

Route::get('note', 'NotesController@index');
 
Route::get('note/{note}', 'NotesController@show');
 
Route::post('note','NotesController@store');
 
Route::put('note/{note}','NotesController@update');
 
Route::delete('note/{note}', 'NotesController@delete');