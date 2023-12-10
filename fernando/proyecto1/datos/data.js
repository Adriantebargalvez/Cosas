var datos = {

     "personas": [
     
     { "nombre":"Andres",
     "email":"andres@evento.com",
     "telefono":"123456789" },
     
     { "nombre":"Luis",
     "email":"luis@evento.com",
     "telefono":"456789123" },

     { "nombre":"Carlos",
     "email":"carlos@evento.com",
     "telefono":"126789257" },  

     { "nombre":"Susana",
     "email":"susana@evento.com",
     "telefono":"654789255" },

     { "nombre":"Evaristo",
     "email":"Evaristo@evento.com",
     "telefono":"412478921" },

     { "nombre":"Manuel",
     "email":"Manuel@evento.com",
     "telefono":"124789234" },

     { "nombre":"Carla",
     "email":"Carla@evento.com",
     "telefono":"256789454" },

     { "nombre":"Rosa",
     "email":"Rosa@evento.com",
     "telefono":"756379783" },

     { "nombre":"Paco",
     "email":"Paco@evento.com",
     "telefono":"453128923" },

     { "nombre":"Roberto",
     "email":"Roberto@evento.com",
     "telefono":"645789123" },
     
     ],
     
     "tareas" : [
     
     { "nombre": "Preparar los Stands",
     "lugar": "edificio C y D" ,
     "horas": "2h"},

     { "nombre": "Recepción y Bienvenida",
     "lugar": "entrada" ,
     "horas": "1h"},

     { "nombre": "Información Empressas",
     "lugar": "edificio D" ,
     "horas": "4h"},

     { "nombre": "Muestra de Productos",
     "lugar": "edificio D" ,
     "horas": "4h"},
     
     { "nombre": "Ponencia Tema A",
     "lugar": "edificio C" ,
     "horas": "1h"},
     
     { "nombre": "Ponencia Tema B",
     "lugar": "edificio C" ,
     "horas": "1h"},
     
     ],

     "tareaPersona" : [
     
          { "Tarea": "Bienvenida",
          "Persona": "Andres,Carla,Roberto" 
          },
          { "Tarea": "Muestra_de_productos",
          "Persona": "Manuel" 
          },
          { "Tarea": "Preparar_los_Stands",
          "Persona": "Susana" 
          },
          { "Tarea": "Ponencia_Tema_A",
          "Persona": "Susana" 
          },
          
     ],
     "personatarea" : [
     
          { "Persona": "Andres,Carla,Roberto" ,
               "Tarea": "Bienvenida"
          },
          { "Persona": "Susana",
          "Tarea": "Preparar las stands y Ponencia Tema A" 
          },
          { "Persona": "Manuel",
          "Tarea": "Muestra de productos" 
          },
     ]
           
}
     
     module.exports = datos;