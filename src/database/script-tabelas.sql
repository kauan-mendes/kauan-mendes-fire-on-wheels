CREATE DATABASE fireonwheels;

USE fireonwheels;

CREATE TABLE usuario(
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
cepUsuario BIGINT,
cidadeUsuario VARCHAR(255),
bairroUsuario VARCHAR(255),
emailUsuario VARCHAR(255),
senhaUsuario VARCHAR(255),
motoUsuario VARCHAR(255)

);