package com.Papeleria.trabajo.repository;

import com.Papeleria.trabajo.entities.Producto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProductoRepositorio extends JpaRepository<Producto, Long> {
//Producto getProductoByUnidades(Long unidades);
}
