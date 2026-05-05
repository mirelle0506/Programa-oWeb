const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// gera número aleatório de 1 a 100
const numero = Math.floor(Math.random() * 100) + 1;

function jogar() {
  rl.question('Adivinhe o número (1 a 100): ', (resposta) => {
    const palpite = Number(resposta);

    if (palpite === numero) {
      console.log('Acertou!');
      rl.close();
    } else if (palpite < numero) {
      console.log('O número é MAIOR');
      jogar();
    } else {
      console.log('O número é MENOR');
      jogar();
    }
  });
}

jogar();