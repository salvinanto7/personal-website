<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$subject = $_POST['subject'];
/*
$content="From: $name \n Email: $email \n Message: $message";
$recipient = "b18ec065@mace.ac.in";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $content, $mailheader) or die("Error!");
echo "Email sent!";*/

if($_POST["message"]){
    mail("b18ec065@mace.ac.in","Can I get your appointment!",$message," ")
}
?>