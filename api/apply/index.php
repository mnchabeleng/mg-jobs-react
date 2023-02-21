<?php

require '../config.php';
require '../helpers.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require '../vendor/phpmailer/phpmailer/src/Exception.php';
require '../vendor/phpmailer/phpmailer/src/PHPMailer.php';
require '../vendor/phpmailer/phpmailer/src/SMTP.php';

if($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = isset($_POST['name']) ? capitalize($_POST['name']) : null;
    $email = isset($_POST['email']) ? $_POST['email'] : null;
    $phone = isset($_POST['phone']) ? $_POST['phone'] : null;
    $subject = isset($_POST['subject']) ? $_POST['subject'] : null;
    $message = isset($_POST['message']) ? $_POST['message'] : null;

    $validations = [
        'name' => null,
        'email' => null,
        'phone' => null,
        'subject' => null,
        'message' => null
    ];

    if(empty($name) || !validate_email($email) || !validate_phone($phone) || empty($message)) {
        if(empty($name)) {
            $validations['name'] = 'Name is required.';
        }

        if(!validate_email($email)) {
            $validations['email'] = 'Enter a valid email address.';
        }

        if(!validate_phone($phone)) {
            $validations['phone'] = 'Enter a valid phone number.';
        }

        if( empty($subject)) {
            $validations['subject'] = 'Enter a subject for your message.';
        }

        if( empty($message)) {
            $validations['message'] = 'Enter a message.';
        }
            
        echo json_encode([
            'status' => 'validation',
            'message' => $validations
        ]);

        die;
    } else {
        echo json_encode([
            'status' => 'success',
            'message' => 'Your application has been sent.'
        ]);
    }
}