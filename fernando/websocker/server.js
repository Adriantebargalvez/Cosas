const express=require("express");
const app=express();
app.use("/",express.static("./www"));
app.listen(3000, ()=>{console.log( "Servidor web en el puerto 3000")});

const {WebSocketServer} = require("ws");
const server = new WebSocketServer({port:443});
cuantosHayConectados=0;

server.on("connection", (ws) => {
    cuantosHayConectados++;
    console.log("Alguien se ha conectado: Ya somos " + cuantosHayConectados);
    

    

    ws.on("close", () => {
        cuantosHayConectados--;
        console.log("Alguien se ha desconectado: quedamos " + cuantosHayConectados);
        broadcast(`${ws.nombre} se ha desconectado.`);
        broadcast("ListaUsuarios");


        
    });

    ws.on("message", (mensaje) => {
    if (ws.nombre === undefined) {
        // Si el nombre del usuario no está definido, es un mensaje de nombre
        ws.nombre = mensaje;
        ws.send("Bienvenido al Chat, " + mensaje + "<br>");
        broadcast("ListaUsuarios");
    } else {
        // Si el nombre del usuario está definido, es un mensaje del chat
        console.log("Mensaje recibido:" + mensaje);
        broadcast(`${ws.nombre}: ${mensaje}`);
        
    }
    
});
    
    function broadcast(message) {
        server.clients.forEach(cliente => {
        if (message === "ListaUsuarios") {
            const listaUsuarios = obtenerListaUsuarios();
            cliente.send(JSON.stringify(listaUsuarios.toString()));
        } else {
            cliente.send(message);
        }
    });
    }
    function obtenerListaUsuarios() {
        const listaUsuarios = [];
        server.clients.forEach(cliente => {
            listaUsuarios.push(cliente.nombre);
        });
        return listaUsuarios;
    }
   
});


   