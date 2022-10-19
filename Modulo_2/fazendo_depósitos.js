const cliente = {
    nome: 'André',
    idade: 36,
    cpf: '11155577798',
    email: 'andre@gmail.com',
    fones: ['47988556663', '12955447728'],
    dependentes: [{
        nome: 'Julia',
        parentesco: 'Filha',
        dataNasc: '02/14/2011'},
        {
        nome: 'Catarina Antunes',
        parentesco: 'Filha', 
        dataNasc: '08/04/2015'
        }
    ],
    saldo:100,
    depositar:function (valor){
        this.saldo = this.saldo + valor
    }
}

console.log(`Saldo: ${cliente.saldo}`);

//fazndo o deposito
cliente.depositar(30);
console.log(`Saldo atualizado: ${cliente.saldo}`);
