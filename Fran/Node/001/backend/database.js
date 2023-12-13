const mongoose = require('mongoose')
const uri = 'mongodb+srv://adriantebargalvez:root@cluster0.odwuknv.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(uri)
    .then (db => console. log ('DB connected ' + db.name))
    .catch (err => console. error (err))
module.exports = mongoose;
