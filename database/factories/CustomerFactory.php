<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Customer;
use Faker\Generator as Faker;

$factory->define(Customer::class, function (Faker $faker) {
    return [
        
        'title' => $faker->title,
        'firstname' => $faker->firstname,
        'lastname' => $faker->lastname,
        'email' => $faker->unique()->safeEmail,
        'mobile' => $faker->e164PhoneNumber,
        'phone' => $faker->phoneNumber,
        'balance' => $faker->numberBetween($min = -5000, $max = 100000),
        'house' => $faker->buildingNumber,
        'road' => $faker->streetName,
        'village' => $faker->cityPrefix,
        'postoffice' => $faker->secondaryAddress,
        'area' => $faker->streetSuffix,
        'city' => $faker->city,
        'district' => $faker->state,
        'postalcode' => $faker->postcode,
        'address' => $faker->address,
        'dob' => $faker->date($format = 'Y-m-d', $max = 'now'),
        'photo'=>  $faker->imageUrl($width = 200, $height = 200),

    ];
});
