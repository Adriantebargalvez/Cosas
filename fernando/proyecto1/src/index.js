require ("dotenv").config();
const express = require ("express");
const mongoose = require("mongoose");
 const app = express() ;
 app.set("views engine", "ejs");
 app.use(express.json());
 app.use(express.urlencoded()); //para que sea json
 



//las paginas 

const rProg = require("./router/progpersonas");
app.use("/api/personas", rProg);

const rprogtarea = require("./router/progtarea");
app.use("/api/tareas",rprogtarea);


app.get( "/api", (req,res)=>{
    const respuesta = `Bienvenido a mi API
   Tienes las siguentes opciones.
    1 /api/personas
    2 /api/tareas`;
res.end(respuesta); 
 
})
//HTML LISTA PERSONAS
const datos = require("../datos/data")
app.get("/personas", (req,res)=>{
    res.render("../views/pages/listaPersonas.ejs",{misdatos : datos.personas});
})
//HTML LISTA PERSONAS
//HTML LISTA Tareas

app.get("/tareas", (req,res)=>{
    res.render("../views/pages/listaTareas.ejs",{misdatosT : datos.tareas});
})

//HTML LISTA Tareas
//HTML LISTA Asignaciones
app.get("/asignaciones/tareas", (req,res)=>{
    res.render("../views/pages/asignacionesTareas.ejs",{misdatosA : datos.tareaPersona});
})

app.get("/asignaciones/personas", (req,res)=>{
    res.render("../views/pages/asignacionesPersonas.ejs",{misdatosP : datos.personatarea});
})
app.get("/asignaciones", (req,res)=>{
    res.render("../views/pages/asignaciones.ejs",{misdatosP : datos.personatarea});
})
//HTML LISTA Asignaciones

app.use("/", express.static("./estetica"));

app.listen( process.env.PORT, () =>console.log (`Servidor iniciado en ${process.env.PORT}`) );

mongoose.connect( process.env.MONGODB_URL )
.then( ()=>console.log("Conectado a Atlas !") )
.catch( (err)=>console.log(err) );