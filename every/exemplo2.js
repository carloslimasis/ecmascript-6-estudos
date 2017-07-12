const alunos = [
    {nome: 'joao', idade: 18},
    {nome: 'maria', idade: 20},
    {nome: 'jose', idade: 24}
];

const todosAlunosDeMaior = alunos.every(aluno => aluno.idade >= 18);

console.log(todosAlunosDeMaior); // true