const mongoose = require('mongoose');
const {Schema} = mongoose;

const movieSchema = new Schema({
    nombre: {type: String, required: true},
    edad_minima: {type: Number, required: true},
    precio: {type: Number, required: true},
    categoria: {type: String , required: true},
});


module.exports = mongoose.model('juguetes',movieSchema,'Movies');