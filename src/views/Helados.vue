<template>
  <div class="contenedor">
    <div class="img-larga">
      <img src="https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/11/27142508/Mariana-Helados-1.jpg" height="500" alt="">
    </div>
    <div class="cont-img">
      <a href="tipo">
        <i><h1>H E L A D O S</h1></i>
      </a>
    </div>
    <div class="contenedor-tarjetas">
      <div class="tarjetas">
        <img src="https://www.gelatecgroup.com/wp-content/uploads/2021/03/brownie-con-helado.jpg" alt="">
        <h1>BROWNIE CON HELADO</h1>
        <p>La versión clásica de este postre es simplemente una porción de helado sobre un cuadrado tibio de brownie</p>
        <p class="precio">precio 1</p>
      </div>
      <div class="tarjetas">
        <img src="https://www.gelatecgroup.com/wp-content/uploads/2021/03/sandwich-helado.jpg" alt="">
        <h1>SANDWICH DE HELADO</h1>
        <p>Una opcion interesante y muy deliciosa para un dia caluroso, una barra de helado dentro de dos ¡galletas suaves!.</p>
        <p class="precio">precio</p>
      </div>
      <div class="tarjetas">
        <img src="https://www.gelatecgroup.com/wp-content/uploads/2021/03/helado-mochi-japones.jpg" alt="">
        <h1>MOCHI JAPONES</h1>
        <p>Un helado en forma de pelota, el tamaño de un bocadillo, un dulce japonés de forma redondeada hecho a base de harina de mochigome </p>
        <p class="precio">precio</p>
      </div>
      <div class="tarjetas">
        <img src="https://www.gelatecgroup.com/wp-content/uploads/2021/03/helado-frito.jpg" alt="">
        <h1>HELADO FRITO</h1>
        <p>No es tan descabellado como suena, tampoco es tan complicado como puede parecer. simplemente !exquisito¡</p>
        <p class="precio">precio</p>
      </div>
      <div class="tarjetas">
        <img src="https://www.gelatecgroup.com/wp-content/uploads/2021/03/helado-en-rollo.jpg" alt="">
        <h1>HELADO EN ROLLO</h1>
        <p> Atractivo a la vista y al paladar, una mezcla basada en helado deslactosado en el ingrediente central que se convertirá en deliciosos rollos fríos.</p>
        <p class="precio">precio</p>
      </div>
      <div class="tarjetas">
        <img src="https://www.gelatecgroup.com/wp-content/uploads/2021/03/helado-semifreddo.jpg" alt="">
        <h1>HELADO SEMIFREDDO</h1>
        <p>Este es un tipo de helado muy delicioso y sencillo, una mexcla de una porcion de helado y una de crema batida</p>
        <p class="precio">precio</p>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.img-larga{
  background-repeat: no-repeat;
  background-size: 100px ;
  margin-top: 20px;
}
.img-larga img{
  border-radius: 20px;
  min-width: 100%;
}
.contenedor{
  text-align: center;
}
.cont-img h1{
  font-size: 60px;
  color: rgb(102, 7, 7);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.cont-img h1:hover{
  color: gold;
}
.contenedor-tarjetas{
  width: 100%;
  max-width: 2200px;
  height: 1500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  background-color: rgb(246, 143, 129);
  border-radius: 20px;
}
.contenedor-tarjetas .tarjetas{
  widows: 330px;
  height: 560px;
  border-radius: 10px;
  box-shadow:  0 5px 20px rgb(255, 255, 255);
  overflow: hidden;
  margin: 100px;
  text-align: center;
  transition:  all 0.25s;
  background-color:  rgb(9, 202, 176);
}
.contenedor-tarjetas .tarjetas:hover{
  transform: translateY(-15px);
  box-shadow:  0 12px 16px rgba(0, 0, 0, 2);
  box-shadow:  0px 0px 15px 15px #66f0e4;
}
.contenedor-tarjetas .tarjetas img{
  width: 530px;
  height: 300px;
}
.contenedor-tarjetas .tarjetas h1{
  font-weight: 600;
  color: rgb(0, 0, 0);
}
.contenedor-tarjetas .tarjetas p{
  max-width: 520px;
  font-weight: 600;
  font-size: 22px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: #fff;
}
.contenedor-tarjetas .tarjetas .precio{
  color: gold;
}
</style>