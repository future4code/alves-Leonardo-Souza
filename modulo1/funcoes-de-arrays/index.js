// 1) a) Serão impressos três linhas no console com o item sendo o nome e apelido completo das pessoas. Após cada nome
// aparecerá na linha o indice que o item está na array e por fim, nos três, aparecerá a array que vieram.

// 2) a) Serão impressos apenas os nomes das pessoas, pois foi solicitado que selecione cada objeto na array e informe
// apenas a propriedade nome.

// 3) Esta função filtra todos os apelidos da array e tem como retorno todos aqueles que não forem Chijo, ou seja, todos
// objetos que tiverem apelido diferente de Chijo aparecerão no console.

// ********************************************************************************************************************

// 1) Dado o seguinte array de cachorrinhos que são clientes de um pet shop, 
// realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

// a) Crie um novo array que contenha apenas o nome dos doguinhos

 let nomesPets = pets.map((doguinho)=>{
    return console.log(doguinho.nome)
 })

 nomesPets(pets)

// b) Crie um novo array apenas com os cachorros salsicha

const arrayDeSalsichas = []

let racaEspecifica = pets.filter((doguinho)=>{
    if (doguinho.raca.toLowerCase() == "salsicha"){
        return arrayDeSalsichas.push(doguinho)
    }
})

console.log(arrayDeSalsichas)

// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles.
// A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"

let arrayDePoodles = []

let promocaoPoodle = pets.filter((doguinho) => {
    if (doguinho.raca.toLowerCase() == "poodle"){
        let nomeDoPoodle = doguinho.nome 
            return console.log (`Você ganhou um cupom de desconto de 10% para tosar o(a) ${nomeDoPoodle}`)}
            
        })
   
// 2) Dado o seguinte array de produtos, realize as operações pedidas 
//    nos itens abaixo utilizando as funções de array map e filter:

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 // a) Crie um novo array que contenha apenas o nome de cada item

 let arrayDeNomeProdutos = []

 let nomesDaLista = produtos.map((itemDaLista) => {
    return (itemDaLista.nome)
 })
arrayDeNomeProdutos.push(nomesDaLista)
console.log(arrayDeNomeProdutos)

// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

let arrayDescontos = []

let produtosDesconto = produtos.map((itemDaLista) => {
    let novosProdutos = {
        nome: itemDaLista.nome,
        preco: itemDaLista.preco * 0.95       
    }
    return arrayDescontos.push(novosProdutos)
})
// console.log(arrayDescontos)

// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

let arrayDeBebidas = []

let bebidasNoArray = produtos.map((itemDaLista) => {
    if (itemDaLista.categoria == "Bebidas"){
        return arrayDeBebidas.push(itemDaLista)
    }
})
console.log(arrayDeBebidas)

// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

let arrayDaYpe = []

let procuraDosYpes = produtos.filter((itemDaLista) => {
    if (itemDaLista.nome.includes("Ypê")){
        return arrayDaYpe.push(itemDaLista)
    }
})

console.log(arrayDaYpe)

// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". 
// Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

let arrayYpeComPreco = []

let nomePrecoDosYpes = produtos.map((itemDaLista) => {
    if (itemDaLista.nome.includes("Ypê"))
    return arrayYpeComPreco.push(`Compre ${itemDaLista.nome} por ${itemDaLista.preco}`)    
})
console.log(arrayYpeComPreco)