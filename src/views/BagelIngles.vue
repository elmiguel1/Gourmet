<template>
  <div class="contenedor">
    <div class="img-larga">
      <img src="https://wallpaperaccess.com/full/4435053.jpg" alt="" height="500">
    </div>
    <div class="cont-img">
      <a href="tipoingles">
        <i><h1>B A G E L S</h1></i>
      </a>
    </div>
    <div class="contenedor-tarjetas">
      <div class="tarjetas">
        <img src="https://www.einsteinbros.com/wp-content/uploads/2020/11/EBB-PartyBagel-Chocolate-800x700-1.jpg" alt="">
        <h1>CHOCOLATE BAGEL</h1>
        <p>A rich chocolate buttercream frosting, chocolate frosting, and of course lots of sprinkles!</p>
        <p class="precio">10 Bs</p>
      </div>
      <div class="tarjetas">
        <img src="https://www.einsteinbros.com/wp-content/uploads/2019/04/menu_items_new_ClassicBagel_Onion.jpg" alt="">
        <h1>ONION BAGEL</h1>
        <p>This onion won't make you cry, unless it's tears of joy! Our onion bagel is the perfect savory base for your choice of shmears.</p>
        <p class="precio">5 Bs</p>
      </div>
      <div class="tarjetas">
        <img src="https://www.einsteinbros.com/wp-content/uploads/2021/02/EBB-BrisketEggSandwich_800x700.jpg" alt="">
        <h1>CHICKEN BAGEL</h1>
        <p>Freshly cracked cage-free eggs, smoked beef brisket, cheddar cheese with smoked chipotle aioli on a new gourmet jalapeño bacon bagel.</p>
        <p class="precio">18 Bs</p>
      </div>
      <div class="tarjetas">
        <img src="https://www.einsteinbros.com/wp-content/uploads/2020/11/EBB-PartyBagel-Churro-800x700-1.jpg" alt="">
        <h1>CHURRO BAGEL</h1>
        <p>This party bagel is like no other with cinnamon sugar on the outside and sweet cream cheese frosting in the middle!</p>
        <p class="precio">7 Bs</p>
      </div>
      <div class="tarjetas"> 
        <img src="https://www.einsteinbros.com/wp-content/uploads/2020/09/EBB-VeggieEggWhiteEggel-800x700-1.jpg" alt="">
        <h1>VEGETABLE EGG BAGEL</h1>
        <p>A perfectly cooked Sous Vide Egg White Eggel. Made with cage-free egg whites and includes bell pepper, onion, Portobello mushroom, spinach, tomato, Monteray Jack, and Asiago.</p>
        <p class="precio">10 Bs</p>
      </div>
      <div class="tarjetas">
        <img src="https://www.einsteinbros.com/wp-content/uploads/2020/09/EBB-MeatCheeseEggel-800x700-1.jpg" alt="">
        <h1>MEAT AND CHEESE BAGEL</h1>
        <p>Un Sous Vide Eggel perfectamente cocinado. Elaborada con huevos sin jaula, esta deliciosa creación incluye tocino, jamón, salchicha de pavo, condimentos de todo y queso cheddar blanco. ¡Incluso es sin gluten! </p>
        <p class="precio">12 Bs</p>
      </div>
    </div>
  </div>
</template>

<script>
  cosole.log('nombre')
</script>

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
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}
.cont-img h1:hover{
  color: gold;
}
.contenedor-tarjetas{
  background-repeat: no-repeat;
  background-size: 2500px;
  width: 100%;
  max-width: 100%;
  height: 1500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
  background-color: rgba(102, 7, 7);
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
  color: #fff;
}
.contenedor-tarjetas .tarjetas .precio{
  color: gold;
}
</style>