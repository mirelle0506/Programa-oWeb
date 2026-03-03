document.getElementById('numeroForm').addEventListener('submit', function(event)
{

    event.preventDefault(); // Impede o envio do formulário
    // Obtém o valor do número digitado

    const numero = parseFloat(document.getElementById('numero').value);
    const operacao = document.getElementById('operacao').value;
    // Chama a função para calcular o quadrado

    let resultado;
    if(operacao === "quadrado") {
        resultado = calcularQuadrado(numero);
    } else if (operacao == "cubo") {
        resultado = calcularCubo(numero);
    }
    document.getElementById('resultado').textContent = resultado;
});

    function calcularQuadrado(numero) {
        return numero * numero;
    }
    function calcularCubo(numero) {
        return numero * numero * numero;
    }
