package com.Papeleria.trabajo.exceptions;

public class ProductoServicioException extends RuntimeException {
   public String errorPropio;
    public ProductoServicioException(String mensaje, String errorPropio){
        super(mensaje);
        this.errorPropio= errorPropio;
    }
}
