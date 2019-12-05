<?php
    if(empty($_POST)){//when there is an error make this message
        echo 'No...';
        exit;
    }

        $name ='';
        $email = '';
        $subject = '';
        $message = '';
        $recipient = 'xstiinct@gmail.com';

    //some validations

    if(isset($_POST['name'])){
        $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    }

        if(isset($_POST['email'])){
            $email = str_replace(array("\r", "\n", "%0a", "%0d", '', $_POST['email']));
            $email = filter_var($email, FILTER_SANITIZE_EMAIL);
        }

        if(isset($_POST['subject'])){
            $subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
        }

        if(isset($_POST['message'])){
            $message = $_POST['message'];
        }


        $headers = [
            'From' => 'noreply@test.ca',
            'Reply-To' =>$name. '<'.$email.'>'
        ];

        if(mail($recipient,$subject,$message,$headerss)){
            echo '<p>Thank you for contacting me,' .$name. '. You will get a reply in 24 hours.</p>';
        }else{
            echo '<p>We are sorry but the email did not go through. </p>';

        }
    //add required fields, so data entered isn't empty
    //restrictions for validation, set character length
?>