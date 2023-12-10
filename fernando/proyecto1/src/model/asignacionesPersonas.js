const mongoose=require("mongoose");

const asignacionesPersonasSchema = mongoose.Schema( {
    persona: {

        type: String,
        
        required: true
        
        },
tarea: {

type: String,

required: true

}


});

module.exports = mongoose.model("asignacionesPersonas", asignacionesPersonasSchema);
