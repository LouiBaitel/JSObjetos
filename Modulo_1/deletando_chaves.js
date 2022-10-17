const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
}
console.log(`Personagem aliado: \n Nome: ${objPersonagem.aliado.nome} \n Classe: ${objPersonagem.aliado.classe} \n Status: ${objPersonagem.status}`);

delete objPersonagem.aliado;
delete objPersonagem["status"];

console.log(`\nPersonagem aliado pós delete: ${objPersonagem.aliado} \nStatus: ${objPersonagem.status}`); //undefined