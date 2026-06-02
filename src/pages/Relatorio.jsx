function Relatorio() {
    const alunos = [
      { id: 1, nome: "Maria", cursoId: 1 },
      { id: 2, nome: "João", cursoId: 2 },
    ];
  
    const cursos = [
      { id: 1, nome: "React" },
      { id: 2, nome: "Programação Web" },
    ];
  
    return (
      <div>
        <h1>Relatório de Alunos e Cursos</h1>
  
        {alunos.map((aluno) => {
          const curso = cursos.find((curso) => curso.id === aluno.cursoId);
  
          return (
            <div key={aluno.id}>
              <p><strong>Aluno:</strong> {aluno.nome}</p>
              <p><strong>Curso:</strong> {curso.nome}</p>
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
  
  export default Relatorio;