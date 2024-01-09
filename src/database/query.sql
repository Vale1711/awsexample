use restApi;
CREATE TABLE datos (
    id INT PRIMARY KEY,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    numero INT
);
show databases;
use restApi;
insert into datos values (5, 'Valeria', 'Flores', 12345);
show table datos;
select*from datos;
