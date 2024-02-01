package com.Papeleria.trabajo.controllers;

import com.Papeleria.trabajo.entities.Producto;
import com.Papeleria.trabajo.services.ProductoService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/articulos")
@RequiredArgsConstructor
public class ProductoController {
    private final ProductoService productoServico;

    @GetMapping
    public List<Producto> getProductos(){
return productoServico.getAll();
    }
    @GetMapping("/{id}")
    public Producto detallesProducto(@PathVariable("id") long id) throws Exception {
        return productoServico.getProductoyById(id);
    }
    @PostMapping
public Long nuevoProducto(@RequestBody Producto nuevoProducto){
        return productoServico.nuevoProducto(nuevoProducto);
}
@GetMapping("/{id}/{unidades}")
public String descontarUnidades(@PathVariable("id") Long id,@PathVariable("unidades") Long unidades) throws Exception {
        productoServico.descontarUnidades(id, unidades);
        return "Se han descontado"+unidades+"unidades del producto"+id;
}
@DeleteMapping("/{id}")
public String eliminarProducto(@PathVariable("id") Long id) throws Exception {
        productoServico.deleteProductoById(id);
        return "Se ha eliminado"+id;
}




@PutMapping("/{id}")
    public String cambiarNombre(@PathVariable("id") long id,@RequestParam("nombre") String nuevonombre){
        return "NombreCambiadoProducto.html";
}

@GetMapping("/saveProducto")
public String saveProducto(Model modelo){
        Producto producto=new Producto(3,"Papeleria","Milan430.jpg",4,0);
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
