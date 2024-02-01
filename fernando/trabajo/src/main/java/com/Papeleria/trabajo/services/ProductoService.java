package com.Papeleria.trabajo.services;

import com.Papeleria.trabajo.entities.Producto;

import java.util.List;

public interface ProductoService {
    long nuevoProducto(Producto producto);

    Producto getProductoyById(long productoId) throws Exception;

    void descontarUnidades(long productoId, long cantidad) throws Exception;

    void deleteProductoById(Long productoId) throws Exception;


    List<Producto> getAll();


}
