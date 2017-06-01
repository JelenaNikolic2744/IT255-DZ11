<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization, Token, token, TOKEN');
require_once("funkcije.php");


if ( isset($_POST['Ime']) && isset($_POST['Koreograf'])) {
    $name = $_POST['Ime'];
	$koreograf = $_POST['Koreograf'];
    echo dodajK($name, $koreograf);
echo "nestp";
}

?>