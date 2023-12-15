const mongoose = require('mongoose');
const uri = 'mongodb+srv://adriantebargalvez:root@juguetes.gkrjvsm.mongodb.net/juguetes?retryWrites=true&w=majority';

mongoose.connect(uri)
    .then (db => console. log ('DB connected '))
    .catch (err => console. error (err));

module.exports = mongoose;
