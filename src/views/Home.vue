<template>
 <body>
  <div class="contenedor-logo">
    <img class="logo-menu" src="https://images.vexels.com/media/users/3/224173/isolated/lists/cb1d5a02664bea08989f0891b47a4080-cubiertos-en-logo-de-caja.png" alt="" width="180">
  </div>
  <div class="fuente">
    <h1>Bienvenido a las Delicias de Oro</h1>
  </div>
  <h2>Elige el Idiomas que Prefieras</h2>
  <div class="idiomas">
    <a href="ingles/">
      <img class="ingles" src="https://www.idiomasparaninos.com/images/es/ios-android-app-de-cuero-ingles.png" width="230">
    </a>
    <a href="about/">
      <img class="espanol" src="https://www.idiomasparaninos.com/images/es/ios-android-app-de-cuero-espanol.png" width="230">
    </a>
  </div>
 </body>
</template>

<style scoped lang="less">
body{
  background-image: url(https://viajarafrancia.com/wp-content/uploads/2011/08/Francia-en-oto%C3%B1o.jpg);
  background-repeat: no-repeat;
  background-size: 100%;
}
.logo-menu{
  background-color: rgba(255, 255, 255, 0.877);
  border-radius: 70px;
}
.idiomas img{
  border-radius: 100px;
}
.idiomas img:hover{
  transform: translateY(-15px);
  box-shadow: 0 12px 16px rgba(0, 0, 0, 0.692);
}
.contenedor-logo{
  text-align: center;
}
h1{
  text-align: center;
  padding: 2%;
  font-size: 70px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
h2{
  text-align: center;
  color: orange;
  font-size: 45px;
}
.idiomas{
  padding: 8%;
}
img.ingles{
  position: relative;
  left: 480px;
}
img.espanol{
  position: relative;
  left: 1130px;
}

</style>
