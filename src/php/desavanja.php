
 	<?php
     	header("Access-Control-Allow-Origin: *");
        header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization, Token, token, TOKEN');
    	require_once("konekcija.php");

        $stmt = $con->prepare("SELECT id, ime, koreograf FROM Koreografije");
        $stmt->execute();

        while($data = $stmt->fetch()) {
            $koreografije[] = array('ID' => $data["id"],'Ime' => $data["ime"], 'Koreograf' => $data["koreograf"]);

        }

    	echo json_encode($koreografije);
    ?>
