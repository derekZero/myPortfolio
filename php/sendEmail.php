<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$skype = $_POST['skype'];
	$message = $_POST['message'];
	$to = "derek.guzman777@gmail.com";
	$subject = "Reply from Portfolio";
	mail($to, $subject, $message, "From: $name, $email, $phone, $skype");
?>

<?php
$email_recipients = "derek.guzman777@gmail.com";
$visitors_email_field = 'email';
$email_subject = "Reply from Portfolio";
$enable_auto_response = true;
$auto_response_subj = "Thanks! I'll be in touch.";
$auto_response ="
Hi,

Thanks for emailing me from my portfolio.

I wanted to let you know I successfully received your email.

You'll have a reply from me shortly.

Regards,
Derek

";
$email_from = '';
if(!isset($_POST['submit']))
{
	echo "error; you need to submit the form!".print_r($_POST,true);
	exit;
}
@mail($email_recipients, $email_subject, $email_body, $headers);
if($enable_autao_response == true && !empty($visitor_email))
{
	$headers = "From: $email_from \r\n";
	@mail($visitor_email, $auto_response_subj, $auto_response, $headers);
}
if(isset($_SERVER['HTTP_X_REQUESTED_WITH'])
	AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest')
{
	echo "success";
} else {
	header('Location: '.)
}