function adicionarTarefa() {
  const input = document.getElementById('tarefa');
  const texto = input.value.trim();

  if (texto === '') {
    return;
  }

  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = texto;

  span.onclick = function () {
    span.classList.toggle('concluida');
  };

  const botao = document.createElement('button');
  botao.textContent = 'Remover';

  botao.onclick = function () {
    li.remove();
  };

  li.appendChild(span);
  li.appendChild(botao);

  document.getElementById('lista').appendChild(li);

  input.value = '';
}
