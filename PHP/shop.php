<?php 
    include("conexion.php");
    $con=conectar();

$id=$_GET['id'];

$sql="SELECT * FROM productos WHERE id='$id'";
$query=mysqli_query($con,$sql);

$row=mysqli_fetch_array($query);
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="css/style.css" rel="stylesheet">
        <title>Actualizar</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
        
    </head>
    <body>
                <div class="container mt-5">
                    <form action="shopUpdate.php" method="POST">
                    
                                <input type="hidden" name="id" value="<?php echo $row['id']  ?>">
                                    <img src="<?php echo $row['image']  ?>" alt="">
               
                                    <input readonly type="text" class="form-control mb-3" name="nombre_producto" placeholder="nombre_producto" value="<?php echo $row['nombre_producto']  ?>">
                                    <input readonly type="text" class="form-control mb-3" name="referencia" placeholder="referencia" value="<?php echo $row['referencia']  ?>">
                                    <input readonly type="text" class="form-control mb-3" name="precio" placeholder="precio" value="<?php echo $row['precio']  ?>">
                                    <input readonly type="text" class="form-control mb-3" name="peso" placeholder="peso" value="<?php echo $row['peso']  ?>">
                                    <input readonly type="text" class="form-control mb-3" name="categoria" placeholder="categoria" value="<?php echo $row['categoria']  ?>">
                                    <input readonly type="text" class="form-control mb-3" name="stock" placeholder="stock" value="<?php echo $row['stock']  ?>">
                                    <input readonly type="text" class="form-control mb-3" name="fecha_creacion" placeholder="fecha_creacion" value="<?php echo $row['fecha_creacion']  ?>">
                                    <input  type="text" class="form-control mb-3" name="numeroDeItems" placeholder="Cuantos a acomprar" >

                            <input type="submit" class="btn btn-primary btn-block" value="Comprar">
                    </form>
                    
                </div>
    </body>
</html>