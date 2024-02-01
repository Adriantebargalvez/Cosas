package com.Papeleria.trabajo.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity

@Data

@NoArgsConstructor

@AllArgsConstructor

@Builder
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private long id;
//@Column(name = "PRODUCTO_NAME")
   // @Size(min=5, max=20, menssage="El nnombre tine que tener 5 y 20 caracteres")

    private String nombre;
    private String imagen;
    private long unidades;
    private long precio;

}
