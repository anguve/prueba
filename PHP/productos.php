<?php 
    include("conexion.php");
    $con=conectar();

    $sql="SELECT *  FROM productos";
    $query=mysqli_query($con,$sql);
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Productos</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="css/style.css" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
        
    </head>
    <body>
            <div class="container mt-5">
                    <div class="row"> 
                        <div class="col-md-4">
                            <h1>Ingresar Elemento</h1>
                                <form action="insertar.php" method="POST">

                                    <!-- <input type="text" class="form-control mb-3" name="id" placeholder="id"> -->
                                    <input type="text" class="form-control mb-3" name="nombre_producto" placeholder="nombre_producto">
                                    <input type="text" class="form-control mb-3" name="referencia" placeholder="referencia">
                                    <input type="text" class="form-control mb-3" name="precio" placeholder="precio">
                                    <input type="text" class="form-control mb-3" name="peso" placeholder="peso">
                                    <input type="text" class="form-control mb-3" name="categoria" placeholder="categoria">
                                    <input type="text" class="form-control mb-3" name="stock" placeholder="stock">
                                    <input type="date" class="form-control mb-3" name="fecha_creacion" placeholder="fecha_creacion">
                                    <!-- <input type="file" class="form-control mb-3" name="image" placeholder="image"> -->
                            
                           
                                    
                                    <input type="submit" class="btn btn-primary" value="Agregar elemento">
                                </form>
                        </div>

                        <div class="col-md-8">
                            <table class="table" >
                                <thead class="table-success table-striped" >
                                    <tr>
                                        <th>id</th>
                                        <th>nombre_producto</th>
                                        <th>referencia</th>
                                        <th>precio</th>
                                        <th>peso</th>
                                        <th>categoria</th>
                                        <th>stock</th>
                                        <th>fecha</th>
                                        <!-- <th>imagen</th> -->
                                        <th></th>
                           <th></th>
                           <th></th>       <th></th>
                                    </tr>
                                </thead>

                                <tbody>
                                        <?php
                                            while($row=mysqli_fetch_array($query)){
                                        ?>
                                            <tr>
                                                <th><?php  echo $row['id']?></th>
                                                <th><?php  echo $row['nombre_producto']?></th>
                                                <th><?php  echo $row['referencia']?></th>
                                                <th><?php  echo $row['precio']?></th>
                                                <th><?php  echo $row['peso']?></th>    
                                                <th><?php  echo $row['categoria']?></th>    
                                                <th><?php  echo $row['stock']?></th>    
                                                <th><?php  echo $row['fecha_creacion']?></th>    
                                        
                                              
                                                <th><a href="actualizar.php?id=<?php echo $row['id'] ?>" class="btn btn-info">Editar</a></th>
                                                <th><a href="deleted.php?id=<?php echo $row['id'] ?>" class="btn btn-danger">Eliminar</a></th>  
                                                <th><a href="shop.php?id=<?php echo $row['id'] ?>" class="btn btn-warning">Comprar</a></th>                                         
                                            </tr>
                                        <?php 
                                            }
                                        ?>
                                </tbody>
                            </table>
                        </div>
                    </div>  
            </div>
    </body>
</html>

