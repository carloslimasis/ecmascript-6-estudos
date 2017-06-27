var nomes = ['maria', 'josé', 'joão'];
for(var i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

nomes.forEach(function(nome) {
    console.log(nome);
});

function imprimeNome(nome) {
    console.log(nome);
}

nomes.forEach(imprimeNome);
