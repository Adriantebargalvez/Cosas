const mongoose=require("mongoose");

const asignacionesTareasSchema = mongoose.Schema( {

tarea: {

type: String,

required: true

},
persona: {

type: String,

required: true

}

});

module.exports = mongoose.model("asignacionesTareas", asignacionesTareasSchema);
