const cliente = {
    nome: 'André',
    idade: 36,
    cpf: '11155577798',
    email: 'andre@gmail.com'
}
console.log(`Telefone (não criado): ${cliente.fone}`);

//adicionando um novo campo ao objeto
cliente.fone = '41999995574';
console.log(`\nTelefone (novo): ${cliente.fone}`);

//Alterando um campo do objeto
cliente.fone = '81999995574';
console.log(`\nTelefone (atualizado): ${cliente.fone}`);
