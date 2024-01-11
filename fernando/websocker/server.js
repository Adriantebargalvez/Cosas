const express=require("express");
const app=express();
app.use("/",express.static("./www"));
app.listen(3000, ()=>{console.log( "Servidor web en el puerto 3800")});

const {WebSocketServer} = require("ws");
const server = new WebSocketServer({port:443});
cuantosHayConectados=0;
server.on("connection",(ws)=>{
    cuantosHayConectados++;
   console.log("Alguien se ha conectado: Ya somos "+cuantosHayConectados);
  
   ws.send("Hola")
   
   ws.on("close",()=>{
    cuantosHayConectados--;
    console.log("Alguien se ha desconectado: quedamos "+cuantosHayConectados)
   }) 
});
setInterval(()=>{
    const numero = Math.floor(Math.random()*100);
    server.clients.forEach(cliente => {
    cliente.send(numero.toString());
    })
    },1000);