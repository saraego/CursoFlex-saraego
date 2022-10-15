


class Aluno {
    notas;
    nome;
    matricula
    media
    constructor(nome,matricula,notas){
        this.nome = nome
        this.matricula = matricula
        this.notas = notas
    }
}

const aluno1 = new Aluno("Saraego",123,[8,8,10])
aluno1.media = calcularMedia(aluno1.notas)


const aluno2 = new Aluno("Iza",321,[10,9,9])
aluno2.media = calcularMedia(aluno2.notas)

if(aluno1.media > aluno2.media){
    console.log(aluno1.nome + " teve maior media");
}else{
    console.log(aluno2.nome + " teve maior media");
}



console.log(aluno1);
console.log(aluno2);


function calcularMedia (notas){
    let soma = 0 
    notas.forEach(nota => {
        soma = nota + soma
    });
    return soma / notas.length
}