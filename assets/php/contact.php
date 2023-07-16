
<?php
// Check for empty fields
if (
    empty($_POST['name'])          ||
    empty($_POST['email'])         ||
    empty($_POST['message'])    ||
    !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)
) {
    echo "Fill required fields properly!";
    return false;
}

$name = $_POST['name'];
$email_address = $_POST['email'];
$message = $_POST['message'];

// Create the email and send the message
$to = 'yourname@yourdomain.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$headers = "From: noreply@yourdomain.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.

$email_subject = "Website Contact Form:  $name";

$email_body = "You have received a new message from your <strong>website</strong> contact form.<br><br>" .
    "Here are the details:<br><br>
              Name: $name <br><br>
              Email: $email_address <br><br>
              Message:<br> $message";

$headers .= "Reply-To: $email_address";
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=utf-8";

$success = mail($to, $email_subject, $email_body, $headers);

if ($success) {
    header('location: ../../success.html');
} else {
    echo "Mail not send!!";
}


?>