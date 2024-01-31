package com.Papeleria.trabajo.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity

@Data

@NoArgsConstructor

@AllArgsConstructor

@Builder
public class LiniaPedido {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
@ManyToOne(fetch = FetchType.LAZY)
@JoinColumn (name = "Pedido_id", nullable = false)
@OnDelete(action = OnDeleteAction.CASCADE)
@JsonIgnore
    private Pedido Pedido_id;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn (name = "Producto_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private Producto Producto_id;
    private long Precio;
    private long cantidad;
    private long total;
}


