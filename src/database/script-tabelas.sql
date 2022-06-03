CREATE DATABASE fireonwheels;

USE fireonwheels;

CREATE TABLE moto(
idMoto INT PRIMARY KEY AUTO_INCREMENT,
nomeMoto VARCHAR(255)
);

insert into moto values
(null,'BMW R 1200'),
(null,'Kawasaki Z750'),
(null,'Yamaha MT-07'),
(null,'Yamaha XJ6'),
(null,'Harley Davidson'),
(null,'Suzuki burgman'),
(null,'BMW F 800'),
(null,'XVS Midnight start'),
(null,'Triumph bonneville'),
(null,'Kawasaki Ninja H2R');


CREATE TABLE usuario(
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nomeUsuario VARCHAR(255),
cepUsuario BIGINT,
cidadeUsuario VARCHAR(255),
bairroUsuario VARCHAR(255),
emailUsuario VARCHAR(255),
senhaUsuario VARCHAR(255),
fk_moto INT,
FOREIGN KEY(fk_moto)REFERENCES moto (idMoto)
);

CREATE TABLE passeio(
id INT PRIMARY KEY AUTO_INCREMENT,
titulo VARCHAR(60),
descricao VARCHAR(250),
fk_usuarioHost INT,
FOREIGN KEY(fk_usuarioHost)REFERENCES usuario(idUsuario)
);


SELECT usuario.*, moto.nomeMoto FROM usuario 
JOIN moto ON moto.idMoto = usuario.fk_moto;



SELECT 
            a.id AS id_Passeio,
            a.titulo,
            a.descricao,
            a.fk_usuarioHost,
            u.idUsuario,
            u.nomeUsuario,
            u.emailUsuario,
            u.senhaUsuario
        FROM passeio as a
            INNER JOIN usuario as u
                ON a.fk_usuarioHost = u.idUsuario;