let vendas = [];
let id = 1;

function cadastrar() {
    const nome = document.getElementById('nome').value;
    const valor = parseFloat(document.getElementById('valor').value);

    if (nome === '' || isNaN(valor)) {
        alert('Preencha os campos corretamente!');
        return;
    }

    let desconto = valor * 0.1;
    let valorFinal = valor - desconto;
    let data = new Date().toLocaleString();

    vendas.push({
        id: id,
        nome: nome,
        valor: valor,
        desconto: desconto,
        final: valorFinal,
        data: data
    });

    id++;

    document.getElementById('nome').value = '';
    document.getElementById('valor').value = '';

    atualizarTabela();
}

function atualizarTabela() {
    const tabela = document.getElementById('tabela');
    tabela.innerHTML = '';

    if (vendas.length === 0) {
        tabela.innerHTML = '<tr><td colspan="7">Nenhuma venda cadastrada</td></tr>';
        return;
    }

    for (let i = 0; i < vendas.length; i++) {
        const v = vendas[i];

        tabela.innerHTML += `
            <tr>
                <td>${v.id}</td>
                <td>${v.nome}</td>
                <td>R$ ${v.valor.toFixed(2)}</td>
                <td>R$ ${v.desconto.toFixed(2)}</td>
                <td>R$ ${v.final.toFixed(2)}</td>
                <td>${v.data}</td>
                <td><button onclick="remover(${i})">Remover</button></td>
            </tr>
        `;
    }
}

function remover(index) {
    vendas.splice(index, 1);
    atualizarTabela();
}