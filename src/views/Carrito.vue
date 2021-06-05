<template>
  <div class="img-larga">
    <img src="../assets/fonditocarro.jpg" height="500" />
  </div>
  <body>
    <div class="cont-logo">
      <img class="logo" src="../assets/cartlogo.png" width="100"/>
    </div>
    <div class="tabla-contenedor">
      <div class="tabla-contenido">
        <h2>Producto</h2>
        <h2>Nombre</h2>
        <h2>Precio</h2>
        <h2>Cantidad</h2>
      </div>
      <div class="tabla-contenido-productos">
        <h3>1</h3>
        <img class="img-tabla" src="https://www.einsteinbros.com/wp-content/uploads/2020/11/EBB-PartyBagel-Chocolate-800x700-1.jpg" alt="" width="170">
        <h1>Bagel de chocolate</h1>
        <h1>10 Bs</h1>
        <input class="input" type="number" min="1" value="1" width="">
        <button class="borrar">X</button>
      </div>
      <div class="tabla-contenido-productos2">
        <h3>2</h3>
        <img class="img-tabla" src="https://www.einsteinbros.com/wp-content/uploads/2019/04/menu_items_new_ClassicBagel_Onion.jpg" alt="" width="170">
        <h1>Bagel de cebolla</h1>
        <h1>5 Bs</h1>
        <input class="input" type="number" min="1" value="1" width="">
        <button class="borrar">X</button>
      </div>
      <div class="tabla-2">
        <div class="contenido-2">
          <h2>Total</h2>
          <h2>$ suma</h2>
          <button class="vacia">Vaciar</button>
          <a href="confirma">
            <button class="paga">
               <span>PAGAR</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  </body>
</template>


<style lang="less" scoped>
.borrar{
  background-color: rgb(240, 72, 72);
  height: 50px;
  width: 50px;
  position: relative;
  top: 100px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}
.borrar:hover{
  transform: scale(1.1);
}
.vacia{
  border-radius: 10px;
  background-color: rgb(240, 72, 72);
  font-size: 15px;
  color: #ffffff;
  border: none;
  padding: 12px 40px 10px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}
.vacia:hover{
  transform: scale(1.1);
}
h1{
  position: relative;
  left: 300px;
}
a{
  text-decoration: none;
  color: white;
}
.img-larga{
    background-repeat: no-repeat;
  background-size: 100px ;
  margin-top: 20px;
}
.img-larga img{
    border-radius: 20px;
  min-width: 100%;
}
img.logo{
  position: relative;
  left: 1050px;
}
.tabla-contenedor{
  border: 1px solid black;
  background-color: rgb(63, 63, 63);
}
.tabla-contenido{
  display: flex;
  margin: 10px;
  justify-content: space-between;
  border: 1px solid rgb(124, 124, 124);
    background-color: rgb(36, 36, 36);
  color: white;
}

.tabla-contenido-productos{
    display: flex;
  margin: 20px;
  justify-content: space-between;
  border: 1px solid rgb(124, 124, 124);
  background-color: rgb(53, 53, 53);
  color: white;
  height: 150px;
    box-shadow:  0 12px 16px #ffffff;
  box-shadow:  0px 0px 2px 2px #ffffff;
}
.img-tabla{
  position: absolute;
}
.tabla-contenido-productos:hover{
  background-color: rgb(80, 80, 80);
  
}

.tabla-contenido-productos2{
    display: flex;
  margin: 20px;
  justify-content: space-between;
  border: 1px solid rgb(124, 124, 124);
  background-color: rgb(31, 31, 31);
  color: white;
  height: 150px;
    box-shadow:  0 11px 12px #ffffff;
  box-shadow:  0px 0px 2px 2px #ffffff;
}
.tabla-contenido-productos2:hover{
  background-color: rgb(80, 80, 80);
  
}
.input{
  height: 30px;
  width: 100px;
  position: relative;
  top: 40px;
  left: 500px;
  margin-right: 0;
}
.contenido-2{
    display: flex;
  margin: 10px;
  justify-content: space-between;
  border: 1px solid rgb(124, 124, 124);
    background-color: rgb(175, 140, 140);
  color: rgb(255, 255, 255);
}
.paga{
  position: relative;
  right: 30px;
  font-weight: 600;
  color: #ffffff;
  background-color: #1883ba;
  border-radius: 8px;
  border: 2px solid #0016b0;
  height: 40px;
}
.paga:focus{
  animation: swing 1s ease;
  animation-iteration-count: 1;
}
@keyframes swing{
  15% {
    transform: translateX(5px);
  }
  30% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(3px);
  }
  65% {
    transform: translateX(-3px);
  }
  80% {
    transform: translateX(2px);
  }
  100% {
    transform: translateX(0);
  }
}
h2{
  margin: 10px;
}
</style>

