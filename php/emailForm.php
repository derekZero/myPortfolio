<?php
$POST=$_REQUEST['action'];
if($action=="emailForm.php") {
    $name=$_REQUEST['name'];
    $email=$_REQUEST['email'];
    $phone=$_REQUEST['phone'];
    $skype=$_REQUEST['skype'];
    $message=$_REQUEST['message'];
    else{
        $from="From: $name<$email>/r/nReturn-path: $email";
        $phone="Phone: $phone";
        $skype="Skype: $skype";
        $subject="Response from Portfolio";
        mail("derek.guzman777@gmail.com",$subject,$message,$from);
    }
}