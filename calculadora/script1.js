// Arrow functions para cada operação
const calcularQuadrado = (n) => n * n;
const calcularCubo = (n) => n * n * n;
const calcularRaiz = (n) => Math.sqrt(n);

// Evento submit do formulário
document.getElementById('numeroForm').addEventListener('submit', (event) => {
  event.preventDefault(); // impede envio do formulário

  const numero = parseFloat(document.getElementById('numero').value);
  const operacao = document.getElementById('operacao').value;

  let resultado;
  let textoOperacao;

  if (operacao === 'quadrado') {
    resultado = calcularQuadrado(numero);
    textoOperacao = 'Quadrado';
  } else if (operacao === 'cubo') {
    resultado = calcularCubo(numero);
    textoOperacao = 'Cubo';
  } else {
    resultado = calcularRaiz(numero);
    textoOperacao = 'Raiz Quadrada';
  }

  // Cria item da lista e adiciona
  const li = document.createElement('li');
  li.textContent = `${textoOperacao} de ${numero} = ${resultado}`;
  li.classList.add('list-group-item');

  document.getElementById('listaResultados').appendChild(li);
});