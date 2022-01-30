<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;



require 'vendor/autoload.php';
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
    //Server settings
    $mail->SMTPDebug = 0; // Enable verbose debug output
    $mail->isSMTP(); // Send using SMTP
    $mail->Host = 'smtp.gmail.com'; // Set the SMTP server to send through
    $mail->SMTPAuth = true; // Enable SMTP authentication
    $mail->Username = getenv('RAMA_EMAIL'); // SMTP username
    $mail->Password = getenv('RAMA_EMAIL_PASSWORD'); // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port = 587; // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
    //Recipients
    $mail->setFrom($_POST['email'], $_POST['name']);
    $mail->addAddress('contact@ramasolutions.tech'); // Add a recipient
    $mail->isHTML(true); // Set email format to HTML
    $mail->Subject = $_POST['select_service'];
    $mail->Body = $_POST['message'] . '<br><br>IP : <br>' . $ip;
    $mail->send();
    echo "Your message has been sent. Thank you!";
}
catch(Throwable $e)
{
    http_response_code(500);
}

