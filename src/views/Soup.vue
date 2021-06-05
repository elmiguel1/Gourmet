<template>
  <div class="contenedor">
    <div class="img-larga">
      <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sopas-para-la-semana-1578913940.jpg" alt="" height="500">
    </div>
    <div class="cont-img">
      <a href="tipoingles">
        <i><h1>S O U P S</h1></i>
      </a>
    </div>
    <div class="contenedor-tarjetas">
      <div class="tarjetas">
        <img src="https://www.pequerecetas.com/wp-content/uploads/2015/03/sopa-de-fideos-150x150.jpg" alt="">
        <h1>NOODLE SOUP</h1>
        <p>A rich homemade noodle soup is the only thing you want when it's cold, are you with me? There is nothing more comforting than coming home and enjoying a delicious noodle soup.</p>
        <p class="precio">7 Bs</p>
      </div>
      <div class="tarjetas">
        <img src="https://www.pequerecetas.com/wp-content/uploads/2014/01/Sopa-de-picadillo-Pequerecetas-1-150x150.jpg" alt="">
        <h1>CHICKEN SOUP</h1>
        <p>Yes, yes ... I know that all soups are comforting, but the chicken mince soup for me is the best there is.</p>
        <p class="precio">8 Bs</p>
      </div>
      <div class="tarjetas">
        <img src="https://www.pequerecetas.com/wp-content/uploads/2011/12/sopa-de-pescado1-150x150.jpg" alt="">
        <h1>FISH SOUP</h1>
        <p>Fish soup is one of our favorites, because of its intense flavor and because a good fish soup undoubtedly tones your body and prepares you for the delicious second course.</p>
        <p class="precio">6 Bs</p>
      </div>
      <div class="tarjetas">
        <img src="https://www.pequerecetas.com/wp-content/uploads/2010/01/sopa-de-marisco2-150x150.jpg" alt="">
        <h1>SEAFOUD SOUP</h1>
        <p>Seafood soup is a very popular recipe in different celebrations, both in summer, where it craves flavors that remind us of the sea, and at Christmas time, where it is perfect as a first course.</p>
        <p class="precio">13 Bs</p>
      </div>
      <div class="tarjetas">
        <img src="https://www.pequerecetas.com/wp-content/uploads/2020/11/receta-sopa-verduras-150x150.jpg" alt="">
        <h1>SOUP VEGETABLES</h1>
        <p>A good vegetable soup has it all: it comforts and nourishes in a healthy way; we can include all kinds of vegetables</p>
        <p class="precio">7 Bs</p>
      </div>
      <div class="tarjetas">
        <img src="https://www.pequerecetas.com/wp-content/uploads/2017/12/sopa-miso-receta-150x150.jpg" alt="">
        <h1>RAMEN</h1>
        <p>Have you heard of Japanese miso soup? Surely yes, because it is on everyone's lips</p>
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
  background-color: rgb(241, 238, 25);
  border-radius: 20px ;
}
.contenedor-tarjetas .tarjetas{
  widows: 330px;
  height: 560px;
  border-radius: 10px;
  box-shadow:  0 5px 20px rgb(255, 255, 255);
  overflow: hidden;
  margin: 100px;
  text-align: center;
  transition: all 0.25s;
  background-color: rgb(228, 112, 34);
}
.contenedor-tarjetas .tarjetas:hover{
  transform: translateY(-15px);
  box-shadow: 0 12px 16px rgba(0, 0, 0, 2);
  box-shadow: 0px 0px 15px 15px #cf4242;
  -webkit-box-shadow: 0px 0px 15px 15px #cf4242;
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
  font-weight:600;
  font-size: 22px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: #fff;
}
.contenedor-tarjetas .tarjetas .precio{
  color: gold;
}
</style>