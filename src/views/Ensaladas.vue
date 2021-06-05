<template>
  <div class="contenedor">
    <div class="img-larga">
      <img src="" alt="">
    </div>
    <div class="cont-img">
      <a href="tipo">
      <i><h1>E N S A L A D A S</h1></i>
      </a>
    </div>
    <div class="contenedor-tarjetas">
      <div class="tarjetas">
        <img src="https://dam.cocinafacil.com.mx/wp-content/uploads/2018/12/ensalada-de-atun-y-aguacate-150x150.jpg" alt="">
        <h1>ENSALADA DE PALTA</h1>
        <p>Esta ensalada de palta con atún tiene un toque muy especial. Descubre cómo prepararla y compártela con tu familia, ¡es deliciosa!</p>
        <p class="precio">15 Bs</p>
      </div>
      <div class="tarjetas">
        <img src="https://dam.cocinafacil.com.mx/wp-content/uploads/2019/10/ensalada-mexicanacon-pollo-150x150.jpg" alt="">
        <h1>ENSALADA DE POLLO</h1>
        <p>Seguramente esta receta de ensalada mexicana será tu favorita, es la mezcla perfecta para disfrutar de forma saludable los mejores ingredientes.</p>
        <p class="precio">20 Bs</p>
      </div>
      <div class="tarjetas">
        <img src="https://dam.cocinafacil.com.mx/wp-content/uploads/2018/12/ensalada-mediterranea-150x150.jpg" alt="">
        <h1>ENSALADA MEDITERRANEA</h1>
        <p>Una clásica guarnición que no puede faltar en tu mesa. Prepara esta deliciosa y tradicional ensalada mediterránea. Las ensaladas son las guarniciones ideales, debido a que son ligeras</p>
        <p class="precio">12 Bs</p>
      </div>
    <div class="tarjetas">
      <img src="https://dam.cocinafacil.com.mx/wp-content/uploads/2018/12/ensalada-griega-con-pasta-150x150.jpg" alt="">
      <h1>ENSALADA CON PASTA</h1>
      <p>Si eres fan de las ensaladas saludables y también te encanta la pasta, no dejes pasar esta ensalada griega con pasta.</p>
      <p class="precio">12 Bs</p>
    </div>
    <div class="tarjetas">
      <img src="https://dam.cocinafacil.com.mx/wp-content/uploads/2018/12/ensalada-de-frutas-al-grill-150x150.png" alt="">
      <h1>ENSALADA DE FRUTA</h1>
      <p>Comer frutas es indispensable para el buen funcionamiento de nuestro organismo. </p>
      <p class="precio">10 Bs</p>
    </div>
    <div class="tarjetas">
      <img src="https://dam.cocinafacil.com.mx/wp-content/uploads/2018/10/ensalada-de-frijol-negro-150x150.jpg" alt="">
      <h1>ENSALADA DE FRIJOL</h1>
      <p>Lo mejor que probarás este día será esta delicia de ensalada de frijol negro, no es por nada, pero este alimento de origen mexicano es justo el toque perfecto</p>
      <p class="precio">15 Bs</p>
    </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.img-larga{
  background-image: url(https://dam.cocinafacil.com.mx/wp-content/uploads/2018/12/ensaladas-saludables-mes.jpg);
  background-repeat: no-repeat;
  background-size: 100%;
  padding: 10%;
  margin-top: 20px;
  border-radius: 20px;
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
  background-color: rgba(102, 7, 7, );
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