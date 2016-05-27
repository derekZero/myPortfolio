<?php
$email_recipients = "derek.guzman777@gmail.com";
$visitors_email_field = 'email';
$email_subject = "Portfolio Response";
$enable_auto_response = true;
$auto_response_subj = "Thanks for emailing me";
$auto_response = "
Hire
Thanks for email me. I'll be in touch with your shortly!

Regards
Derek Guzman
";
$email_from = '';
$thank_you_url = 'thank-you.html';
if(!isset($_POST['submit']))
{
	echo "error; you need to submit the form!".print_r($_POST,true);
	exit;
}
require_once "includes/formvalidator.php";
validator = new FormValidator();
$validator->addValidation("name","req","Don't forget your name");
$validator->addValidation("email","req","Don't forget your email");
if(false == $validator->ValidateForm())
{
	echo"<B>Validation Errors:</B>";
	$error_hash = $validator->GetErrors();
	foreach($error_hash as $inpname => $inp_err)
	{
		echo "<p>$inpname : $inp_err</p>\n";
	}
	exit;
}
$visitor_email='';
if(!empty($visitors_email_field))
{
	$visitor_email = $_POST[$visitors_email_field];
}
if(empty($email_from))
{
	$host = $_SERVER['SERVER_NAME'];
	$email_from ="forms@$host";
}
$fieldtable = '';
foreach ($_post as $field => $value)
{
	if($field == 'submit')
	{
		continue;
	}
	if(is_array($value))
	{
		$value = implode(", ", $value);
	}
	$fieldtable .= "$field: $value\n";
}
$extra_info = "User's IP Address: ".$_SERVER['REMOTE-ADDR']."\n";
$email_body = "You have received a new portfolio response.\n$fieldtable\n $extra_info";
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";
@mail($mail_recipients, $email_subject, $email_body, $headers);
if($enable_auto_response == true && !empty($visitor_email))
{
	$headers = "From: $email_from \r\n";
	@mail($visitor_email, $auto_response_subj, $auto_response, $headers);
}
if (isset($_SERVER['HTTP_X_REQUESTED_WITH'])
	AND strtlower($_SERVER['HTTP_X_REQUESTED_WITH']) ==='xmlhttprequest'
{
	echo "success";
}
else
{
	header('Location: '.$thank_you_url);
}
?>