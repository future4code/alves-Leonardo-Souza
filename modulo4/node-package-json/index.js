// 1. a) Os parâmetros são acessados de acordo com suas posições no array de strings. Visto que as duas primeiras
// posições (array[0] e array[1]) são fixas, a partir da posição 2 do array podemos acessar os argumentos no console
// do node
// 1. b)

// console.log("Olá,", process.argv[2],"! Você tem", process.argv[3], "anos.")

// 1. c)

// console.log("Olá,", process.argv[2],"! Você tem", process.argv[3], "anos. Em sete anos, você terá", Number(process.argv[3]) + Number(7),"anos" )

// 2. a)

// console.log("O número", Number(process.argv[2]), "somado ao número", Number(process.argv[3]), "é igual a", Number(process.argv[2]) + Number(process.argv[3]) )

// 3.

const listaTarefas = ["Lavar louças"]

const adicionaItem = listaTarefas.push(process.argv[2])

console.log(adicionaItem)