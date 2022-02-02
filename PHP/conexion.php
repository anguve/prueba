

<?php
function conectar(){
    $host="localhost:3308";
    $user="root";
    $pass="12345";

    $bd="coffe";

    $con=mysqli_connect($host,$user,$pass, $bd);

    mysqli_select_db($con,$bd);

    return $con;
}
?>