<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVisitorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('visitors', function (Blueprint $table) {
            $table->bigIncrements('request_id');
            $table->bigInteger('visitor_id')->nullable();
            $table->string('device_type')->nullable();
            $table->string('device')->nullable();
            $table->string('os')->nullable();
            $table->string('browser_name')->nullable();
            $table->string('browser_version')->nullable();
            $table->ipAddress('ip')->nullable();
            $table->string('country')->nullable();
            $table->string('latitude')->nullable();
            $table->string('longitute')->nullable();
            $table->tinyInteger('year')->nullable();
            $table->tinyInteger('month')->nullable();
            $table->tinyInteger('day')->nullable();
            $table->tinyInteger('hour')->nullable();
            $table->tinyInteger('minute')->nullable();
            $table->bigInteger('time')->nullable();
            $table->string('requested_url', 500)->nullable();
            $table->string('refference', 500)->nullable();
            $table->enum('reqest_type', ['web', 'api'])->nullable();
            $table->string('user_agent', 500)->nullable();
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
        Schema::dropIfExists('visitors');
    }
}
