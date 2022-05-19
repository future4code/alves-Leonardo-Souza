// 1) a) Este código faz um teste para saber se o numero é par ou não. Um numero se dividido com sinal
// de resto de divisão por dois for par, seu resultado será 0 e, portanto é === a 0. Caso contrário, o numero
// selecionado for um número impar, a divisão terá um resto e será diferente de 0

// b) Pares

// c) Impares

// 2) a) O codigo serve para que o usuario selecione uma fruta e seja exibido o valor da mesma para ele.

// b) Será exibido o valor da maçã que é 2.25, ou seja, será exibido "O preço da maçã é R$ 2.25"

// c) Caso o break seja retirado, será exibido o valor default pois considera-se que não existe o case Pera.
// Todo case deve ter o break no final

// 3) a) A primeira linha cria um prompt solicitando que seja inserido um numero e antes do prompt ja 
// consta o comando de Number para que o resultado não seja uma string e sim um numero

// b) Caso digite 10, a mensagem exibida será "Esse numero passou no teste"' pois 10 é maior que 0. Caso digite
// - 10 não aparecerá nada pois não há informação para ser exibida caso a resposta não seja true

// c) Haverá erro exatamente pela variavel mensagem estar apenas no escopo do If e, portanto, não pode ser exibida no
// escopo global

// ****************************************************************************************************************************

// 1) 

let perguntaIdadeUsuario = Number ( prompt ("Digite sua idade"))

if (perguntaIdadeUsuario > 18) {
    console.log ("Você pode dirigir")
}
    else { 
        console.log("Você não pode dirigir")

}

// 2) 

let perguntaTurnoEstudante = prompt ("Digite a primeira letra do seu turno?")

function respostaAutomaticaTurno () {
    
    if (perguntaTurnoEstudante === "M"){
    console.log ("Bom dia!")}
    if (perguntaTurnoEstudante === "V"){
        console.log("Boa tarde!")
    }
    if (perguntaTurnoEstudante === "N"){
        console.log("Boa noite!")
    }
}

respostaAutomaticaTurno(perguntaTurnoEstudante)

// 3) 

let perguntaTurnoEstudante = prompt ("Digite a primeira letra do seu turno?").toLowerCase()
console.log(perguntaTurnoEstudante)

function respostaTurnoUsuario (variavelDaPergunta) {
switch (variavelDaPergunta){
        case "m":
        console.log ("Bom dia!")
        break
        case  "v":
        console.log("Boa tarde!")
        break
        case "n":
        console.log("Boa noite!")
        break
    default:
        console.log("Turno não encontrado")
    }
}

respostaTurnoUsuario(perguntaTurnoEstudante)