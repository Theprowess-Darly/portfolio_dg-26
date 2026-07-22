<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ContactSubmission;
use Illuminate\Http\Request;

class AdminContactController extends Controller
{
    // GET /api/admin/contact-submissions
    public function index(Request $request)
    {
        $unread = ContactSubmission::query()
            ->where('is_read', false)
            ->orderByDesc('created_at')
            ->paginate(20);
        return response()->json($unread);
    }
    // PATCH /api/admin/contact-submissions/{id}/read
    public function markAsRead(int $id)
    {
        $submission = ContactSubmission::findOrFail($id);
        $submission->is_read = true;
        $submission->save();

        return response()->json([
            'ok' => true,
            'id' => $submission->id,
            'is_read' => $submission->is_read,
        ]);
    }

}
