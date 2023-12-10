
const express = require("express");

const datos = require("../../datos/data");

const rutaProg = express.Router();



rutaProg.use(express.json());

rutaProg.get("/", (req, res)=>{ 
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(datos.personas));
})
rutaProg.post("/", (req, res) => {
    try {
        datos.personas.push({
            "nombre": req.body.nombre,
            "email": req.body.email,
            "telefono": req.body.telefono
        });
        res.json({ mensaje: "Persona Añadida" });
    } catch (error) {
        res.status(400).json({ error: "Error al procesar la solicitud JSON" });
    }
});


rutaProg.patch("/:indice", (req, res) => {
    const indice = parseInt(req.params.indice);

    if (isNaN(indice) || indice < 0 || indice >= datos.personas.length) {
        res.status(400).json({ error: " no valido" });
    } else {
        try {
            if (!req.body || !req.body.nombre || !req.body.email || !req.body.telefono) {
                throw new Error("Datos incompletos");
            }

            datos.personas[indice] = {
                "nombre": req.body.nombre,
                "email": req.body.email,
                "telefono": req.body.telefono
            };
            res.json({ mensaje: "Persona Actualizada" });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
});

rutaProg.delete("/:indice", (req, res) => {
    const indice = parseInt(req.params.indice);

    if (isNaN(indice) || indice < 0 || indice >= datos.personas.length) {
        res.status(400).json({ error: " no valido" });
    } else {
        try {
            
            datos.personas.splice(indice, 1);
            res.json("Persona Eliminada");
        } catch (error) {
            res.status(500).json({ error: "no se a podido eliminar" });
        }
    }
});

rutaProg.use((req, res, next) => {
    res.status(404).json({ error: "Ruta no encontrada" });
});


module.exports = rutaProg;
