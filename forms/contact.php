<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
require 'PHPMailer-6.5/src/Exception.php';
require 'PHPMailer-6.5/src/PHPMailer.php';
require 'PHPMailer-6.5/src/SMTP.php';


// include 'vendor/autoload.php';
include 'web.config.php';
if (!empty($_SERVER['HTTP_CLIENT_IP']))
{
    $ip = $_SERVER['HTTP_CLIENT_IP'];
}
elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))
{
    $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
}
else
{
    $ip = $_SERVER['REMOTE_ADDR'];
}
// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer();

try
{
    $mail->SMTPDebug = 0; // Enable verbose debug output
    $mail->isSMTP(); // Send using SMTP
    $mail->Host = 'smtp.gmail.com'; // Set the SMTP server to send through
    $mail->SMTPAuth = true; // Enable SMTP authentication
    $mail->Username = $config['SENDER_EMAIL']; // SMTP username
    $mail->Password = $config['SENDER_EMAIL_PASSWORD']; // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encoura>    $mail->Port = 587; // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
    //Recipients
    $mail->setFrom($config['RAMA_EMAIL'],$config['NAME_SENDER_EMAIL']);
    $mail->addAddress($config['DESTINATION_EMAIL']); // Add a recipient
    $mail->isHTML(true); // Set email format to HTML
    $mail->Subject = $_POST['select_service'];
    $mail->Body = 'Name : '.$_POST['name'].'<br>Email : '.$_POST['email'].'<br>Message : '.$_POST['message'] . '<br>IP : ' . $ip;
    $mail->send();
    echo "Your message has been sent. Thank you!";
}
catch(Throwable $e)
{
    http_response_code(500);
}
