// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
let perguntaAltura = prompt("Digite a altura de um retângulo!")
let perguntaLargura = prompt("Digite a largura de um retângulo!")
let resultadoArea = Number(perguntaAltura) * Number(perguntaLargura)
return console.log(resultadoArea)
}


// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
const perguntaAnoAtual = prompt("Digite o ano atual!")
const perguntaAnoNascimento = prompt("Digite seu ano de nascimento!")
const respostaIdadeUsuario = Number(perguntaAnoAtual) - Number(perguntaAnoNascimento)
return console.log(respostaIdadeUsuario)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
const calculoImc = peso / (altura * altura)
return calculoImc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
const nomeUsuario = prompt ("Digite seu nome!")
const idadeUsuario = prompt ("Digite sua idade!")
const emailUsuario = prompt ("Digite seu email!")
return console.log(`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const primeiraCorFavorita = prompt ("Digite sua cor favorita")
  const segundaCorFavorita = prompt ("Digite sua seguda cor favorita")
  const terceiraCorFavorita = prompt("Digite sua terceira cor favorita")
  const arrayDasCores = [primeiraCorFavorita, segundaCorFavorita, terceiraCorFavorita]
  return console.log(arrayDasCores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
const espetaculoSemPrejuizo = custo / valorIngresso
return espetaculoSemPrejuizo
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
const string1Length = string1.length 
const string2Lenght = string2.length
  let checagemDasStrings = string1 !== string2 && string1Length == string2Lenght
return checagemDasStrings
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
return array.pop()
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
const primeiroItem = array.shift()
const ultimoItem = array.pop()
array.push(primeiroItem)
array.unshift(ultimoItem)
return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const string1Alta = string1.toUpperCase()
  const string2Alta = string2.toUpperCase()
    
  return string1Alta === string2Alta
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}