<?php
	$to = "lubieplackikonrad@gmail.com";
	$subject = "TEST";
	$message = $_POST['message'];
	mail($to,$subject,$message);
?>