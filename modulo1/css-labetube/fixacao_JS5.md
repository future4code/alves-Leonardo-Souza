''' function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]
  let nomesDosAnimais = animais.filter((nomesAnimais)=>{
    return nomesAnimais.nome
  })
  let arrayDosAnimais = animais.map((nomes)=>{
    return nomes.nome
  })
 // Escreva seu código aqui
    return arrayDosAnimais
} '''