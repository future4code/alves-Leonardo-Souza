/* 1)

a) Será impresso na primeira linha o número 10  e na segunda linha o número 50 pois o comando da função é acessar 
a variavel e multiplica-la por 5 e, em seguida, retornar o valor ja calculado

b) Se fossem retirados os comandos de console.log o que mudaria seria apenas a visualização no console pois a função
permaneceria sendo feita, entretanto, não seria mostrado nada */

/* 2)

a) Essa função serve para captar uma frase inserida para o usuario, e diminuir todas as letras utilizando toLowerCase e 
em seguida pergunta se a palavra cenoura está na frase. Por tratar-se de booleana, quando tiver a palavra cenoura vira 
true e quando nao tiver vira false

b) i - true
   ii - true
   iii - false   */

// 1)

   // a)
 
let nomeUser = "Leonardo"
 let idadeUser = 30
 let cidadeUser = "Niterói"

function exercicio1() {
    
    return console.log("Eu sou", nomeUser, "tenho", idadeUser, " anos de idade, moro em", cidadeUser, "e sou estudante" )

}

exercicio1()

   // b)

let pergunta1 = prompt ("Digite seu nome")
let pergunta2 = prompt ("Digite sua idade")
let pergunta3 = prompt ("Digite sua cidade")
let pergunta4 = prompt ("Digite sua profissão")

function exercicio2() {
 return console.log("Eu sou", pergunta1, "tenho", pergunta2, "anos, moro em", pergunta3, "e sou", pergunta4)

}

exercicio2()

// 2)

   // a)

function exercicio3 (n1, n2) {
    return console.log(n1 + n2)
}

exercicio3 (12, 23)

   // b)

function exercicio4 (n1, n2) {
    return console.log(n1 >= n2)
}

exercicio4(34, 8)

   // c)

function exercicio5 (n1) {
    let resultado = n1 % 2
    return console.log(resultado === 2 % 2)
}

exercicio5 (3)

   //    d)   
   
function exercicio6 (mensagemDigitada) {
   let mensagemDigitada1 = mensagemDigitada.length
   let mensagemDigitada2 = mensagemDigitada.toUpperCase()
   console.log(`${mensagemDigitada1}  ${mensagemDigitada2}`)
}

exercicio6("Um texto para testar o teste")

// 3) 

let n1 = 30
let n2 = 3
let numeros = (n1, n2)

function soma (numeros) {
    let resultadoSoma = n1 + n2
    return console.log(resultadoSoma)
}

function sub (numeros) {
    let resultadoSub = n1 - n2
    return console.log(resultadoSub)
}

function multi(numeros) {
    let resultadoMulti = n1 * n2
    return console.log(resultadoMulti)
}

function divisao(numeros) {
    let resultadoDivisao = n1 / n2
    return console.log(resultadoDivisao)
}

soma(numeros)
sub(numeros)
multi(numeros)
divisao(numeros)



