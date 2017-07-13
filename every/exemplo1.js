const alunos = [
    {nome: 'joao', idade: 18},
    {nome: 'maria', idade: 20},
    {nome: 'jose', idade: 24}
];

let todosAlunosDeMaior = true;

for(let i = 0; i < alunos.length; i++) {
    if(alunos[i].idade < 18) {
        todosAlunosDeMaior = false;
        break;
    }
}

console.log(todosAlunosDeMaior); // true
