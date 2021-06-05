<template>
 <body>
 <header>
  <div id="nav"> 
      <div class="contenedor-icono">
        <div class="back">
          <label for="btn-back" class="icono-back">
            <a href="./">
              <img src="./assets/back.png" alt="">
            </a>
          </label>
        </div>
        <div class="cart">
          <label for="btn-cart" class="icono-cart">
            <a href="carrito">
              <img src="./assets/cart.png" alt="">
            </a>
          </label>
        </div>
      </div>
    <div class="contenedor">
      <div class="btn-menu">
        <label for="btn-menu" class="icono-menu">
          <box-icon name='menu' size='lg'></box-icon>
        </label>
      </div>
    </div>
  </div>
  <router-view/>
 </header>
 <div class="capa">

 </div>
 <input type="checkbox" id="btn-back">
 <input type="checkbox" id="btn-cart">
 <input type="checkbox" id="btn-menu">
 <div class="contenedor-menu">
   <div class="contenido-menu">
     <nav>
       <a href="/"><box-icon class="icono-personal" name='user-circle' type='solid' color='#1feff3' ></box-icon>Informacion Personal</a>
       <a href="#"><box-icon class="icono-carro" name='cart' color='#1feff3' ></box-icon>Carro</a>
       <a href="#"><box-icon class="icono-entrega" name='truck' type='solid' color='#1feff3' ></box-icon>Confirmacion de Entrega</a>
       <a href="#"><box-icon class="icono-pago" name='paypal' type='logo' color='#1feff3' ></box-icon>Tipo de pago</a>
       <a href="#"><box-icon class="icono-seguir" name='trip' color='#1feff3' ></box-icon>Seguimiento de Entrega</a>
     </nav>
     <label for="btn-menu" class="icon-equis">X</label>
   </div>
 </div>
 </body>
</template>



<style lang="less">
a{
  font-size: 20px;
}
body{
  
  background-repeat: no-repeat;
  background-size: 100%;
}
.icono-cart img{
  height: 40px;
}
.icono-back img{
  height: 40px;
}
.contenedor-icono{
  float: right;
  display: flex;
  position: relative;
  right: 50px;
  border-radius: 20px;
  box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
}

.back{
  background: rgb(255, 215, 37);
  border-radius: 10px;
  margin-right: 10px;
}
.cart{
  background: rgb(255, 215, 37);
  border-radius: 10px;
}
.back:hover{
  transform: translateY(-5px);
}
.contenedor-icono .back label{
  cursor: pointer;
}
.cart:hover{
  transform: translateY(-15px);
}
.contenedor-icono .cart label{
  cursor: pointer;
}
.contenedor-icono .back label{
  cursor: pointer;
}
#nav{
  background-color: orange;
}
.icono-personal{
  position: relative;
  top: 6px;
  right: 7px;
}
.icono-carro{
  position: relative;
  top: 6px;
  right: 7px;
}
.icono-entrega{
  position: relative;
  top: 6px;
  right: 7px;
}
.icono-pago{
  position: relative;
  top: 6px;
  right: 7px; 
}
.icono-seguir{
  position: relative;
  top: 6px;
  right: 7px;   
}
.contenedor .btn-menu label{
  color: #fff;
  font-size: 25px;
  cursor: pointer;
}
#btn-back{
  display: none;
}
#btn-cart{
  display: none;
}
#btn-menu{
  display: none;
}
.contenedor-menu{
  position: absolute;
  background: rgba(0,0,0,0.5);
  width: 100%;
  height: 100vh;
  top: 0; left: 0;
  transition: all 500ms ease;
  opacity: 0;
  visibility: hidden;
}

#btn-menu:checked ~ .contenedor-menu{
  opacity: 1;
  visibility: visible;
}
.contenido-menu{
  width: 100%;
  max-width: 250px;
  background: #1c1c1c;
  height: 100vh;
  position: relative;
  transition: all 500ms ease;
  transform: translateX(-100%);
  //aqui
  
}
#btn-menu:checked ~ .contenedor-menu .contenido-menu{
  transform: translateX(0%); 
}
.contenido-menu nav{
  transform: translateY(15%) ;
}
.contenido-menu nav a{
  display: block;
  text-decoration: none;
  padding: 20px;
  color: #c7c7c7 ;
  border-left: 5px solid transparent;
  transition: all 400ms ease;
  //aqeui
  
}
.contenido-menu nav a:hover{
  border-left: 5px solid #0aeef6;
  background: #1f1f1f;
}
.contenido-menu  label{
  position: absolute;
  right: 5px;
  top: 10px;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
}

</style>
