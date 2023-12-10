DROP DATABASE IF EXISTS proyecto2;
CREATE DATABASE proyecto2 CHARACTER SET utf8mb4;
USE proyecto2;


CREATE TABLE oficina (
    IdOficina VARCHAR(10) NOT NULL,
    Ciudad VARCHAR(30) NOT NULL,
    Pais VARCHAR(50) NOT NULL,
    IdProvincia varchar(50),
    codigopostal varchar(10),
    Telefono VARCHAR(20) NOT NULL,
    Direccion VARCHAR(50) NOT NULL,
    Direccion2 VARCHAR(50) NULL,
    PRIMARY KEY (IdOficina)

);


CREATE TABLE empleado (
    codigo int,
    Nombre VARCHAR(50) NOT NULL,
    Apellido1 VARCHAR(50) NOT NULL,
    Apellido2 VARCHAR(50) NOT NULL,
    Extension VARCHAR(10) NOT NULL,
    Email VARCHAR(40) NOT NULL,
    codigo_oficina varchar(10) not null,
    IdJefe INT,
    Puesto VARCHAR(50) NOT NULL,
    PRIMARY KEY (codigo),
    FOREIGN KEY (IdJefe) REFERENCES empleado(codigo)
);


CREATE TABLE cliente (
    IdCliente INT NOT NULL AUTO_INCREMENT,
    Nombre VARCHAR(50) NOT NULL,
    ContactoNombre VARCHAR(30) NOT NULL,
    ContactoApellido VARCHAR(30) NOT NULL,
    Telefono VARCHAR(15) NOT NULL,
    Fax VARCHAR(15) NULL,
    Direccion1 VARCHAR(50) NOT NULL,
    Direccion2 VARCHAR(50) NULL,
    Ciudad VARCHAR(50) NOT NULL,
    Region VARCHAR(50) NULL,
    Pais VARCHAR(50) NOT NULL,
    CodigoPostal VARCHAR(10) NULL,
    IdEmpleado INT NOT NULL,
    LimiteCredito DECIMAL(15,2),
    PRIMARY KEY (IdCliente),
    FOREIGN KEY (IdEmpleado) REFERENCES empleado(codigo)
);



CREATE TABLE pago (
    IdCliente INT NOT NULL,
    FormaPago VARCHAR(40) NOT NULL,
    IdTransaccion VARCHAR(50) NOT NULL,
    FechaPago DATE NOT NULL,
    Total DECIMAL(15,2) NOT NULL,
    PRIMARY KEY (IdTransaccion),
    FOREIGN KEY (IdCliente) REFERENCES cliente(IdCliente)
);


CREATE TABLE pedido (
    IdPedido INT NOT NULL AUTO_INCREMENT,
    Fecha DATE NOT NULL,
    FechaEsperada DATE NOT NULL,
    FechaEntrega DATE NULL,
    Estado VARCHAR(15) NOT NULL,
    Comentarios TEXT NULL,
    IdCliente INT NOT NULL,
    PRIMARY KEY (IdPedido),
    FOREIGN KEY (IdCliente) REFERENCES cliente(IdCliente)
);



CREATE TABLE detalle_pedido (
    IdPedido INT NOT NULL,
    CodigoProducto VARCHAR(15) NOT NULL,
    Cantidad INT NOT NULL,
    PrecioUnidad DECIMAL(15,2) NOT NULL,
    NumeroLinea INT NOT NULL,
    FOREIGN KEY (IdPedido) REFERENCES pedido(IdPedido)
);


CREATE TABLE gama_producto (
    CodigoGama VARCHAR(50) NOT NULL,
    Descripcion TEXT NOT NULL,
    Web TEXT NULL,
    Imagen VARCHAR(256) NULL,
    PRIMARY KEY (CodigoGama)

);

CREATE TABLE producto (
    CodigoProducto VARCHAR(15) NOT NULL,
    Nombre VARCHAR(70) NOT NULL,
    IdGama varchar(50) not null ,
    Dimensiones VARCHAR(25) NULL,
    Proveedor VARCHAR(50) NOT NULL,
    Descripcion TEXT NULL,
    Stock INT NOT NULL,
    PrecioVenta DECIMAL(15,2) NOT NULL,
    PrecioProveedor DECIMAL(15,2) NULL,
    PRIMARY KEY (CodigoProducto),
foreign key (IdGama)references gama_producto(CodigoGama)
);

