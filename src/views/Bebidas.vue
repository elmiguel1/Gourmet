<template>
  <div class="contenedor">
    <div class="img-larga">
      <img src="https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/01/05171656/Tragos2.jpg" alt="" height="500">
    </div>
    <div class="cont-img">
      <a href="tipo">
        <i><h1>B E B I D A S</h1></i>
      </a>
    </div>
    <div class="contenedor-tarjetas">
      <div class="tarjetas">
        <img src="https://www.laylita.com/recetas/wp-content/uploads/Limonada-receta.jpg" alt="">
        <h1>LIMONADA</h1>
        <p>Simplemente limonada con agüita.</p>
        <p class="precio">10 Bs</p>
      </div>
      <div class="tarjetas">
        <img src="https://c6f2y5q5.rocketcdn.me/wp-content/uploads/2018/07/granizados-768x512.jpg.webp" alt="">
        <h1>JUGO DE FRUTA</h1>
        <p>Delicioso jugo de fruta, sabor frutilla y mango</p>
        <p class="precio">7 Bs</p>
      </div>
      <div class="tarjetas">
        <img src="https://okdiario.com/img/2018/03/17/cafe-capuchino-655x368.jpg" alt="">
        <h1>CAFÉ CAPUCHINO</h1>
        <p>Disfrutaras de una experiencia extraordinaria</p>
        <p class="precio">5 Bs</p>
      </div>
      <div class="tarjetas">
        <img src="https://tipsparatuviaje.com/wp-content/uploads/2019/12/chicha-bebida.jpg" alt="">
        <h1>CHICHA</h1>
        <p>La chicha es una de las bebidas con mayor tradición y más populares en el país andino.</p>
        <p class="precio">2 Bs</p>
      </div>
      <div class="tarjetas">
        <img src="https://tipsparatuviaje.com/wp-content/uploads/2019/12/mocochinchi-bebida.jpg" alt="">
        <h1>MOCOCHINCHI</h1>
        <p>El mocochinchi se elabora con duraznos deshidratados o secos y un jarabe dulce a punto de caramelo.</p>
        <p class="precio">2 Bs</p>
      </div>
      <div class="tarjetas">
        <img src="https://tipsparatuviaje.com/wp-content/uploads/2019/12/jugo-de-linaza.jpg" alt="">
        <h1>JUGO DE LINAZA</h1>
        <p>Bebida típica de Bolivia que se elabora con semillas de linaza, una abundante fuente en antioxidantes y fibra, con un alto contenido en ácidos grasos omega 3</p>
        <p class="precio">2 Bs</p>
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
  background-repeat: no-repeat;
  background-size: 2500px;
  width: 100%;
  max-width: 2200px;
  height: 1500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  background-color: rgb(60, 199, 180);
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
  background-color:  rgba(68, 189, 189, 0.685);
}
.contenedor-tarjetas .tarjetas:hover{
  transform: translateY(-15px);
  box-shadow:  0 12px 16px #ffffff;
  box-shadow:  0px 0px 15px 15px #ffffff;
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