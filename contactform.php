<?php
	if (isset($_POST["submit"])) {
		$name = $_POST['name'];
		$email = $_POST['email'];
		$message = $_POST['message'];
		$human = intval($_POST['human']);
		$from = $email; 
		
		// WARNING: Be sure to change this. This is the address that the email will be sent to
		$to = 'tonytranslator@yahoo.fr'; 
		
		$subject = "Message from ".$name." ";
		
		$body = "From: $name\n E-Mail: $email\n Message:\n $message";

?>
