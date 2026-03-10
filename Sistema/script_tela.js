var area = document.getElementById('area');
var formEntrada = document.getElementById('formEntrada');
var nomeInput = document.getElementById('nomeInput');
var botoesExtras = document.getElementById('botoesExtras');
// Evento de submit do formulário
formEntrada.addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o recarregamento da página
  
    var nome = nomeInput.value.trim(); // Pega o valor do input e remove espaços extras
    
    if (nome === '') {
        alert("Ops, algo deu errado! Digite um nome válido.");
        area.innerHTML = "Clique no botão para acessar...";
    } else {
        // Limpa o input
        nomeInput.value = '';
        // Esconde o formulário
        formEntrada.classList.add('oculto');
        botoesExtras.classList.remove('oculto');
        // Atualiza a área com a mensagem de boas-vindas e botão sair
        area.innerHTML = "Bem-vindo, " + nome + "! ";
        // Cria um botão "Sair da conta"
        let botaoSair = document.createElement("button");
        botaoSair.innerText = "Sair da conta";
        botaoSair.classList.add('btn-sair');
        botaoSair.onclick = sair;
        area.appendChild(botaoSair);
    }
});

function sair() {
    alert("Até mais!");
    area.innerHTML = "Você saiu!";
    // Mostra o formulário novamente
    formEntrada.classList.remove('oculto');
    botoesExtras.classList.add('oculto');
}

function mostrarFormulario() {
    area.innerHTML = "Clique no botão para acessar...";
    formEntrada.classList.remove('oculto');
    botoesExtras.classList.add('oculto');
}
