
CREATE DATABASE fireonwheels;

USE fireonwheels;

CREATE TABLE moto(
idMoto INT PRIMARY KEY AUTO_INCREMENT,
nomeMoto VARCHAR(255)
);

INSERT INTO moto VALUES
(NULL,'BMW R 1200'),
(NULL,'Kawasaki Z750'),
(NULL,'Yamaha MT-07'),
(NULL,'Yamaha XJ6'),
(NULL,'Harley Davidson'),
(NULL,'Suzuki burgman'),
(NULL,'BMW F 800'),
(NULL,'XVS Midnight start'),
(NULL,'Triumph bonneville'),
(NULL,'Kawasaki Ninja H2R');

CREATE TABLE velocidade(
idVelocidade INT PRIMARY KEY AUTO_INCREMENT,
nomeVelocidade VARCHAR(255)
);
INSERT INTO velocidade VALUES
(NULL,'Lenta'),
(NULL,'Media'),
(NULL,'Rapida');



CREATE TABLE usuario(
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nomeUsuario VARCHAR(255),
cepUsuario BIGINT,
cidadeUsuario VARCHAR(255),
bairroUsuario VARCHAR(255),
emailUsuario VARCHAR(255),
senhaUsuario VARCHAR(255),
fk_moto INT,
FOREIGN KEY(fk_moto)REFERENCES moto (idMoto),
fk_velocidade INT, 
FOREIGN KEY(fk_velocidade)REFERENCES velocidade (idVelocidade)
);

INSERT INTO usuario VALUES
 (NULL,'Bruno',08532120,'Ferraz','Tanquinho','bruno@gmail.com','bruno123',1,1),
 (NULL,'Kauan',27235173,'Sao Matheus','Tanquinho','kauan@gmail.com','kauan123',1,2),
 (NULL,'Soares',02746127,'Tiradentes','Vl margarida','soares@gmail.com','soares123',2,3),
 (NULL,'Noleto',624123612,'Paulista','Jd tv','noleto@gmail.com','noleto123',3,2),
 (NULL,'Caxixi',02836127,'Osasco','Gianetti','caxixi@gmail.com','caxixi123',4,2),
 (NULL,'Wagner',02738128,'Tatuapé','Jd dourado','wagner@gmail.com','wagner123',1,2);


CREATE TABLE passeio(
id INT PRIMARY KEY AUTO_INCREMENT,
titulo VARCHAR(60),
descricao VARCHAR(250),
fk_usuarioHost INT,
FOREIGN KEY(fk_usuarioHost)REFERENCES usuario(idUsuario)
);

INSERT INTO passeio VALUES
(NULL,'Passeio na paulista','Dia: 24/12/2003 Local:Av paulista',1),
(NULL,'Passeio no centro','Dia: 12/06/2022 Local:Sptech',2),
(NULL,'Passeio na zona leste','Dia: 15/06/2022 Local:Itaquera',3);


SELECT 
usuario.*, moto.nomeMoto 
FROM usuario 
JOIN moto 
ON moto.idMoto = usuario.fk_moto;



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
                
               
            
SELECT 
nomeMoto, COUNT(nomeMoto)
FROM
moto
GROUP BY nomeMoto;

SELECT 
nomeVelocidade, COUNT(nomeVelocidade)
FROM
velocidade
GROUP BY nomeVelocidade;




SELECT 
nomeUsuario, count(id) AS "Passeios" 
FROM passeio
JOIN usuario 
ON idUsuario = fk_usuarioHost 
GROUP BY fk_usuarioHost
ORDER BY COUNT(id) desc;


