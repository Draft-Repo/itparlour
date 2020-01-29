<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('post_author_id')->default(1);
            $table->string('category_id')->nullable();
            $table->string('post_slug')->unique();
            $table->string('post_guid')->unique();
            $table->string('feature_image')->nullable();
            $table->text('post_title')->nullable();
            $table->text('post_type');
            $table->longText('post_content')->nullable();
            $table->enum('post_visibility', ['public', 'private', 'protected'])->default('public');
            $table->string('visible_to')->nullable();
            $table->enum('post_status', ['published', 'draft', 'pending', 'waiting'])->default('draft');
            $table->dateTime('post_available_after')->nullable();
            $table->string('post_password')->nullable();
            $table->text('tags')->nullable();
            $table->boolean('comment_status')->default(1);
            $table->integer('comment_count')->default(0);
            $table->boolean('ping_status')->default(1);
            $table->string('to_ping')->nullable();
            $table->boolean('ispinged')->default(0);
            $table->integer('post_parent_id')->nullable();
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
        Schema::dropIfExists('posts');
    }
}
