// 1) 
 
// No primeiro comando aparecerá o nome do ator Matheus Nachtergaele pois é o índice 0 na array de elenco.
// No segundo aparecerá o nome da atriz Virginia Cavendish pois ela está em último na lista e foi inserido comando
// para selecionar o último item da array. No terceiro comando aparecerá a transmissão da TV Globo pois ela é o segundo 
// indice da array de transmissões

// 2)

// a) Será exibido o objeto referente ao cachorro, exibindo seu nome, idade e raça. Em seguida, será exibido o objeto 
// referente ao gato, com as mesmas informações de idade e raça, porém, o nome será trocado para Juba. O terceiro console
// exibirá o conjunto da tartaruga com o nome de Jubo, pois tem as mesmas informações do conjunto do gato somente
// trocando as letras A's por letras O's

// b) As reticencias copiam as informações do conjunto que for informado o nome em seguida as mesmas

// 3) 

// a) A função tem como objetivo selecionar um item dentro de um objeto, sendo assim, ao selecionar o objeto pessoa
// e a opção backender aparecerá false, que é o que é descrito para Caio neste objeto

// b) O valor undefinied aparecerá pois não existe a propriedade altura neste objeto e não foi dado comando para criação

// ******************************************************************************************************************

// 1) 
// a)

const usuario = {
    nome: "Jéssica",
    apelidos: ["Jessie", "Jess", "Jessiquinha"]
}

function respostaUsuario (objetoSelecionado) {
    return console.log(`Eu sou ${objetoSelecionado.nome} mas pode me chamar de: ${objetoSelecionado.apelidos[0]}, ${objetoSelecionado.apelidos[1]} ou ${objetoSelecionado.apelidos[2]}`)
}

respostaUsuario(usuario)

// b) 

const novosApelidos = {
    ...usuario,
    apelidos: ["Jezinha", "Jotinha", "Little Jess"]
}

respostaUsuario (novosApelidos)

// 2)

const objetoPrimario = {
    nome: "Leonardo Couto",
    idade: 30,
    profissao: "Estudante",
}

const objetoSecundario = {
    nome: "Jéssica Bernardes",
    idade: 31, 
    profissao: "Youtuber",
}

function funcaoDaAtividade (textoEsperado){
    item1 = textoEsperado.nome
    item2 = textoEsperado.nome.length
    item3 = textoEsperado.idade
    item4 = textoEsperado.profissao
    item5 = textoEsperado.profissao.length
    return [item1, item2, item3, item4, item5]
}
console.log(funcaoDaAtividade(objetoPrimario))
console.log(funcaoDaAtividade(objetoSecundario))

// 3) 
const carrinho = []

const fruta1 = {
    nome: "Banana",
    disponibilidade: true,
}
const fruta2 = {
    nome: "Maçã",
    disponibilidade: true,
}
const fruta3 = {
    nome: "Mamão",
    disponibilidade: true,
}

function listaDeMercado (frutaDesejada){
    primeiraAtribuicao = frutaDesejada.nome
    return carrinho.push(primeiraAtribuicao)
}
    

listaDeMercado(fruta1)
console.log(carrinho)
listaDeMercado(fruta2)
console.log(carrinho)
listaDeMercado(fruta3)
console.log(carrinho)
