package com.Papeleria.trabajo.controllers;

import com.Papeleria.trabajo.Producto;
import org.apache.commons.logging.Log;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

@Controller
@RequestMapping("/Producto")
public class ProductoController {
    @RequestMapping()
    public String getProductos(Model modelo) {
        List<Producto> productos = new ArrayList<Producto>();
        Producto p1 = new Producto(1,"lapiz",4,1);
        Producto p2 = new Producto(2,"boli",1,2);
        Producto p3 = new Producto(3,"folios",25,1);
        Producto p4 = new Producto(4,"gomas",4,3);

        productos.add(p1);
        productos.add(p2);
        productos.add(p3);
        productos.add(p4);

        modelo.addAttribute("listaProductos",productos);

        return "ListadoProductos";
    }

    @GetMapping("/{id}")
    public String detallesProducto(@PathVariable("id") long id){
        return "DetalleProducto.html";
    }
    @PostMapping
public String nuevoProducto(@RequestBody Producto nuevoProducto){
        return"NuevoProducto.html";
}
@PutMapping("/{id}")
    public String cambiarNombre(@PathVariable("id") long id,@RequestParam("nombre") String nuevonombre){
        return "NombreCambiadoProducto.html";
}

@GetMapping("/saveProducto")
public String saveProducto(Model modelo){
        Producto producto=new Producto(0,"Papeleria",0,0);
    modelo.addAttribute("producto",producto);
    return "saveProducto";
}
@PostMapping("/saveProducto")
    public String saveProducto(Model modelo,@ModelAttribute("producto") Producto producto){
producto.setNombre(producto.getNombre()+"hola");
        modelo.addAttribute("producto",producto);
    //Logger.getGlobal().log(Level.WARNING, "hola");
     return "saveProducto";
}
}
