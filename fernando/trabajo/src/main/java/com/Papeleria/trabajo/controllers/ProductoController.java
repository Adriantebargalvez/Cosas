package com.Papeleria.trabajo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/Producto")
public class ProductoController {
    @RequestMapping()
    public String getProductos(){
        return "ListadoProductos";
    }
}
