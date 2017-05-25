<?php
header("Access-Control-Allow-Origin: *");
try {
    $con = new PDO("mysql:host=localhost;dbname=koreografija", "root", "");
	$con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e){
	echo "Error: " . $e->getMessage();
}
?>