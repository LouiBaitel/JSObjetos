const cliente = {
    nome: 'André',
    idade: 36,
    cpf: '11155577798',
    email: 'andre@gmail.com'
}

console.log(`Cliente: ${cliente.nome} \nIdade: ${cliente.idade} \nCPF: ${cliente.cpf} \nE-mail: ${cliente.email}`);
console.log(`Somente os três primeiros digitos do cpf: ${cliente.cpf.substring(0,3)}`);