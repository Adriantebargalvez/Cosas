package com.Papeleria.trabajo.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class RestResponseExceptionHandler extends ResponseEntityExceptionHandler {
    @ExceptionHandler(ProductoServicioException.class)
    public ResponseEntity<String> manejarErroresDelProductoServicio(ProductoServicioException e){
        return new ResponseEntity<String>("Erorr"+e.getMessage()+"\nen" +e.errorPropio, HttpStatus.BAD_REQUEST);
    }
}
