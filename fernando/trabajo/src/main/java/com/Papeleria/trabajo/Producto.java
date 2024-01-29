package com.Papeleria.trabajo;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Producto {
    private long id;
    private String nombre;
    private long unidades;
    private long precio;


}
