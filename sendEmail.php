<?php
use PHPMailer\PHPMailer\PHPMailer;

require_once 'phpmailer/Exception.php';
require_once 'phpmailer/PHPMailer.php';
require_once 'phpmailer/SMTP.php';

$mail = new PHPMailer(true);
$alert = '';

if(isset($_POST['submit'])){
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

try{
   $mail->isSMTP();
    $mail->Host = 'ssl://business92.web-hosting.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'emmanuelfabiani@beanowebdesign.com';
    $mail->Password = 'Blubird2306!';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = '465';

    $mail->setFrom('emmanuelfabiani@beanowebdesign.com');
    $mail->addAddress('emmanuelfabiani@beanowebdesign.com'); //Email address where emails will be received

    $mail->isHTML(true);
    $mail->Subject= 'Message from Beano Web Design';
    $mail->Body = "<h3>Name: $name <br>Email: $email <br> Message: $message</h3>";

      $mail->send();
      $alert = 
      '<div class="sentMessage active">
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="times-circle" class="svg-inline--fa fa-times-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"></path></svg>         
       <p>Thank you! Your message was successfully sent.</p>
      </div>';
      //  header('Location: index.php//#contact');
} catch (Exception $e){
   $alert = '<div class="alert-error">
                <span>'.$e->getMessage().'</span>
                </div>';
}
}

?>
