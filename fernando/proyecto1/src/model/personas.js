const mongoose=require("mongoose");

const personasSchema = mongoose.Schema( {

nombre: {

type: String,

required: true

},

email: {

type: String,

required: true

},

telefono: {

type: Number,

required: true

}

});

module.exports = mongoose.model("personas", personasSchema);
