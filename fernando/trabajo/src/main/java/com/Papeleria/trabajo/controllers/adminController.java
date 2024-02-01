package com.Papeleria.trabajo.controllers;
import com.Papeleria.trabajo.entities.Producto;
import com.Papeleria.trabajo.exceptions.ProductoServicioException;
import com.Papeleria.trabajo.services.ProductoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/admin")
@RequiredArgsConstructor
public class adminController {
    private final ProductoService productoServicio;
    private final ProductoController productoController;

    @GetMapping({"", "/listaAdmin"})
    public String getAllProductos(Model model) {
        // obtener la lista de productos
        model.addAttribute("listaAdmin", productoController.getProductos());
        return "ListadoAdmin";
    }

    private final ProductoService productoService;

    @GetMapping("/detallesProducto/{id}")
    public String detallesProducto(@PathVariable("id") long id, Model model) throws Exception {
        Producto producto = productoService.getProductoyById(id);
        model.addAttribute("DetalleProductos", producto);
        return "DetalleProducto";
    }

    @DeleteMapping("/{id}")
    @ResponseBody
    public ResponseEntity<String> eliminarProducto(@PathVariable("id") Long id) throws Exception {
        productoService.deleteProductoById(id);
        return new ResponseEntity<>("Se ha eliminado el producto con ID: " + id, HttpStatus.OK);
    }

}



