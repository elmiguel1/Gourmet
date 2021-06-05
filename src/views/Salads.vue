<template>
  <div class="contenedor">
    <div class="img-larga">
      <img src="https://dam.cocinafacil.com.mx/wp-content/uploads/2018/12/ensaladas-saludables-mes.jpg" alt="" height="500">
    </div>
    <div class="cont-img">
      <a href="tipoingles">
        <i><h1>S A L A D S</h1></i>
      </a>
    </div>
    <div class="contenedor-tarjetas">
      <div class="tarjetas">
        <img src="https://dam.cocinafacil.com.mx/wp-content/uploads/2018/12/ensalada-de-atun-y-aguacate-150x150.jpg" alt="">
        <h1>AVOCADO SALAD</h1>
        <p>This avocado salad with tuna has a very special touch. Discover how to prepare it and share it with your family, it is delicious!</p>
        <p class="precio">15 Bs</p>
      </div>
      <div class="tarjetas">
        <img src="https://dam.cocinafacil.com.mx/wp-content/uploads/2019/10/ensalada-mexicanacon-pollo-150x150.jpg" alt="">
        <h1>CHICKEN SALAD</h1>
        <p>Surely this Mexican salad recipe will be your favorite, it is the perfect mix to enjoy the best ingredients in a healthy way.</p>
        <p class="precio">20 Bs</p>
      </div>
      <div class="tarjetas">
        <img src="https://dam.cocinafacil.com.mx/wp-content/uploads/2018/12/ensalada-mediterranea-150x150.jpg" alt="">
        <h1>MEDITERRANEAN SALAD</h1>
        <p>A classic garnish that cannot be missing from your table. Prepare this delicious and traditional Mediterranean salad. Salads are the ideal garnishes, because they are light</p>
        <p class="precio">12 Bs</p>
      </div>
      <div class="tarjetas">
        <img src="https://dam.cocinafacil.com.mx/wp-content/uploads/2018/12/ensalada-griega-con-pasta-150x150.jpg" alt="">
        <h1>SALAD WITH PASTA</h1>
        <p>If you are a fan of healthy salads and you also love pasta, don't pass up this Greek Pasta Salad.</p>
        <p class="precio">12 Bs</p>
      </div>
      <div class="tarjetas">
        <img src="https://dam.cocinafacil.com.mx/wp-content/uploads/2018/12/ensalada-de-frutas-al-grill-150x150.png" alt="">
        <h1>FRUIT SALAD</h1>
        <p>Eating fruits is essential for the proper functioning of our body.</p>
        <p class="precio">10 Bs</p>
      </div>
      <div class="tarjetas">
        <img src="https://dam.cocinafacil.com.mx/wp-content/uploads/2018/10/ensalada-de-frijol-negro-150x150.jpg" alt="">
        <h1>BEANS SALAD</h1>
        <p>The best you will try this day will be this black bean salad delight, it is not for nothing, but this food of Mexican origin is just the perfect touch</p>
        <p class="precio">15 Bs</p>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.img-larga{
  background-repeat: no-repeat;
  background-size: 100px;
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
  background-color: rgb(11, 144, 18);
  border-radius: 20px;
}
.contenedor-tarjetas .tarjetas{
  widows: 330px;
  height: 560px;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgb(255, 255, 255);
  overflow: hidden;
  margin: 100px;
  text-align: center;
  transition: all 0.25s;
  background-color: rgb(108, 7, 7);
}
.contenedor-tarjetas .tarjetas:hover{
  transform: translateY(-15px);
  box-shadow: 0 12px 16px rgba(0, 0, 0, 2);
   box-shadow: 0px 0px 15px 15px #ec731e;
  -webkit-box-shadow: 0px 0px 15px 15px #56ff13;
}
.contenedor-tarjetas .tarjetas img{
  width: 530px;
  height: 300px;
}
.contenedor-tarjetas .tarjetas h1{
  font-weight: 600;
  color: rgb(163, 161, 10);
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