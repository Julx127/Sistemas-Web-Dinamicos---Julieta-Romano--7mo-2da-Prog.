use ejemplo;
select * from productos;
select * from productos where nombre='Caramelo';
select * from productos where left(nombre, 1)='A';
select nombre, precio from productos where precio>3000;
select * from productos where substring(nombre, 1, 5)='Silla';
update productos
set categoria='Comida'
where idProductos in (1, 2, 3, 4, 5, 6, 9);
update productos
set categoria='Higiene'
where idProductos in (7, 8);
update productos
set categoria='Muebles'
where idProductos=10;
select * from productos;
select distinct categoria from productos;
select count(*) from productos where categoria='Comida';
select count(*) from productos where categoria='Higiene';
select count(*) from productos where categoria='Muebles';