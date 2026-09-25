const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function exibeNomeENota (aluno){
    if(lista[0].includes(aluno)){
        const indexAluno = lista[0].indexOf(aluno);
        const mediaAluno =  lista[1][indexAluno];
        console.log(aluno + " tem a média " + mediaAluno)
    } else {
        console.log("Estudante não existe na lista");
    }
}
exibeNomeENota("João");
exibeNomeENota("Janilson")