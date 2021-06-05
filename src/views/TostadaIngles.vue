<template>
  <div class="contenedor">
    <div class="img-larga">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_7pvBOoexgGHVBsyLnU0uyIThdRmUiBEuZg&usqp=CAU" alt="" height="500">
    </div>
    <div class="cont-img">
      <a href="tipoingles">
        <i><h1>S A N D W I C H</h1></i>
      </a>
    </div>
    <div class="contenedor-tarjetas">
        <div class="tarjetas">
          <img src="https://cdn.mcalistersdeli.com/-/media/mcalisters/menu/sandwiches/sandwiches_mca-club_thumbnail-664x440.jpg?v=1&d=20200618T124638Z" alt="">
          <h1>HAM SANDWICH</h1>
          <p>Smoked Turkey, Black Forest Ham, Bacon, Sharp Cheddar, Swiss, Spring Mix, Tomato, Mayonnaise and McAlister's Honey Mustard ™ on Wheat.</p>
          <p class="precio">15 Bs</p>
        </div>
      <div class="tarjetas">
        <img src="https://www.subway.com/ns/images/menu/BOL/SPA/RPLC_oven_roasted_chicken.jpg" alt="">
        <h1>CHICKEN SANDWICH</h1>
        <p>A tender serving of breaded chicken on freshly baked bread ... is there anything more tempting?</p>
        <p class="precio">20 Bs</p>
      </div>
      <div class="tarjetas">
        <img src="https://www.subway.com/ns/images/menu/BOL/SPA/RPLC_roastbeef_EE_LV_LT.jpg" alt="">
        <h1>FILLET SANDWICH</h1>
        <p>Filled with thin slices of roast beef, this crowd favorite is served on freshly baked bread of your choice.</p>
        <p class="precio">25 Bs</p>
      </div>
      <div class="tarjetas">
       <img src="https://www.subway.com/ns/images/menu/BOL/SPA/RPLC_steak_and_cheese.jpg" alt="">
        <h1>MEAT AND CHEESE SANDWICH</h1>
        <p>Slices of hot, tender and juicy beef steak served on your choice of bread. An explosion of flavor. Toast the bread for an even more incredible taste!</p>
        <p class="precio">25 Bs</p>
      </div>
      <div class="tarjetas">
        <img src="https://www.subway.com/ns/images/menu/BOL/SPA/RPLC_Sweet_Onion_Chicken_Teriyaki.jpg" alt="">
        <h1>SANDWICH WITH ONION</h1>
        <p>This gourmet specialty is a tasty combination of tender teriyaki-glazed chicken strips. It is served hot and toasted on freshly baked bread.</p>
        <p class="precio">23 Bs</p>
      </div>
      <div class="tarjetas">
        <img src="https://www.subway.com/ns/images/menu/BOL/SPA/RPLC_tuna.jpg" alt="">
        <h1>TUNA SANDWICH</h1>
        <p>Taste it and experience a taste as fresh as the ocean breeze. Dive into the waves of its unmatched flavor!</p>
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
  transform: translateY(-15px);
  box-shadow:  0 12px 16px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 15px 15px #ec731e;
  -webkit-box-shadow: 0px 0px 15px 15px #ec731e;
}
.contenedor-tarjetas{
  width: 100%;
  max-width: 2200px;
  height: 1500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  background-color: rgb(218, 125, 19);
  border-radius: 20px;
}
.contenedor-tarjetas .tarjetas{
  widows: 330px;
  height: 560px;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(255, 255, 255, );
  overflow: hidden;
  margin: 100px;
  text-align: center;
  transition: all 0.25s;
  background-color: rgb(218, 125, 19);
}
.contenedor-tarjetas .tarjetas:hover{
  transform: translateY(-15px);
  box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 15px 15px #ec731e;
  -webkit-box-shadow: 0px 0px 15px 15px #fff455;
}
.contenedor-tarjetas .tarjetas img{
  width: 530px;
  height: 300px;
}
.contenedor-tarjetas .tarjetas h1{
  font-weight: 600;
  color: rgb(151, 11, 11);
}
.contenedor-tarjetas .tarjetas p{
  max-width: 525px;
  font-weight: 600;
  font-size: 22px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.contenedor-tarjetas .tarjetas .precio{
  color: gold;
}
</style>