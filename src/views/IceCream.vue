<template>
  <div class="contenedor">
    <div class="img-larga">
      <img src="https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/11/27142508/Mariana-Helados-1.jpg" height="500" alt="">
    </div>
    <div class="cont-img">
      <a href="tipoingles">
        <i><h1>ICE CREAMS</h1></i>
      </a>
    </div>
    <div class="contenedor-tarjetas">
      <div class="tarjetas">
        <img src="https://www.gelatecgroup.com/wp-content/uploads/2021/03/brownie-con-helado.jpg" alt="">
        <h1>BROWNIE WITH ICE CREAM</h1>
        <p>The classic version of this dessert is simply a slice of ice cream on a warm square of brownie.</p>
        <p class="precio">10 Bs</p>
      </div>
      <div class="tarjetas">
        <img src="https://www.gelatecgroup.com/wp-content/uploads/2021/03/sandwich-helado.jpg" alt="">
        <h1>ICE CREAM SANDWICH</h1>
        <p>An interesting and very delicious option for a hot day, an ice cream bar inside two soft cookies!</p>
        <p class="precio">6 Bs</p>
      </div>  
      <div class="tarjetas">
        <img src="https://www.gelatecgroup.com/wp-content/uploads/2021/03/helado-mochi-japones.jpg" alt="">
        <h1>JAPANESE MOCHI</h1>
        <p>A ball-shaped ice cream, the size of a snack, a round-shaped Japanese sweet made from mochigome flour</p>
        <p class="precio">12 Bs</p>
      </div>
      <div class="tarjetas">
        <img src="https://www.gelatecgroup.com/wp-content/uploads/2021/03/helado-frito.jpg" alt="">
        <h1>FRIED ICE-CREAM</h1>
        <p>It is not as far-fetched as it sounds, nor is it as complicated as it may sound. simply! exquisite!</p>
        <p class="precio">7 Bs</p>
      </div>
      <div class="tarjetas">
        <img src="https://www.gelatecgroup.com/wp-content/uploads/2021/03/helado-en-rollo.jpg" alt="">
        <h1>ICE CREAM ON A ROLL</h1>
        <p> Appealing to the eye and to the palate, a mixture based on lactose-free ice cream as the central ingredient that will turn into delicious cold rolls.</p>
        <p class="precio">10 Bs</p>
      </div>
      <div class="tarjetas">
        <img src="https://www.gelatecgroup.com/wp-content/uploads/2021/03/helado-semifreddo.jpg" alt="">
        <h1>SEMIFREDDO ICE CREAM</h1>
        <p>This is a very delicious and simple type of ice cream, a mixture of a portion of ice cream and a portion of whipped cream</p>
        <p class="precio">15 Bs</p>
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