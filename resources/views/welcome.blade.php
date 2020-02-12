<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name')}} || {{ config('app.subtitle')}}</title>

    <!-- Fonts -->
    <!-- <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet"> -->
    <link rel="stylesheet" type="css/text"  href="/css/app.css"/>
</head>

<body>
    <div class="flex-center position-ref full-height">
        <div id="root"></div>
    </div>
    <script src="/js/admin.js"></script>
</body>

</html>