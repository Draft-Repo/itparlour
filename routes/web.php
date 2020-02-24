<?php


//  Route::get('/',  'CategoryController@index');
 Route::get('/php',  'CategoryController@php');



 Route::any('/{all}', function () {
     return view('welcome');
 })->where(['all' => '.*']);




//Auth::routes();

//Route::get('/home', 'HomeController@index')->name('home');
