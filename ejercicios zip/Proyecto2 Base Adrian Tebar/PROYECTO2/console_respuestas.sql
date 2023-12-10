-- 1. Devuelve un listado con la ciudad y el teléfono de las oficinas de España.
select Ciudad,Telefono from oficina;
-- 2. Devuelve un listado con el nombre, apellidos y email de los empleados cuyo jefe tiene un código de jefe igual a 7.
select Nombre,Apellido1,Email from empleado where IdJefe=7;
-- 3. Devuelve un listado con el nombre, apellidos y puesto de aquellos empleados que no sean representantes de ventas.
select Nombre,Apellido1,Apellido2,Puesto from empleado where Puesto not like 'Representante Ventas';
-- 4. Devuelve un listado con el nombre de los todos los clientes españoles.
select Nombre from cliente where Pais like 'Spain' ;
-- 5. Devuelve un listado con el código de cliente de aquellos clientes que realizaron algún pago en 2008. Tenga en cuenta que deberá eliminar aquellos códigos de cliente que aparezcan repetidos.
select distinct pago.IdCliente,FechaPago from cliente,pago where YEAR(FechaPago) like '2008';
-- 6. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos que no han sido entregados a tiempo.
select IdPedido,pedido.IdCliente,FechaEsperada,FechaEntrega from cliente,pedido where FechaEntrega>FechaEsperada;
-- 7. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos cuya fecha de entrega ha sido al menos dos días antes de la fecha esperada.
select IdPedido,IdCliente,FechaEsperada,FechaEntrega from pedido WHERE DATEDIFF(FechaEntrega, FechaEsperada) <= -2;
-- 8. Devuelve un listado de todos los pedidos que han sido entregados en el mes de enero de cualquier año.
select IdPedido from pedido WHERE MONTH(FechaEntrega) = 1;
-- 9. Devuelve un listado con todos los pagos que se realizaron en el año 2008 mediante PayPal. Ordene el resultado de mayor a menor.
select IdTransaccion from pago where YEAR(FechaPago)=2008 and FormaPago like 'Paypal'order by IdTransaccion desc ;
-- 10. Devuelve un listado con todos los productos que pertenecen a la gama Ornamentales y que tienen más de 100 unidades en stock. El listado deberá estar ordenado por su precio de venta, mostrando en primer lugar los de mayor precio.
select Nombre,IdGama from producto where IdGama like 'Ornamentales' and stock=100 ;

-- CONSULTAS MULTITABLA

-- 1. Obtén un listado con el nombre de cada cliente y el nombre y apellido de su representante de ventas.
 SELECT c.Nombre,e.Nombre,Apellido1
FROM cliente c
inner join empleado e on c.IdEmpleado = e.codigo;

-- 2. Muestra el nombre de los clientes que hayan realizado pagos junto con el nombre de sus representantes de ventas.
select c.Nombre,e.Nombre from cliente c ,pago inner join empleado e on pago.IdCliente = e.codigo;
-- 3. Muestra el nombre de los clientes que no hayan realizado pagos junto con el nombre de sus representantes de ventas.
SELECT c.Nombre as 'Nombre del Cliente', e.Nombre as 'Nombre del Representante', e.Apellido1 as 'Apellido del Representante'
FROM cliente c
JOIN empleado e on c.IdEmpleado = e.codigo
WHERE c.IdCliente NOT IN (SELECT p.IdCliente FROM pago p);
-- 4. Devuelve el nombre de los clientes que han hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.
SELECT c.Nombre as 'Nombre del Cliente', e.Nombre as 'Nombre del Representante', e.Apellido1 as 'Apellido del Representante', o.Ciudad
FROM cliente c
JOIN empleado e on c.IdEmpleado = e.codigo
JOIN oficina o on o.IdOficina = e.codigo_oficina
JOIN pago p on p.IdCliente = c.IdCliente;
-- 5. Devuelve el nombre de los clientes y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.
SELECT distinct c.Nombre as 'Nombre del Cliente', e.Nombre as 'Nombre del Representante', e.Apellido1 as 'Apellido del Representante', o.Ciudad
FROM cliente c
JOIN empleado e on c.IdEmpleado = e.codigo
JOIN oficina o on o.IdOficina = e.codigo_oficina;
-- 6. Devuelve un listado con el nombre de los empleados junto con el nombre de sus jefes.
SELECT empleado.Nombre, empleadoJefe.Nombre AS NombreJefe
FROM empleado
INNER JOIN empleado AS empleadoJefe ON empleado.IdJefe = empleadoJefe.codigo;
-- 7. Devuelve el nombre de los clientes a los que no se les ha entregado a tiempo un pedido.
SELECT pedido.IdCliente, cliente.Nombre
FROM pedido
INNER JOIN cliente ON pedido.IdCliente = cliente.IdCliente
WHERE FechaEntrega > FechaEsperada;
-- 8. Devuelve un listado que muestre solamente los clientes que no han realizado ningún pago.
SELECT cliente.Nombre
FROM cliente
LEFT JOIN pago ON cliente.IdCliente = pago.IdCliente
WHERE pago.IdCliente IS NULL;
-- 9. Devuelve un listado que muestre los clientes que no han realizado ningún pago y los que no han realizado ningún pedido.
SELECT cliente.Nombre
FROM cliente
LEFT JOIN pago ON cliente.IdCliente = pago.IdCliente
LEFT JOIN pedido ON cliente.IdCliente = pedido.IdCliente
WHERE pago.IdCliente IS NULL AND pedido.IdCliente IS NULL;

-- 10. Devuelve un listado que muestre solamente los empleados que no tienen una oficina asociada.
SELECT empleado.Nombre, empleado.Apellido1
FROM empleado
LEFT JOIN oficina ON empleado.codigo_oficina = oficina.IdOficina
WHERE oficina.IdOficina IS NULL;

-- 11. Devuelve un listado que muestre solamente los empleados que no tienen un cliente asociado.
SELECT empleado.Nombre, empleado.Apellido1
FROM empleado
LEFT JOIN cliente ON empleado.codigo = cliente.IdEmpleado
WHERE cliente.IdEmpleado IS NULL;
-- 12. Devuelve un listado que muestre solamente los empleados que no tienen un cliente asociado junto con los datos de la oficina donde trabajan.
SELECT e.Nombre, e.Apellido1, e.Apellido2, o.Ciudad, o.Pais,o.Telefono,o.codigopostal
FROM empleado e
LEFT JOIN cliente c ON e.codigo = c.IdEmpleado
JOIN oficina o ON e.codigo_oficina = o.IdOficina
WHERE c.IdCliente IS NULL;
-- 13. Devuelve un listado de los productos que nunca han aparecido en un pedido. El resultado debe mostrar el nombre, la descripción y la gama del producto.
SELECT p.Nombre, p.Descripcion, g.Descripcion
FROM producto p
LEFT JOIN detalle_pedido dp ON p.CodigoProducto = dp.CodigoProducto
JOIN gama_producto g ON p.IdGama = g.CodigoGama
WHERE dp.IdPedido IS NULL;
-- 14. Devuelve un listado con los clientes que han realizado algún pedido pero no han realizado ningún pago.
SELECT distinct c.Nombre
FROM cliente c
LEFT JOIN pedido p ON c.IdCliente = p.IdCliente
LEFT JOIN pago pg ON c.IdCliente = pg.IdCliente
WHERE p.IdPedido IS NOT NULL
AND pg.IdTransaccion IS NULL;
-- 15. Devuelve un listado con los datos de los empleados que no tienen clientes asociados y el nombre de su jefe asociado.
SELECT e.codigo, e.Nombre, e.Apellido1, e.Apellido2, e.Extension, e.Email, e.codigo_oficina, e.Puesto, j.Nombre AS NombreJefe
FROM empleado e
LEFT JOIN cliente c ON e.codigo = c.IdEmpleado
LEFT JOIN empleado j ON e.IdJefe = j.codigo
WHERE c.IdCliente IS NULL;

-- CONSULTAS RESUMEN

-- 1. ¿Cuántos empleados hay en la compañía?
select count(*) As Numero_empleado  from empleado;
-- 2. ¿Cuántos clientes tiene cada país?
select Pais, count(*) as cliente_pais from cliente group by Pais;
-- 3. ¿Cuál fue el pago medio en 2009?
select FechaPago,count(*)as Pago_medio from pago group by FechaPago like 2009;
-- 4. Calcula el precio de venta del producto más caro y más barato en una misma consulta.
SELECT
MAX(PrecioVenta) as PrecioMasCaro,
MIN(PrecioVenta) as PrecioMasBarato
FROM producto;
-- 5. ¿Cuantos clientes existen con domicilio en la ciudad de Madrid?
SELECT COUNT(*) As con_domicilio
FROM cliente
WHERE Ciudad = 'Madrid';

-- 6. Devuelve el nombre de los representantes de ventas y el numero de clientes al que atiende cada uno.
SELECT e.Nombre, e.Apellido1, e.Apellido2, COUNT(*) AS NumeroClientes
FROM empleado e
INNER JOIN cliente c
ON e.codigo = c.IdEmpleado
GROUP BY e.Nombre, e.Apellido1, e.Apellido2;

-- 7. Calcula el número de clientes que no tiene asignado representante de ventas.
SELECT COUNT(*)
FROM cliente
WHERE IdEmpleado IS NULL;
-- 8. Calcula la fecha del primer y último pago realizado por cada uno de los clientes. El listado deberá mostrar el nombre y los apellidos de cada cliente.
SELECT Nombre,ContactoApellido, p.FechaPago,
  (SELECT MIN(FechaPago) FROM pago p2 WHERE p2.IdCliente = c.IdCliente) AS 'Primer Pago',
  (SELECT MAX(FechaPago) FROM pago p2 WHERE p2.IdCliente = c.IdCliente) AS 'Último Pago'
FROM cliente c
INNER JOIN pago p ON c.IdCliente = p.IdCliente
GROUP BY c.IdCliente;
-- 9. Devuelve un listado de los 20 productos más vendidos y el número total de unidades que se han vendido de cada uno. El listado deberá estar ordenado por el número total de unidades vendidas.
SELECT p.Nombre, SUM(d.Cantidad) AS 'Unidades Vendidas'
FROM pedido o
INNER JOIN detalle_pedido d ON o.IdPedido = d.IdPedido
INNER JOIN producto p ON d.CodigoProducto = p.CodigoProducto
GROUP BY p.Nombre
ORDER BY SUM(d.Cantidad) DESC
LIMIT 20;
-- 10. Lista las ventas totales de los productos que hayan facturado más de 3000 euros. Se mostrará el nombre, unidades vendidas, total facturado y total facturado con impuestos (21% IVA).
SELECT p.Nombre, SUM(d.Cantidad) AS 'Unidades Vendidas',
  SUM(d.Cantidad*d.PrecioUnidad) AS 'Total Facturado',
  SUM(d.Cantidad*d.PrecioUnidad*1.21) AS 'Total Facturado + IVA'
FROM pedido o
INNER JOIN detalle_pedido d ON o.IdPedido = d.IdPedido
INNER JOIN producto p ON d.CodigoProducto = p.CodigoProducto
GROUP BY p.Nombre
HAVING SUM(d.Cantidad*d.PrecioUnidad) > 3000;
-- Subconsultas

-- 1. Devuelve el nombre del cliente con mayor límite de crédito.
SELECT Nombre
FROM cliente
ORDER BY LimiteCredito DESC
LIMIT 1;
-- 2. Devuelve el nombre del producto que tenga el precio de venta más caro.
SELECT Nombre
FROM producto
ORDER BY PrecioVenta DESC
LIMIT 1;
-- 3. Devuelve el producto que más unidades tiene en stock.
SELECT Nombre
FROM producto
ORDER BY Stock DESC
LIMIT 1;
-- 4. Devuelve el nombre, los apellidos y el email de los empleados que están a cargo de Alberto Soria.
SELECT Nombre, Apellido1, Email
FROM empleado
WHERE IdJefe = (SELECT codigo FROM empleado WHERE Nombre = 'Alberto' AND Apellido1 = 'Soria');
-- 5. Devuelve el nombre, apellido1 y cargo de los empleados que no representen a ningún cliente.
SELECT Nombre, Apellido1, Puesto
FROM empleado
WHERE codigo NOT IN (SELECT IdEmpleado FROM cliente);
-- 6. Devuelve un listado que muestre solamente los clientes que no han realizado ningún pago.

SELECT c.IdCliente, c.Nombre, c.ContactoNombre, c.ContactoApellido, c.Telefono
FROM cliente c
LEFT OUTER JOIN pago p ON c.IdCliente = p.IdCliente
WHERE p.IdTransaccion IS NULL;
-- 7. Devuelve el nombre, apellidos, puesto y teléfono de la oficina de aquellos empleados que no sean representante de ventas de ningún cliente.
SELECT Nombre, Apellido1, Apellido2, Puesto, Telefono
FROM empleado
INNER JOIN oficina
ON empleado.codigo_oficina = oficina.IdOficina
WHERE codigo NOT IN ( SELECT IdEmpleado FROM cliente WHERE Puesto = 'Representante de ventas');
-- + 8. Devuelve las oficinas donde trabajan los empleados que han sido los representantes de ventas de algún cliente que haya realizado la compra de algún producto de la gama Frutales.
SELECT oficina.IdOficina, oficina.Ciudad, oficina.Pais
FROM oficina
INNER JOIN empleado ON oficina.IdOficina=empleado.codigo_oficina
INNER JOIN cliente ON cliente.IdEmpleado=empleado.codigo
INNER JOIN pedido ON pedido.IdCliente=cliente.IdCliente
INNER JOIN detalle_pedido ON detalle_pedido.IdPedido=pedido.IdPedido
INNER JOIN producto ON producto.CodigoProducto=detalle_pedido.CodigoProducto
INNER JOIN gama_producto ON gama_producto.CodigoGama=producto.IdGama
WHERE gama_producto.Descripcion='Frutales';
-- 9. Devuelve un listado con los clientes que han realizado algún pedido pero no han realizado ningún pago.

SELECT c.IdCliente, c.Nombre, c.ContactoNombre, c.ContactoApellido
FROM cliente c
LEFT JOIN pago p ON c.IdCliente = p.IdCliente
LEFT JOIN pedido pe ON c.IdCliente = pe.IdCliente
WHERE p.IdCliente IS NULL
AND pe.IdCliente IS NOT NULL;
-- 10. Devuelve un listado de los productos que han aparecido en un pedido alguna vez.

SELECT producto.CodigoProducto, producto.Nombre, producto.Dimensiones, producto.Proveedor, producto.Descripcion, producto.Stock, producto.PrecioVenta, producto.PrecioProveedor
FROM producto
INNER JOIN detalle_pedido
ON producto.CodigoProducto = detalle_pedido.CodigoProducto;
-- CONSULTAS VARIADAS

-- 1. Devuelve un listado con los nombres de los clientes y el total pagado por cada uno de ellos. Tenga en cuenta que pueden existir clientes que no han realizado ningún pago.
SELECT c.Nombre, SUM(p.Total)
FROM cliente c
LEFT JOIN pago p
ON c.IdCliente = p.IdCliente
GROUP BY c.Nombre;
-- 2. Devuelve el nombre de los clientes que hayan hecho pedidos en 2008 ordenados alfabéticamente de menor a mayor.
SELECT distinct Nombre
FROM cliente c
INNER JOIN pedido p
ON c.IdCliente = p.IdCliente
WHERE YEAR(p.Fecha) = 2008
ORDER BY Nombre ASC;
-- 3. Devuelve el listado de clientes donde aparezca el nombre del cliente, el nombre y primer apellido de su representante de ventas y la ciudad donde está su oficina.
select c.Nombre,Apellido1,e.Nombre,codigo_oficina from cliente c inner join empleado e on c.IdEmpleado = e.codigo;
-- 4. Devuelve el nombre, apellidos, puesto y teléfono de la oficina de aquellos empleados que no sean representante de ventas de ningún cliente.
SELECT e.Nombre, e.Apellido1, e.Apellido2, e.Puesto, o.Telefono
FROM empleado e
INNER JOIN oficina o
ON e.codigo_oficina = o.IdOficina
WHERE e.codigo NOT IN (SELECT IdEmpleado FROM cliente);
-- 5. Devuelve un listado indicando todas las ciudades donde hay oficinas y el número de empleados que tiene.
SELECT o.Ciudad, COUNT(e.codigo) as numero_empleados
FROM oficina o
LEFT JOIN empleado e
ON o.IdOficina = e.codigo_oficina
GROUP BY o.Ciudad;