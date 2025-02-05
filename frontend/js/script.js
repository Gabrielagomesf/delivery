const API_URL = "https://delivery-fi27xvx7a-gabrielas-projects-ea0e0301.vercel.app/api/pedidos";

document.getElementById("pedido-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const pedido = {
        nomeCliente: document.getElementById("nome").value,
        endereco: document.getElementById("endereco").value,
        telefone: document.getElementById("telefone").value,
        itens: [{ nome: "Pizza", quantidade: 1, preco: 30 }]
    };

    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pedido),
    });

    if (response.ok) {
        alert("Pedido enviado com sucesso !");
        carregarPedidos();
    }
});

async function carregarPedidos() {
    const response = await fetch(API_URL);
    const pedidos = await response.json();

    const listaPedidos = document.getElementById("lista-pedidos");
    listaPedidos.innerHTML = pedidos.map(p => `<li>${p.nomeCliente} - ${p.status}</li>`).join("");
}

carregarPedidos();
