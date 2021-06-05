<template>
 <body>
  <div class="contenedor-logo">
        <img class="logo-menu" src="https://images.vexels.com/media/users/3/224173/isolated/lists/cb1d5a02664bea08989f0891b47a4080-cubiertos-en-logo-de-caja.png" alt="" width="180">
  </div>
  <div class="formulario">
    <div class="cont-quien">
      <p >¿WHO ARE YOU?</p>
      <div class="form-quien">
        <input class="nombre" type="text" placeholder="Name" size="31">
        <br>
        <br>
        <input class="numero" type="text" placeholder="Number" size="31px" >
        <br>
        <br>
        <input class="mail" type="text" placeholder="e-mail" size="31px" >
      </div>
    </div>
    <div class="cont-donde">
      <p align="">DIRECTION</p>
      <div class="form-donde">
        <input class="calle" type="text" placeholder="Street Number" size="31px">
        <br>
        <br>
        <input class="codigo" type="text" placeholder="Postal Code" size="31px">
        <br>
        <br>
        <input class="districto" type="text" placeholder="District" size="31px">
      </div>
    </div>
    <div class="hora">
      <p class="text-hora" align="center">¿What time?</p>
      <div class="cont-hora">
        <select name="horario" id="horario">
          <option>Hour</option>
          <option>12:00</option>
          <option>13:00</option>
          <option>14:00</option>
          <option>15:00</option>
        </select>
      </div>
    </div>
    <div class="guardar">
      <input class="check" type="checkbox">Save Information.
    </div>
    <a href="tipoingles">
    <div class="enviar">
      <input  class="btn-enviar" type="submit" align="center" value="Send">
    </div>
    </a>
  </div>
 </body>
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.cont-quien{
  position: relative;
  right: 280px;
  text-align: center;
  background-color: rgba(143, 143, 143, 0.808);
  border-radius: 10px;
  margin-left: 50%;
  margin-right: 25%;
}

.cont-donde{
  position: relative;
  right: 280px;
  text-align: center;
  background-color: rgba(143, 143, 143, 0.438);
  border-radius: 10px;
  margin-left: 50%;
  margin-right: 25%;
}
.form-donde{
  position: relative;
  right: 1000px;
}
body{
  background-image: url(https://www.crushpixel.com/big-static14/preview4/mock-up-blank-paper-on-1707001.jpg);
}
.contenedor-logo{
  text-align: center;
}
.logo-menu{
  background-color: rgba(255, 255, 255, 0.822);
  border-radius: 20px;
  position: relative;
  left: 10px;
}
p{
  font-size: 35px;
}
input.nombre{
  padding: 15px;
  
  left: 1000px; 
  border-radius: 10px;
  font-size: 20px;
}
input.numero{
  padding: 15px;
  
  left: 1000px; 
  border-radius: 10px;
  font-size: 20px;
}
input.mail{
  padding: 15px;
  
  left: 1000px; 
  border-radius: 10px;
  font-size: 20px;
}

input.calle{
   padding: 15px;
  position: relative;
  left: 1000px; 
  border-radius: 10px;
  font-size: 20px;
}
input.codigo{
  padding: 15px;
  position: relative;
  left: 1000px; 
  border-radius: 10px;
  font-size: 20px;
}
input.districto{
  padding: 15px;
  position: relative;
  left: 1000px; 
  border-radius: 10px;
  font-size: 20px;
}

p.text-hora{
  position: relative;
  right: 90px;
}
#horario{
  padding: 10px;
  border-radius: 10px;
  position: relative;
  left: 1000px;
}

.guardar{
  text-align: center;
  padding: 30px;
  font-size: 25px;
  position: relative;
  left: 18px;
}
.check{
  width: 30px;
  height: 30px;
}

.enviar{
  text-align: center;
}
.enviar input:hover{
  background-color: orange;
}
.btn-enviar{
  height: 50px;
  width: 100px;
  border-radius: 20px;
  font-size: 18px;
}
</style>