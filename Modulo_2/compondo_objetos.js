const cliente = {
    nome: 'André',
    idade: 36,
    cpf: '11155577798',
    email: 'andre@gmail.com',
    fones: ['47988556663', '12955447728']
}

cliente.dependente = {
    nome: 'Julia',
    parentesco: 'Filha',
    dataNasc: '02/14/2011'
}

console.log(cliente.dependente);

cliente.dependente.nome = 'Julia Antunes';

console.log(cliente.dependente);