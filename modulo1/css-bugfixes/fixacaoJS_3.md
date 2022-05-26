function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
 let conceitoA = "A"
 let conceitoB = "B"
 let conceitoC = "C"
 let conceitoD = "D"
     let notaFinal = ex + (p1 * 2) + (p2 * 3) / 6
  if (notaFinal >= 9){
    return conceitoA
  } else if (notaFinal >= 7.5 && notaFinal < 9){
    return  conceitoB
  } else if(notaFinal < 7.5 && notaFinal >= 6){
    return conceitoC
  } else if (notaFinal < 6){ 
    return conceitoD
  } return notaFinal
}