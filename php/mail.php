<?php 

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
        $mail = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
        $number = filter_var($_POST['number'], FILTER_SANITIZE_NUMBER_INT);
        $subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
        $msg = filter_var($_POST['message'], FILTER_SANITIZE_STRING);


        // $formErrors = array();

        // if (strlen($msg) < 10) {
        //     $formErrors [] = "Message Can't be Less Than 10 Characters";
        // }

        // If No Errors Send The Email [ mail (To, Subject, Message, Headers, Parameters) ]
        
        $headers = "From: $mail \r\n";

        mail('moaz.12021@gmail.com', "Contact Form", $msg, $headers);
        
    }


?>