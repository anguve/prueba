<?php

include("conexion.php");
$con=conectar();

$id=$_POST['id'];

$stock=$_POST['stock'];

$numeroDeItems = $_POST['numeroDeItems'];

$resultado  = $stock - $numeroDeItems;

if ($resultado>0) {
    $sql="UPDATE productos SET  
    stock='$resultado' WHERE id='$id'";
    $query=mysqli_query($con,$sql);
}else{
    echo 'no hay tal cantidad';
}


    if($query){
        Header("Location: productos.php");
    }
?>