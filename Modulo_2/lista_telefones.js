const cliente = {
    nome: 'André',
    idade: 36,
    cpf: '11155577798',
    email: 'andre@gmail.com',
    fones:['47988556663', '12955447728']
}
cliente.fones.forEach( fones => console.log(fones) );