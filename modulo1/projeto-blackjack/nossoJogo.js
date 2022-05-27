/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

//************************************************************************************************************* */

console.log ("Boas vindas ao jogo de Blackjack")

const carta = comprarCarta()

let carta1 = comprarCarta()
let carta2 = comprarCarta()
let carta3 = comprarCarta()
let carta4 = comprarCarta()
let soma1 = Number (carta1.valor) + Number (carta2.valor)
let soma2 = Number (carta3.valor) + Number (carta4.valor)


if (confirm("Quer iniciar uma nova rodada?")){
   console.log(`Usuário - cartas:${carta1.texto} e ${carta2.texto} - pontuação ${soma1} `)
   console.log(`Computador - cartas:${carta2.texto} e ${carta3.texto} - pontuação ${soma2}`)
}   else console.log("O jogo acabou")

if (soma1 === soma2){
   console.log("Empate")
} else if (soma1 < soma2){
   console.log("O Computador venceu")
} else {
   (console.log("O usuario venceu"))
}

