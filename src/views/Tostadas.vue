<template>
 <body>
  <div class="contenedor">
    <div class="img-larga">
      <img src="" alt="">
    </div>
    <div class="cont-img">
      <a href="tipo">
        <i><h1>S A N D W I C H</h1></i>
      </a>
    </div>
    <div class="contenedor-tarjetas">
      <div class="tarjetas">
        <img src="https://cdn.mcalistersdeli.com/-/media/mcalisters/menu/sandwiches/sandwiches_mca-club_thumbnail-664x440.jpg?v=1&d=20200618T124638Z" alt="">
        <h1>SANDWICH DE JAMON</h1>
        <p>Pavo ahumado, jamón de la Selva Negra, tocino, queso cheddar fuerte, suizo, mezcla de primavera, tomate, mayonesa y McAlister's Honey Mustard sobre trigo.</p>
        <p class="precio">15 Bs</p>
      </div>
      <div class="tarjetas">
        <img src="https://www.subway.com/ns/images/menu/BOL/SPA/RPLC_oven_roasted_chicken.jpg" alt="">
        <h1>SANDWICH DE POLLO</h1>
        <p>Una tierna porción de pollo empanado sobre un pan recién horneado... ¿existe algo más tentador?</p>
        <p class="precio">20 Bs</p>
      </div>
      <div class="tarjetas">
        <img src="https://www.subway.com/ns/images/menu/BOL/SPA/RPLC_roastbeef_EE_LV_LT.jpg" alt="">
        <h1>SANDWICH DE FILETE</h1>
        <p>Relleno con finas rebanadas de roast beef, este favorito de multitudes se sirve en el pan recién horneado que usted elija.</p>
        <p class="precio">25 Bs</p>
      </div>
      <div class="tarjetas">
        <img src="https://www.subway.com/ns/images/menu/BOL/SPA/RPLC_steak_and_cheese.jpg" alt="">
        <h1>SANDWICH DE CARNE Y QUESO</h1>
        <p>Rebanadas de filete de carne caliente, tierno y jugoso servidas en el pan que usted elija. Una explosión de sabor. ¡Tueste el pan para lograr un sabor aun más increíble!</p>
        <p class="precio">25 Bs</p>
      </div>
      <div class="tarjetas">
        <img src="https://www.subway.com/ns/images/menu/BOL/SPA/RPLC_Sweet_Onion_Chicken_Teriyaki.jpg" alt="">
        <h1>SANDWICH CON CEBOLLAS</h1>
        <p>Esta especialidad gourmet es una sabrosa combinación de tiernas tiras de pollo glaseadas con teriyaki. Se sirve caliente y tostado en el pan recién horneado.</p>
        <p class="precio">23 Bs</p>
      </div>
      <div class="tarjetas">
        <img src="https://www.subway.com/ns/images/menu/BOL/SPA/RPLC_tuna.jpg" alt="">
        <h1>SANDWICH DE ATUN</h1>
        <p>Pruébelo y experimente un sabor tan fresco como la brisa del océano. ¡Sumérjase en las olas de su inigualable sabor!</p>
        <p class="precio">15 Bs</p>
      </div>
    </div>
  </div>
 </body>
</template>

<style lang="less" scoped>
.img-larga{
  background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_7pvBOoexgGHVBsyLnU0uyIThdRmUiBEuZg&usqp=CAU);
  background-repeat: no-repeat;
  background-size: 800px;
  background-size: 100% 100%;
  padding: 10%;
  width: 80%;
  margin-top: 20px;
  border-radius: 20px;
  min-width: 80%;
  background-color: gold;
}
.contenedor{
  text-align: center;
}
.cont-img{

}
.cont-img h1{
  font-size: 60px;
  color: rgba(102, 7, 7, );
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.cont-img h1:hover{
  color: gold;
    transform: translateY(-15px);
  box-shadow: 0 12px 16px rgb(0, 0, 0, 0.2);
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
  box-shadow: 0 12px 16px rgb(0, 0, 0, 0.2);
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
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  color: #fff;
}
.contenedor-tarjetas .tarjetas .precio{
  color: gold;
  
}
</style>