<template>
  <div class="contenedor">
    <div class="img-larga">
      <img  src="" alt="">
    </div>
    <div class="cont-img">
      <a href="tipo">
        <i><h1>S O P A S</h1></i>
      </a>
    </div>
    <div class="contenedor-tarjetas">
      <div class="tarjetas">
        <img src="https://www.pequerecetas.com/wp-content/uploads/2015/03/sopa-de-fideos-150x150.jpg" alt="">
        <h1>SOPA DE FIDEOS</h1>
        <p>Una rica sopa de fideos casera es lo único que apetece cuando hace frío, ¿estáis conmigo? No hay nada más reconfortante que llegar a casa y disfrutar de una rica sopa de fideos.</p>
        <p class="precio">precio 1</p>
      </div>
      <div class="tarjetas">
        <img src="https://www.pequerecetas.com/wp-content/uploads/2014/01/Sopa-de-picadillo-Pequerecetas-1-150x150.jpg" alt="">
        <h1>SOPA DE POLLO</h1>
        <p>Sí, sí… ya sé que todas las sopas son reconfortantes, pero es que la sopa de picadillo de pollo para mí es lo mejor que hay.</p>
        <p class="precio">precio</p>
      </div>
      <div class="tarjetas">
        <img src="https://www.pequerecetas.com/wp-content/uploads/2011/12/sopa-de-pescado1-150x150.jpg" alt="">
        <h1>SOPA DE PESCADP</h1>
        <p>La sopa de pescado es una de nuestras favoritas, por su intenso sabor y porque una buena sopa de pescado sin duda te entona el cuerpo y te prepara para el delicioso segundo plato.</p>
        <p class="precio">precio</p>
      </div>
      <div class="tarjetas">
        <img src="https://www.pequerecetas.com/wp-content/uploads/2010/01/sopa-de-marisco2-150x150.jpg" alt="">
        <h1>SOPA DE MARISCOS</h1>
        <p>La sopa de marisco es una receta muy popular en diferentes celebraciones, tanto en verano, donde apetece por los sabores que nos recuerdan al mar, como en las fechas navideñas, donde queda perfecta como primer plato.</p>
        <p class="precio">precio</p>
      </div>
      <div class="tarjetas">
        <img src="https://www.pequerecetas.com/wp-content/uploads/2020/11/receta-sopa-verduras-150x150.jpg" alt="">
        <h1>SOPA DE VERDURAS</h1>
        <p>Una buena sopa de verduras lo tiene todo: reconforta y alimenta de manera saludable; podemos incluir todo tipo de verduras</p>
        <p class="precio">precio</p>
      </div>
      <div class="tarjetas">
        <img src="https://www.pequerecetas.com/wp-content/uploads/2017/12/sopa-miso-receta-150x150.jpg" alt="">
        <h1>SOPA JAPONESA</h1>
        <p>¿Habéis oído hablar de la sopa de miso japonesa? Seguramente sí, porque está en boca de todo el mundo</p>
        <p class="precio">precio</p>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.img-larga{
  background-image: url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sopas-para-la-semana-1578913940.jpg);
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