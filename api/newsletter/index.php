<?php

require '../config.php';
require '../helpers.php';

if($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = isset($_POST['name']) ? capitalize(ucfirst($_POST['name'])) : null;
    $email = isset($_POST['email']) ? $_POST['email'] : null;

    $validations = [
        'name' => null,
        'email' => null
    ];

    if(empty($name) || !validate_email($email)) {
        if(empty($name)) {
            $validations['name'] = 'Name is required.';
        }

        if(!validate_email($email)) {
            $validations['email'] = 'Enter a valid email address.';
        }
            
        echo json_encode([
            'status' => 'validation',
            'message' => $validations
        ]);

        die;
    } else {
        echo json_encode([
            'status' => 'success',
            'message' => 'Thank you for subscribing to our newsletter.'
        ]);
    }

}