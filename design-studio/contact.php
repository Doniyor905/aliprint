<?php
	
	$name = $_POST['name'];
	$company = $_POST['company'];
	$phone = $_POST['phone'];
	$srok = $_POST['srok'];

	$email = "info@ali-print.uz";

	$message = "Ism: ".$name."<br>Companiya: ".$company."<br>Telefon: ".$phone."<br>Habar: ".$srok;

    $theme = "Сообщения от Aliprint";
    $headers = 'From: '. $email . "\r\n" . 'Reply-To: '. $email . "\r\nContent-type: text/html; charset=utf-8\r\n" . 'X-Mailer: PHP/' . phpversion();

    $status = mail($email, $theme, $message, $headers);

    if ($status) {
    	 $response = array('type' => 'mail', 'text' => "Buyurtmangiz qabul qilindi!");	
    }else{
    	 $response = array('type' => 'mail', 'text' => "Buyurtmangiz yuborilmadi, Qaytatdan yozing!");	
    }

 	echo json_encode( $response );
 	exit();
?>