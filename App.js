import { useState } from 'react';
import './App.css';

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [texto, setTexto] = useState('');

  function adicionarTarefa() {
    if (texto.trim() === '') return;

    setTarefas([...tarefas, { texto, concluida: false }]);
    setTexto('');
  }

  function concluir(index) {
    const novaLista = [...tarefas];
    novaLista[index].concluida = !novaLista[index].concluida;
    setTarefas(novaLista);
  }

  function remover(index) {
    const novaLista = tarefas.filter((_, i) => i !== index);
    setTarefas(novaLista);
  }

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>

      <input
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Digite uma tarefa"
      />
      <button onClick={adicionarTarefa}>Adicionar</button>

      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>
            <span
              onClick={() => concluir(index)}
              style={{
                textDecoration: tarefa.concluida ? 'line-through' : 'none',
                cursor: 'pointer'
              }}
            >
              {tarefa.texto}
            </span>

            <button onClick={() => remover(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;