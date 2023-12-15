const mongoose = require('mongoose')
const URI = 'mongodb+srv://adriantebargalvez:root@juguetes.gkrjvsm.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(URI)
    .then (db => console. log ('DB connected '))
    .catch (err => console. error (err))
module.exports = mongoose;
