const express = require("express");

const datos = require("../../datos/data");

const rProgtarea = express.Router();


rProgtarea.use(express.json());

rProgtarea.get("/", (req, res)=>{ 
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(datos.tareas));
})
rProgtarea.post("/", (req, res) => {
    try {
        if (!req.body || !req.body.nombre || !req.body.lugar || !req.body.horas) {
            throw new Error("datos incompletos");
        }

        datos.tareas.push({
            "nombre": req.body.nombre,
            "lugar": req.body.lugar,
            "horas": req.body.horas
        });
        res.json({ mensaje: "Tarea Añadida" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});



rProgtarea.patch("/:indice", (req, res) => {
    const indice = parseInt(req.params.indice);

    if (isNaN(indice) || indice < 0 || indice >= datos.tareas.length) {
        res.status(400).json({ error: "no valido" });
    } else {
        try {
            if (!req.body || !req.body.nombre || !req.body.lugar || !req.body.horas) {
                throw new Error("Datos incompletos");
            }

            datos.tareas[indice] = {
                "nombre": req.body.nombre,
                "lugar": req.body.lugar,
                "horas": req.body.horas
            };
            res.json({ mensaje: "Tarea Actualizada" });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
});

rProgtarea.delete("/:indice", (req, res) => {
    const indice = parseInt(req.params.indice);

    if (isNaN(indice) || indice < 0 || indice >= datos.tareas.length) {
        res.status(400).json({ error: "no valido" });
    } else {
        try {
         
            datos.tareas.splice(indice, 1);
            res.json("Tarea Eliminada");
        } catch (error) {
            res.status(500).json({ error: "Error" });
        }
    }
    
});
rProgtarea.use((req, res, next) => {
    res.status(404).json({ error: "Ruta no encontrada" });
});

module.exports = rProgtarea;