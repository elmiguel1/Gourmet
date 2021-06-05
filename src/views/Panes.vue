<template>
  <div class="contenedor">
    <div class="img-larga">
      <img src="" alt="">
    </div>
    <div class="cont-img">
      <a href="tipo">
      <i><h1>B A G E L S</h1></i>
      </a>
    </div>
    <div class="contenedor-tarjetas">
      <div class="tarjetas">
        <img src="https://www.einsteinbros.com/wp-content/uploads/2020/11/EBB-PartyBagel-Chocolate-800x700-1.jpg" alt="">
        <h1 class="nombre">BAGEL DE CHOCOLATE</h1>
        <p>Un rico glaseado de crema de mantequilla de chocolate, glaseado de chocolate y, por supuesto, ¡muchas chispas! </p>
        <p class="precio">10 Bs</p>
          <button class="button" onclick="add();">agregar</button>
      </div>
      <div class="tarjetas">
        <img src="https://www.einsteinbros.com/wp-content/uploads/2019/04/menu_items_new_ClassicBagel_Onion.jpg" alt="">
        <h1>BAGEL DE CEBOLLA</h1>
        <p>¡Esta cebolla no te hará llorar, a menos que sea de lágrimas de alegría! Nuestro bagel de cebolla es la base salada perfecta para su elección de shmears.</p>
        <p class="precio">5 Bs</p>
      </div>
      <div class="tarjetas">
        <img src="https://www.einsteinbros.com/wp-content/uploads/2021/02/EBB-BrisketEggSandwich_800x700.jpg" alt="">
        <h1>BAGEL DE POLLO</h1>
        <p>Huevos recién cascados sin jaula, pechuga de res ahumada, queso cheddar con alioli de chipotle ahumado en un nuevo bagel gourmet con tocino y jalapeño.</p>
        <p class="precio">18 Bs</p>
      </div>
      <div class="tarjetas">
        <img src="https://www.einsteinbros.com/wp-content/uploads/2020/11/EBB-PartyBagel-Churro-800x700-1.jpg" alt="">
        <h1>BAGEL DE CHURRO</h1>
        <p>¡Este bagel de fiesta es como ningún otro con azúcar de canela por fuera y glaseado de queso crema dulce en el medio! </p>
        <p class="precio">7 Bs</p>
      </div>
      <div class="tarjetas">
        <img src="https://www.einsteinbros.com/wp-content/uploads/2020/09/EBB-VeggieEggWhiteEggel-800x700-1.jpg" alt="">
        <h1>BAGEL HUEVO VEGETAL</h1>
        <p>Un Eggel de Clara de Huevo Sous Vide perfectamente cocinado. Hecho con claras de huevo sin jaulas e incluye pimiento morrón, cebolla, hongo Portobello, espinaca, tomate, Monteray Jack y Asiago. </p>
        <p class="precio">10 Bs</p>
      </div>
      <div class="tarjetas">
        <img src="https://www.einsteinbros.com/wp-content/uploads/2020/09/EBB-MeatCheeseEggel-800x700-1.jpg" alt="">
        <h1>BAGEL CARNE Y QUESO</h1>
        <p>Un Sous Vide Eggel perfectamente cocinado. Elaborada con huevos sin jaula, esta deliciosa creación incluye tocino, jamón, salchicha de pavo, condimentos de todo y queso cheddar blanco. ¡Incluso es sin gluten! </p>
        <p class="precio">12 Bs</p>
      </div> 
    </div>
  </div>
</template>

<style scoped lang="less">
.contenedor-icono{
  float: right;
  position: relative;
  bottom: 52px;
  right: 50px;
  border-radius: 20px;
  box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
  display: flex;
}
.back{
  background: rgb(255, 202, 55);
  border-radius: 10px;
  margin-right: 10px;
}
.cart{
  background: rgb(255, 202, 55);
  border-radius: 10px;
}
.back:hover{
  transform: translateY(-15px);
}
.cart:hover{
  transform: translateY(-15px);
}
.img-larga{
  background-image: url(https://wallpaperaccess.com/full/4435053.jpg);
  background-repeat: no-repeat;
  background-size: 100%;
  padding: 10%;
  margin-top: 20px;
  border-radius: 20px;
}
.contenedor{
 text-align: center;
}
.cont-img{

}
.cont-img h1{
  font-size: 60px;
  color: rgb(102, 7, 7);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.cont-img h1:hover{
  color: gold
}
.contenedor-tarjetas{
  width: 100%;
  max-width: 2200px;
  height: 1500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin:auto;
  background-color: rgb(102, 7, 7);
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
  background-color: rgb(102, 7, 7);
}
.contenedor-tarjetas .tarjetas:hover{
  transform: translateY(-15px);
  box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 15px 15px #ec731e;
  -webkit-box-shadow: 0px 0px 15px 15px #ec731e;
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
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  color: #fff;
}
.contenedor-tarjetas .tarjetas .precio{
  color: gold;
}
</style>