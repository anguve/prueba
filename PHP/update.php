<?php

include("conexion.php");
$con=conectar();

$id=$_POST['id'];
$nombre_producto=$_POST['nombre_producto'];
$referencia=$_POST['referencia'];
$precio=$_POST['precio'];
$peso=$_POST['peso'];
$categoria=$_POST['categoria'];
$stock=$_POST['stock'];
$fecha_creacion=$_POST['fecha_creacion'];

$sql="UPDATE productos SET  nombre_producto='$nombre_producto',referencia='$referencia',
precio='$precio'  ,
peso='$peso' ,
categoria='$categoria' ,
fecha_creacion='$fecha_creacion' ,
stock='$stock'WHERE id='$id'";
$query=mysqli_query($con,$sql);

    if($query){
        Header("Location: productos.php");
    }
?>