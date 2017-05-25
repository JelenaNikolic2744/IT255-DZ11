<?php
 	<?php
     	header("Access-Control-Allow-Origin: *");
    	require_once("konekcija.php");

        $stmt = $con->prepare("SELECT Ime, Koreograf FROM Koreografije");
        $stmt->execute();

        while($data = $stmt->fetch()) {
            $koreografije[] = array('Ime' => $data["Ime"], 'Koreograf' => $data["Koreograf"]);

        }

    	echo json_encode($koreografije);
    ?>
?>