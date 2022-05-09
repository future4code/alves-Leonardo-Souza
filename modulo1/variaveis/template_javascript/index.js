/* 1) Foram propostas duas variaveis mutaveis de nome a e b com valores semelhantes (10)
e em seguida foi solicitado ao console que fosse mostrado apenas a variavel b (10).
Em seguida, a variavel b teve seu valor alterado para 5 e foi solicitado ao console
 que exibisse as duas variaveis ao mesmo tempo,pois estavam separadas por virgulas, e o resultado
 mostrado foi (10 5)
*/

/* 2) Foram informadas duas variaveis mutaveis a (10) e b (20), em seguida foi acrescentada uma nova var
*/

/* 3) A primeira variavel pode ser chamada de let horasTrabalhadasDiariamente e a segunda variavel pode ser
chamada de let valorRecebidoDiariamente */

// 1)
let nome = ""
console.log(typeof nome)
let idade = ""
console.log(typeof idade)

/*  Ambos aparecem como strings pois estão entre aspas vazias.*/

nome = prompt("Qual seu nome?")
console.log(nome)
idade = prompt("Qual sua idade?")
console.log(idade) 


/* Após colocar os valores, automaticamente aparece na tela um prompt solicitando a informação e, em seguida,
já aparece na tela o valor informado na caixa de resposta */

console.log("Olá", nome, "você tem", idade, "anos")

// 2)

const perguntaRoupaAzul = "Você está usando uma roupa azul?"
const perguntaFutebol = "Você gosta de futebol?"
const perguntaDirecao = "Você sabe dirigir?"
let RoupaAzul = prompt (perguntaRoupaAzul)
let gostarFutebol = prompt (perguntaFutebol)
let saberDirigir = prompt (perguntaDirecao)
console.log(perguntaRoupaAzul , RoupaAzul)
console.log(perguntaFutebol, gostarFutebol)
console.log(perguntaDirecao, saberDirigir)

// 3)

let a = 10
let b = 25
let c = 5
a = a + c + c + c
b = b - c - c - c  
console.log(a, b)






















