<template>
  <div class="img-larga">
    <img src="../assets/entrefondo.jpg" height="500" />
  </div>
  <div class="img-logo">
    <img src="../assets/truck.png"  />
  </div>
  <body>
    <form action="" method="POST"  id="form">
      <div class="form">
        <h1>REGISTRO DE ENTREGA</h1>
          <div class="grupo">
            <input type="text" id="name" required><span class="barra"></span>
            <label for="">Nombre Completo</label>
      </div>
      <div class="grupo">
        <input type="email" id="name" required><span class="barra"></span>
        <label for="">Numero</label>
      </div>
      <div class="grupo">
            <input type="text" id="name" required><span class="barra"></span>
            <label for="">Direccion</label>
          </div>
      </div>
      <div class="grupo">
        <input type="text" id="name" required><span class="barra"></span>
        <label for="">Numero de Casa</label>
        <button type="sudmit"><a href="pagar">Ordenar</a></button>
      </div>

    </form>
  </body>
</template>

<style lang="less" scoped>
a{
  text-decoration: none;
  color: white;
}
body{
  background: rgb(238,174,202);
  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
  display: flex;
  justify-content: center;
  height: 650px;
  align-items: center;
}
h1{
  text-align: center;
  font-weight: 700;
}
form{
  background: rgb(255, 255, 255);
  padding: 40px 0;
  box-shadow: 0 0 6px 0 rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  width: 50%;
}
.form{
  width: 100%;
  margin: auto;
}
form .grupo{
  position: relative;
  margin: 45px;
}
input{
  background: none;
  color: #c6c6c6;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid;
}
input:focus{
  outline: none;
  color: rgba(94, 93, 93, );
}
label{
  color: rgb(189, 189, 189);
  font-size: 20px;
  position: absolute;
  left: 5px;
  top: 10px;
  transition: 0.5s ease all;
  pointer-events: none;
}
input:focus~label,
input:valid~label{
  top: -14px;
  font-size: 18px;
  color: #2196f3;
}
.barra{
  position: relative;
  display: block;
  width: 100%;
}
.barra::before{
  content: '';
  height: 2px;
  width: 0%;
  bottom: 0;
  position: absolute;
    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
    transition: 0.3s ease width;
  left: 0;
}

input:focus~barra::before{
  width: 107%;
}
button{
  background: rgb(238,174,202);
  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
  border: none;
  display: block;
  width: 80%;
  margin: 10px auto;
  color: white;
  height: 40px;
  font-size: 16px;
  cursor: pointer;
}

.img-larga{
  margin-top: 20px;
  background-repeat: no-repeat;
  background-size: 100px ;
  margin-top: 20px;
}
.img-larga img{
    border-radius: 20px;
  min-width: 100%;
}
.img-logo{
  text-align: center;
}
</style>