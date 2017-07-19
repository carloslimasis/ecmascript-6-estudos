var alunos = [
    {nome:'joao'},
    {nome:'jose'},
    {nome:'maria'},
];

var aluno;
for(var i = 0; i < alunos.length; i++) {
    if(alunos[i].nome === 'jose') {
        aluno = alunos[i];
        break;
    }
}

console.log(aluno);
