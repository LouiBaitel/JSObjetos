const cliente = {
    nome: 'André',
    idade: 36,
    cpf: '11155577798',
    email: 'andre@gmail.com'
}

const chaves = ['nome', 'idade', 'cpf', 'email'];
console.log(`Acessando uma chave por um array: ${cliente[chaves[0]]}`);

//Exibindo todos os elementos de um objeto atravez do foreach
chaves.forEach(info => console.log(cliente[info]));

//Acessando uma chave através de string
console.log(cliente['nome']);