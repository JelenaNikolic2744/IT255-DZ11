<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization, Token, token, TOKEN');
include("funkcije.php");
if(isset($_GET['ID'])){
    echo brisi(intval($_GET['ID']));
}
?>