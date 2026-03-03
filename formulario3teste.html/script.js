document.getElementById('vendaForm').addEventListener('submit', function(event)
{

event.preventDefault(); // Impede o envio do formulário
// Obtém o valor do número digitado

const valorTotal = parseFloat(document.getElementById('valorTotal').value);
const valorparcela = parseInt(document.getElementById('parcelas').value);
const valorjuros = parseFloat(document.getElementById('juros').value);
// Chama a função para calcular o quadrado

valorParcela = calcularParcela(valorTotal, parcelas, juros);
valorTotalPago = valorParcela()
const resultado = calcularQuadrado(numero);
// Exibe o resultado na página

document.getElementById('resultado').textContent = resultado;
});

function calcularQuadrado(numero) {
return numero * numero;
}
