const cliente = {
    nome: 'André',
    idade: 36,
    cpf: '11155577798',
    email: 'andre@gmail.com',
    fones: ['47988556663', '12955447728'],
    dependente: [{
        nome: 'Julia',
        parentesco: 'Filha',
        dataNasc: '02/14/2011'
    }]
}

cliente.dependente.push({
    nome: 'Catarina Antunes',
    parentesco: 'Filha', 
    dataNasc: '08/04/2015'
});

console.log(cliente.dependente);

const filhaMaisNova = cliente.dependente.filter(dependente => dependente.dataNasc === '08/04/2015')

console.log(filhaMaisNova[0].nome)
