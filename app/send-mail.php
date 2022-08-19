<?php
$name = $_POST['userName'];
$email = $_POST['userEmail'];
$message = $_POST['userMessage']

$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$message = htmlspecialchars($message);

$name = urldecode($name);
$email = urldecode($email);
$message = urldecode($message);

$name = trim($name);
$email = trim($email);
$message = trim($message);

if(mail("dev.choivlad@gmail.com", "Request from personal page", "Sender:".$name.". E-mail: ".$email." Message: ".$message ,"From: info@choivlad.site \r\n")) {
echo "The message has been submitted"
} else {"Something went wrong"}

?>
