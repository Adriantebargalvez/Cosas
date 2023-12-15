const mongoose = require('mongoose');
const {Schema} = mongoose;

const movieSchema = new Schema({
    Nombre: {type: String, required: true},
    Edad_minima: {type: Number, required: true},
    Precio: {type: String, required: true},
    categoria: {type: Number, required: true},
});


module.exports = mongoose.model('Movies', movieSchema,'Movies2023');