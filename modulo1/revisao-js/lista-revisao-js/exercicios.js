// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03

function retornaArrayOrdenado(array) {
    function compararNumeros (a, b){
        return a - b
    }
    return array.sort(compararNumeros) 
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let arrayDePares = []
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0)
        arrayDePares.push(array[i])
    }       return arrayDePares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
 let arrayDeParesElevados = []
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0)
        arrayDeParesElevados.push(array[i] ** 2)
    }       return arrayDeParesElevados
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumeroDoExercicio = -Infinity    
    let i = 0
        while (array[i] < array.length){
            if (array[i] > maiorNumeroDoExercicio)
            maiorNumeroDoExercicio = array[i]
            i++
        }       return array[i]
}

// EXERCÍCIO 07
let objetoDoExercicio = {
    maiorNumero:"",
    maiorDivisivelPorMenor:"",
    diferenca:"",
}

function retornaObjetoEntreDoisNumeros(num1, num2) {
    if (num1 > num2){
         objetoDoExercicio = {
        maiorNumero: num1,
        maiorDivisivelPorMenor: num1 % num2 === 0,
        diferenca: num1 - num2
    }}
        else {
            objetoDoExercicio = {
            maiorNumero: num2,
            maiorDivisivelPorMenor: num2 % num1 === 0,
            diferenca: num2 - num1
        }

    }           return objetoDoExercicio
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA == ladoB == ladoC){
        return "Equilátero"
    }   else if (ladoA == ladoB || ladoB == ladoC) {
        return "Isósceles"
    }   else {
        return "Escaleno"
    }
    }


// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}