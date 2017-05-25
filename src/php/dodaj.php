<?php
header("Access-Control-Allow-Origin: *");
require_once("konekcija.php");

if ( isset($_POST['name']) && isset($_POST['koreograf']) && isset($_POST['manufacturer'])) {
    $name = $_POST['name'];
	$price = $_POST['koreograf'];

    $stmt = $con->prepare("INSERT INTO Koreografija (name, koreografija) VALUES (:name, :koreografija)");
	$stmt->bindParam(":name", $name);
    $stmt->bindParam(":koreografija", $koreografija);

    $stmt->execute();
    echo "Uspesno";

}

?>