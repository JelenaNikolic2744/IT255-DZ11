<?php
	header("Access-Control-Allow-Origin: *");
	header('Access-Control-Allow-Methods: POST');
	header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization, Token, token, TOKEN');
	include("funkcije.php");
	
	if (isset($_POST['ID']) && isset($_POST['Ime']) && isset($_POST['Koreograf'])) {
		$id = $_POST['ID'];
		$ime = $_POST['Ime'];
		$koreograf = $_POST['Koreograf'];
		
		echo promeniKoreo($id, $ime, $koreograf);
	}
?>