CREATE TABLE moto(
idMoto INT PRIMARY KEY AUTO_INCREMENT,
nomeMoto VARCHAR(255)
);

insert into moto values
(null,'BMW R 1200'),
(null,'Kawasaki Z750'),
(null,'Yamaha MT-07'),
(null,'Yamaha XJ6'),
(null,'Honda CB 500F');


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
idPasseio INT PRIMARY KEY AUTO_INCREMENT,
dthora DATETIME,
localPasseio VARCHAR(255),
Descricao VARCHAR(1000),
fk_usuarioHost INT,
FOREIGN KEY(fk_usuarioHost)REFERENCES usuario(idUsuario)
);

SELECT usuario.*, moto.nomeMoto FROM usuario 
JOIN moto ON moto.idMoto = usuario.fk_moto;




