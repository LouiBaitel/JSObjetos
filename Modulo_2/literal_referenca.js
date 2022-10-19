/* Um objeto literal é um objeto criado com a notação literal, ou seja: uma lista de chave e valores dentro de chaves { },
que atribuímos a uma variável para que o valor possa ser acessado depois. 
*/
const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
}

const BobjPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
}
/*
A variável objPersonagem2 não fez uma cópia do objeto original, apenas serviu como referência para o objeto original objPersonagem. 
Assim, qualquer alteração em qualquer um dos objetos altera ambos. 
*/
const objPersonagem2 = objPersonagem
objPersonagem2.nome = "Gandalf, o Cinzento"

console.log(objPersonagem.nome) //Gandalf, o Cinzento
console.log(objPersonagem2.nome) //Gandalf, o Cinzento
console.log('');
/*
Método create: 
*/

const BobjPersonagem2 = Object.create(objPersonagem)
BobjPersonagem2.nome = "Gandalf, o Cinzentinho"

console.log(BobjPersonagem.nome) //Gandalf
console.log(BobjPersonagem2.nome) //Gandalf, o Cinzentinho


