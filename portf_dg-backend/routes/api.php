<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\controllers\Api\ProjectsController;
use Illuminate\Http\controllers\Api\BlogController;
use Illuminate\Http\controllers\Api\ContactController;
//use Illuminate\Http\controllers\Api\AdminAuthController;
use App\Http\controllers\Api\AdminAuthController;
//use Illuminate\Http\controllers\Api\AdminContactController;
use App\Http\controllers\Api\AdminContactController;


//Public API routes
Route::get('/projects', [ProjectsController::class, 'index']);
Route::get('/projects/{slug}', [ProjectsController::class, 'show']);

Route::get('/blogs', [BlogController::class, 'index']);
Route::get('/blogs/{slug}', [BlogController::class, 'show']);

Route::post('/contact', [ContactController::class, 'store']);

Route::get('/resume', [ContactController::class, 'ResumeLink']); // Returns { "resume_link": "https://example.com/resume.pdf" }

//Admin login(Protected by passwordenv)
Route::post('/admin/login', [AdminAuthController::class, 'login']);

//Admin protected routes
Route::middleware('auth:sanctum')->prefix('admin')->group(function () {
    //projects CRUD will come next milestone; for now only contact inbox is implemented
    Route::get('/contacts-submissions', [AdminContactController::class, 'index']);
    Route::patch('/contacts-submissions/{id}/mark-as-read', [AdminContactController::class, 'markAsRead']);
});

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');