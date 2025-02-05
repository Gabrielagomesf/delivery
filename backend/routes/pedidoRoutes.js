const express = require("express");
const { criarPedido, listarPedidos } = require("../controllers/pedidoController");

const router = express.Router();

router.post("/pedidos", criarPedido);
router.get("/pedidos", listarPedidos);

module.exports = router;
