<?php
include("Mail.php"); 

$recipients = "info@in2teck.com"; 

$headers["From"]    = $_GET["email"]; 
$headers["To"]      = "info@in2teck.com"; 
$headers["Subject"] = "Contacto pagina web: " . $_GET["nombre"] . " " . $_GET["email"]; 

$body = $_GET["body"]; 

$params["host"] = "smtp.gmail.com"; 
$params["port"] = "587"; 
$params["auth"] = true; 
$params["username"] = "in2teck@gmail.com"; 
$params["password"] = "In2Teck2013"; 

$mail_object =& Mail::factory("smtp", $params); 

$mail_object->send($recipients, $headers, $body); 

?>
