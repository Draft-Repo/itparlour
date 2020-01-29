<?php

namespace App\Helpers;
use Illuminate\Support\Facades\App;

class Cookieless
{
    public static function getUrl(string $file)
    {
        if (App::environment('local')) {
            return asset("static/$file");
        } else {
            $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
            return $protocol."static.".$_SERVER['HTTP_HOST']."/".$file;
        }
    }
}