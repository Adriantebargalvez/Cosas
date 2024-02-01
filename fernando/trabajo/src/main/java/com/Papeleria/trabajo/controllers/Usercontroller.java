package com.Papeleria.trabajo.controllers;

import com.Papeleria.trabajo.entities.Producto;
import com.Papeleria.trabajo.services.ProductoService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RequestMapping("/")
@RequiredArgsConstructor
public class Usercontroller {

    private final ProductoService productoServicio;
    private final ProductoController productoController;

    @GetMapping({"", "/listadoProductos"})
    public String getAllProductos(Model model) {
        // obtener la lista de productos
        model.addAttribute("listaProductos", productoController.getProductos());
        return "ListadoProductos";
    }
    private final ProductoService productoService;
    @GetMapping("/detallesProducto/{id}")
    public String detallesProducto(@PathVariable("id") long id, Model model) throws Exception {
        Producto producto = productoService.getProductoyById(id);
        model.addAttribute("DetalleProductos", producto);
        return "DetalleProducto";
    }
}
