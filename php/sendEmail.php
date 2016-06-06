<?php
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		$name = strip_tags(trim($_POST["name"]));
				$name = str_replace(array("\r","\n"),array(" "," "),$name);
		$email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
		$phone = strip_tags(trim($_POST["phone"]));
				$phone = str_replace(array("\r","\n"),array(" "," "),$phone);
		$skype = strip_tags(trim($_POST["skype"]));
				$skype = str_replace(array("\r","\n"),array(" "," "),$skype);
		$message = trim($_POST["message"]);
		if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
			http_response_code(400);
			echo "Oops! There was a problem with your submission. Please complete the form and try again.";
			exit;
		}
		$recipient = "derek.guzman777@gmail.com";
		$subject = "Portfolio reply from $name";
		$email_content = "Name: $name\n";
		$email_content .= "Email: $email\n\n";
		$email_content .= "Phone: $phone\n\n";
		$email_content .= "Skype: $skype\n\n";
		$email_content .= "Message:\n$message\n";
		$email_headers = "From: $name <$email>";
		if (mail($recipient, $subject, $email_content, $email_headers)) {
			http_response_code(200);
			echo "Thank You! Your message has been sent.";
		} else {
			http_response_code(500);
			echo "Oops! Something went wrong and we couldn't send your message.";
		}

	} else {
		http_response_code(403);
		echo "There was a problem with your submission, please try again.";
	}

?>