<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

// Обработчик всех маршрутов
Route::get('/{any}', function () {
    return view('app');  // Возвращает шаблон app.blade.php
})->where('any', '.*');  // Сопоставляет любые маршруты
