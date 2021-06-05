<template>
  <body>
    <div class="logo-menu">
      <a href="/">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPBgmE-htxLJvId63xeDdoHnV5lM9wcMe4mg&usqp=CAU" alt="" width="120"></a>
    </div>
    <div class="contenedor">
      <div class="tarjetas">
        <a href="bagelingles">
          <img class="img-bagel" src="https://www.thebagelclub.com/img/home/homepage/montreal-bagels.png " alt="" width="300">
        </a>
        <div class="cont-txt">
          <h1>BAGELS</h1>
        </div>
      </div>
      <div class="tarjetas">
        <a href="tostadaingles">
          <img class="img-tost" src="https://i.pinimg.com/originals/e7/4d/6a/e74d6a9701a6976e2b3b4eb0e9fc3e26.png" alt="" width="300">
        </a>
        <div class="cont-txt">
          <h1>SANDWICH</h1>
        </div>
      </div>
      <div class="tarjetas">
        <a href="ensaladaingles">
          <img class="img-ensa" src="http://kabina34radio.com/wp-content/uploads/2019/03/Subs_Salad_871x410.png" alt="" width="300">
        </a>
        <div class="cont-txt">
          <h1>SALADS</h1>
        </div>
      </div>
    </div>
    <div class="contenedor2">
      <div class="tarjetas2">
        <a href="sopaingles">
          <img class="img-sopa" src="https://static.telepizza.com/vol/jn/images/content/productos/some_c.png" alt="" width="300">
        </a>
        <div class="cont-txt2">
          <h1>SOUPS</h1>
        </div>
      </div>
      <div class="tarjetas2">
        <a href="heladoingles">
          <img class="img-helado" src="https://www.baarty.com/site/category/helado-artesanal.png" alt="" width="300">
        </a>
        <div class="cont-txt2">
          <h1>ICE CREAMS</h1>
        </div>
      </div>
      <div class="tarjetas2">
        <a href="bebidaingles">
          <img class="img-bebida" src="https://media.taringa.net/knn/identity/aHR0cHM6Ly9rNjAua24zLm5ldC90YXJpbmdhL0UvMi8xLzIvOC9BL0Jhbmc3Ny8yQkYucG5n" alt="" width="300">
        </a>
        <div class="cont-txt2">
          <h1>DRINKS</h1>
        </div>
      </div>
    </div>
  </body>
</template>

<style lang="less" scoped>
body{
  background-image: url(https://thumbs.dreamstime.com/z/plantilla-del-men%C3%BA-de-la-pizarra-para-el-marco-restaurante-fondo-y-comida-men-ejemplo-vector-caf-bebida-disposici-n-dise-o-con-150892083.jpg);
  background-size: 20px 50px;
  background-size: 100% 123%;
  margin: 0;
  padding: 0;
  position: absolute;
  width: 100%;
  height: 100%;
}
.logo-menu{
  text-align: center;
  margin-top: 30px;
}
.logo-menu img{
  border-radius: 10px;
}
.logo-menu img:hover{
  transform: translateY(-15px);
  box-shadow: 0 12px 16px rgba(0, 0, 0, 705);
}

.contenedor{
  width: 100%;
  max-width: 2200px;
  height: 430px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
}
.contenedor .tarjetas{
  width: 330px;
  height: 430px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgb(255, 255, 255);
  overflow: hidden;
  margin: 100px;
  text-align: center;
  transition: all 0.25s;
}

.contenedor .tarjetas:hover{
  transform: translateY(-15px);
  box-shadow: 0 12px 16px rgba(0, 0, 0, 0
  2);
  box-shadow: 0px 0px 15px 15px #7ef1f5;
  -webkit-box-shadow: 0px 0px 15px 15px #7ef1f5;
}
.contenedor .tarjetas img{
  width:  330px;
  height: 300px;
}

.contenedor .tarjetas h1{
  font-weight: 600;
  background-color: rgb(199, 199, 199);
  padding: 10%;
}

.contenedor2{
  width: 100%;
  max-width: 2200px;
  height: 430px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  padding: 50px;
}
.contenedor2 .tarjetas2{
  width: 330px;
  height: 430px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgb(255, 255, 255);
  overflow: hidden;
  margin: 100px;
  text-align: center;
  transition: all 0.25s;
}
.contenedor2 .tarjetas2:hover{
  transform: translateY(-15px);
  box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 15px 15px #7ef1f5;
  -webkit-box-shadow: 0px 0px 15px 15px #7ef1f5;
}
.contenedor2 .tarjetas2 img{
  width: 330px;
  height: 300px;
}
.contenedor2 .tarjetas2 h1{
  font-weight: 600;
  padding: 10%;
  background-color: rgb(199, 199, 199)
}
</style>