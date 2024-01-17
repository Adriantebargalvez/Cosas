const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();
const { WebSocketServer } = require("ws");

const mongoURI = "mongodb+srv://root:root@tareas2.dn7hqmu.mongodb.net/?retryWrites=true&w=majority";
const dbName = "tareas2";

app.use("/", express.static("./www"));
app.listen(3000, () => {
  console.log("Servidor web en el puerto 3000");
});

const server = new WebSocketServer({ port: 443 });

        let db;

MongoClient.connect(mongoURI)
  .then((client) => {
    console.log("Connected to MongoDB Atlas");
        db=client.db(dbName);
    serverSetup();
  })
    .catch((err) => {
            console.error("Error connecting to MongoDB Atlas", err);
  });

function serverSetup() {
    var nextId = 0;

  server.on("connection", (ws) => {
    db.collection("tareas")
      .find()
      .forEach((tarea) => {
        ws.send(
          JSON.stringify({
            tipo: "new",
            id: tarea.id,
            contenido: tarea.contenido,
            panel: tarea.panel
          })
        );
      });
    db.collection("paneles")
      .find()
      .forEach((panel) => {
        ws.send(
          JSON.stringify({
            tipo: "newPanel",
            panel: panel.nombre
          })
        );
      });

        ws.on("message", async (data) => {
            var mensaje = JSON.parse(data);
            var { id, tipo, contenido, panel } = mensaje;

      switch (tipo) {
        case "new":
          id = nextId;
          nextId++;

          db.collection("tareas").insertOne({
            id,
            contenido,
            panel
          });

          break;
        case "delete":
          //borramos de mongo
             db.collection("tareas").deleteOne({ id });

          break;
          case "deletePanel":
    //Verificar si hay tareas asociadas al panel
    const tareasAsociadas =await db.collection("tareas").findOne({ panel: panel });

    if (!tareasAsociadas) {
        //No hay tareas asociadas,se puede eliminar el panel
        db.collection("paneles").deleteOne({ nombre: panel });

        ws.send(
            JSON.stringify({
                tipo: "deletePanel",
                panel: panel
            })
            );

       
    } else {
        
        const errorMensaje = {
            tipo: "error",
            mensaje: "No se puede borrar el panel. Hay tareas asociadas a él. ESTA EN LA BASE DE DATOS REFRESCA"
        };
        ws.send(JSON.stringify(errorMensaje));
       }
    break;

        case "newPanel":
          db.collection("paneles").insertOne({
            nombre: panel
          });

          break;
        default:
          return;
      }

      var nuevoMensaje = { tipo, id, contenido, panel };
      server.clients.forEach((c) => {
        c.send(JSON.stringify(nuevoMensaje));
      });
    });
  });
}
