<?php

function capitalize($str) {
    return preg_replace_callback('/(?<=( |-))./',
            function ($m) { return strtoupper($m[0]); },
            $str);
}

function validate_email($email) {
    if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return false;
    }
    return true;
}

function validate_phone($phone) {
    if(!preg_match('/^(\+27|27|0)[0-9][0-9]{8}$/', $phone)) {
        return false;
    }
    return true;
}