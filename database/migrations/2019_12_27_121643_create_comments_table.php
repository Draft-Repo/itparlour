<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comments', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('comment_author_id')->default(0);
            $table->string('comment_origin')->nullable();
            $table->integer('comment_origin_id')->nullable();
            $table->longText('comment_content')->nullable();
            $table->enum('comment_status', ['approved', 'unapproved', 'draft', 'deleted'])->default('unapproved');
            $table->integer('comment_replies')->default(0);
            $table->integer('comment_liked')->default(0);
            $table->integer('comment_disliked')->default(0);
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
        Schema::dropIfExists('comments');
    }
}
