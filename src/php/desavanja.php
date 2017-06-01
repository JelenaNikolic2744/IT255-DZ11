<?php
 	<?php
     	header("Access-Control-Allow-Origin: *");
    	require_once("konekcija.php");

        $stmt = $con->prepare("SELECT ime, koreograf FROM Koreografije");
        $stmt->execute();

        while($data = $stmt->fetch()) {
            $koreografije[] = array('Ime' => $data["ime"], 'Koreograf' => $data["koreograf"]);

        }

    	echo json_encode($koreografije);
    ?>
?>