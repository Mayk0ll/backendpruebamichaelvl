CREATE TABLE usuarios (
    id_usuario serial PRIMARY KEY,
    documento VARCHAR(255) UNIQUE NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    apellido VARCHAR(255) NOT NULL,
    correo VARCHAR(255) UNIQUE NOT NULL,
    contrasenia VARCHAR(255) NOT NULL
);


CREATE TABLE publicaciones (
    id_publicacion SERIAL,
    descripcion text,
    usuario int,
    CONSTRAINT fkusuario FOREIGN KEY (usuario) REFERENCES usuarios(id_usuario)
);


CREATE TABLE ventas(
    id_venta serial,
    total_venta int,
    vendedor int,
    CONSTRAINT fkusuario FOREIGN KEY (vendedor) REFERENCES usuarios(id_usuario)
);




INSERT INTO usuarios (documento, nombre, apellido, correo, contrasenia) VALUES ('123','michael','vasquez','correo@correo.com','michael132');
INSERT INTO usuarios (documento, nombre, apellido, correo, contrasenia) VALUES ('456','alexis','lopera','correo1@correo.com','asdf');
INSERT INTO usuarios (documento, nombre, apellido, correo, contrasenia) VALUES ('789','carlos','castro','correo2@correo.com','fdsa');
INSERT INTO usuarios (documento, nombre, apellido, correo, contrasenia) VALUES ('159','rosita','ceferino','correo3@correo.com','aaa');
INSERT INTO usuarios (documento, nombre, apellido, correo, contrasenia) VALUES ('753','maria','rodriguez','correo4@correo.com','sss');


INSERT INTO publicaciones (descripcion,usuario) VALUES ('texto 1 y mucho mas sobre esto y publicacion', 1);
INSERT INTO publicaciones (descripcion,usuario) VALUES ('texto 2 y mucho mas sobre esto y publicacion', 6);
INSERT INTO publicaciones (descripcion,usuario) VALUES ('texto 3 y mucho mas sobre esto y publicacion', 7);
INSERT INTO publicaciones (descripcion,usuario) VALUES ('texto 4 y mucho mas sobre esto y publicacion', 8);
INSERT INTO publicaciones (descripcion,usuario) VALUES ('texto 5 y mucho mas sobre esto y publicacion', 9);
INSERT INTO publicaciones (descripcion,usuario) VALUES ('texto 6 y mucho mas sobre esto y publicacion', 1);
INSERT INTO publicaciones (descripcion,usuario) VALUES ('texto 7 y mucho mas sobre esto y publicacion', 6);
INSERT INTO publicaciones (descripcion,usuario) VALUES ('texto 8 y mucho mas sobre esto y publicacion', 1);
INSERT INTO publicaciones (descripcion,usuario) VALUES ('texto 9 y mucho mas sobre esto y publicacion', 1);


INSERT INTO ventas (total_venta,vendedor) VALUES (15, 1);
INSERT INTO ventas (total_venta,vendedor) VALUES (30, 1);
INSERT INTO ventas (total_venta,vendedor) VALUES (34, 1);
INSERT INTO ventas (total_venta,vendedor) VALUES (64, 6);
INSERT INTO ventas (total_venta,vendedor) VALUES (13, 6);
INSERT INTO ventas (total_venta,vendedor) VALUES (76, 6);
INSERT INTO ventas (total_venta,vendedor) VALUES (34, 6);
INSERT INTO ventas (total_venta,vendedor) VALUES (74, 8);
INSERT INTO ventas (total_venta,vendedor) VALUES (34, 8);
INSERT INTO ventas (total_venta,vendedor) VALUES (15, 8);
INSERT INTO ventas (total_venta,vendedor) VALUES (14, 8);
INSERT INTO ventas (total_venta,vendedor) VALUES (42, 7);
INSERT INTO ventas (total_venta,vendedor) VALUES (65, 9);
INSERT INTO ventas (total_venta,vendedor) VALUES (46, 9);



select u.nombre, u.apellido, p.descripcion from usuarios AS u JOIN publicaciones AS p ON u.id_usuario = p.usuario;