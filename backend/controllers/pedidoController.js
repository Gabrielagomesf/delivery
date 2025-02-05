const Pedido = require("../models/Pedido");

// Criar um novo pedido
exports.criarPedido = async (req, res) => {
    try {
        const novoPedido = new Pedido(req.body);
        await novoPedido.save();
        res.status(201).json({ message: "Pedido criado!", pedido: novoPedido });
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar pedido" });
    }
};

// Listar todos os pedidos
exports.listarPedidos = async (req, res) => {
    try {
        const pedidos = await Pedido.find();
        res.json(pedidos);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar pedidos" });
    }
};
