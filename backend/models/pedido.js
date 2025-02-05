const mongoose = require("mongoose");

const PedidoSchema = new mongoose.Schema({
    nomeCliente: { type: String, required: true },
    endereco: { type: String, required: true },
    telefone: { type: String, required: true },
    itens: [{ nome: String, quantidade: Number, preco: Number }],
    status: { type: String, default: "Pendente" }, 
}, { timestamps: true });

module.exports = mongoose.model("Pedido", PedidoSchema);
