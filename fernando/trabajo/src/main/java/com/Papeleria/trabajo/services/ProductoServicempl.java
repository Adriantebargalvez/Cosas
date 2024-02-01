package com.Papeleria.trabajo.services;

import com.Papeleria.trabajo.entities.Producto;
import com.Papeleria.trabajo.exceptions.ProductoServicioException;
import com.Papeleria.trabajo.repository.ProductoRepositorio;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@RequiredArgsConstructor
public class ProductoServicempl implements ProductoService {


    final private ProductoRepositorio productoRepositorio;

    @Override
    public long nuevoProducto(Producto producto) {
        Producto nuevoProducto=productoRepositorio.save(producto);
        return 0;
    }

    @Override
    public Producto getProductoyById(long productoId) throws ProductoServicioException {
        Producto producto= productoRepositorio.findById(productoId)
                .orElseThrow(()->new ProductoServicioException("Producto no encontrado","funcion getProductoById"));
        return producto;
    }

    @Override
    public void descontarUnidades(long productoId, long descontar) throws ProductoServicioException {
        Producto producto= productoRepositorio.findById(productoId)
                .orElseThrow(()->new ProductoServicioException("Producto no encontrado","descontarUnidades"));
       if( producto.getUnidades()<descontar){
throw new ProductoServicioException("No hay stock suficiente","descontarUnidades");
       }
       producto.setUnidades(producto.getUnidades()-descontar);

       productoRepositorio.save(producto);
    }

    @Override
    public void deleteProductoById(Long productoId) throws ProductoServicioException {
        if (!productoRepositorio.existsById(productoId)) {
            throw new ProductoServicioException("Producto no encontrado", "deleteProductoById");
        }

        productoRepositorio.deleteById(productoId);
    }


    @Override
    public List<Producto> getAll() {
        return productoRepositorio.findAll();
    }
}
