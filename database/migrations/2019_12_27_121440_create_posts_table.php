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
            $table->integer('author_id')->default(1);
            $table->string('category_id')->nullable();
            $table->string('slug')->unique();
            $table->string('guid')->unique(); //World wide unicque url;
            $table->string('feature_image')->nullable();
            $table->text('title')->nullable();
            $table->text('type')->nullable();
            $table->longText('raw_content')->nullable(); // Content as created;
            $table->longText('optimized_content')->nullable(); // Content after deducting inline style for best seo;
            $table->string('inline_style')->nullable(); // Inline styles stored here for frontend delivery;
            $table->string('custom_style')->nullable();
            $table->enum('visibility', ['public', 'private', 'protected'])->default('public');
            $table->string('visible_to')->nullable();
            $table->enum('status', ['published', 'draft', 'pending', 'deleted'])->default('draft');
            $table->dateTime('available_after')->nullable();
            $table->string('password')->nullable();
            $table->text('tags')->nullable();
            $table->boolean('comment_status')->default(1);
            $table->integer('comment_count')->default(0);
            $table->boolean('ping_status')->default(1);
            $table->string('to_ping')->nullable();
            $table->boolean('ispinged')->default(0);
            $table->integer('parent_id')->nullable();
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
