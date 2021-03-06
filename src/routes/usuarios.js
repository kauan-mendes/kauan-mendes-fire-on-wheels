var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.get("/puxarMoto", function (req, res) {
    usuarioController.puxarMoto(req, res);
});

router.get("/puxarVelocidade", function (req, res) {
    usuarioController.puxarVelocidade(req, res);
});

router.post("/enviarFoto", function (req, res) {
    usuarioController.enviarFoto(req, res);
});

router.post("/enviarFoto", function (req, res) {
    usuarioController.enviarFoto(req, res);
});

router.get("/buscarFoto", function (req, res) {
    usuarioController.buscarFoto(req, res);
});



module.exports = router;