<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAttachmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('attachments', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('attachment_author_id')->nullable();
            $table->string('attachment_guid')->unique();
            $table->string('attachment_title')->nullable();
            $table->string('attachment_alt_text')->nullable();
            $table->integer('attachment_poster_id')->nullable();
            $table->string('attachment_caption')->nullable();
            $table->string('attachment_password')->nullable();
            $table->string('attachment_mime_type');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('attachments');
    }
}
