<?php
	include("konekcija.php");

	function proveriLogovanje(){
		global $con;
		if(isset($_SERVER['HTTP_TOKEN'])){
			$token = $_SERVER['HTTP_TOKEN'];
			$result = $con->prepare("SELECT * FROM korisnik WHERE token=:token");
			$result->bindParam(":token",$token);
			$result->execute();
			if($data = $result->fetch() > 0)
			{
				return true;
			}
			else{
				return false;
			}
		}
		else{
			return false;
		}
	}

	function login($username, $password){
		global $con;
		$array = array();
		if(proveriLog($username, $password)){
			$id = sha1(uniqid());
			$result2 = $con->prepare("UPDATE korisnik SET token=:token WHERE username=:username");
			$result2->bindParam(":token",$id);
			$result2->bindParam(":username",$username);
			$result2->execute();
			$array['token'] = $id;
		} else{
			header('HTTP/1.1 401 Unauthorized');
			$array['error'] = "Nesto Vam nije validno";
		}
		return json_encode($array);
	}

    function proveriLog($username, $password){
		global $con;
		$password = md5($password);
		$result = $con->prepare("SELECT * FROM korisnik WHERE username=:username AND password=:password");
		$result->bindParam(":username", $username);
		$result->bindParam(":password", $password);
		$result->execute();
		if($data = $result->fetch() > 0){
			return true;
		}
		else{
			return false;
		}
	}

	function korisnikRegistracija($username, $password){
		global $con;
		$array = array();
		$errors = "";
		if(proveraKorisnika($username)){
			$errors .= "Korisnicko ime vec postoji \r\n";
		}
		if($username == ""){
			$errors .= "Korisnicko ime ne moze biti prazno \r\n";
		}
		if($password == ""){
			$errors .= "Passwor ne moze biti prazan \r\n";
		}

		if($errors == ""){
			$stmt = $con->prepare("INSERT INTO korisnik (username, password) VALUES (:username, :password)");
			$password =md5($password);
			$stmt->bindParam(":username", $username);
			$stmt->bindParam(":password", $password);
			if($stmt->execute()){
				$id = sha1(uniqid());
				$result2 = $con->prepare("UPDATE korisnik SET token=:token WHERE username=:username");
				$result2->bindParam(":token",$id);
				$result2->bindParam(":username",$username);
				$result2->execute();
				$array['token'] = $id;
			}else{
				header('HTTP/1.1 400 Bad request');
				$array['error'] = "Greska pri konekciji";
			}
		} else{
			header('HTTP/1.1 400 Bad request');
			$array['error'] = json_encode($errors);
		}

		return json_encode($array);
	}

	function proveraKorisnika($username){
		global $con;
		$result = $con->prepare("SELECT * FROM korisnik WHERE username=:username");
		$result->bindParam(":username",$username);
		$result->execute();
		if($data = $result->fetch() > 0)
		{
			return true;
		}
		else{
			return false;
		}
	}
	
	function dodajK($ime, $koreograf){
    global $con;
    $rarray = array();
    if(proveriLogovanje()){
		$stmt = $con->prepare("INSERT INTO koreografije (Ime, Koreograf) VALUES (:ime, :koreograf)");
		$stmt->bindParam(":ime", $ime);
		$stmt->bindParam(":koreograf", $koreograf);
        if($stmt->execute()){
            $rarray['success'] = "ok";
        }else{
            $rarray['error'] = "Database connection error";
        }
    } else{
        $rarray['error'] = "Please log in";
        header('HTTP/1.1 401 Unauthorized');
    }
    return json_encode($rarray);
}
?>