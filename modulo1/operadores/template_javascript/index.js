/* 1) Foram definidos valores de verdadeiro e falso para as variaveis bool1 e bool2 e foi atribuido para
bool3 valor de !bool2, ou seja, valor contrário a bool2. Sendo bool2 definido como falso, atribui-se a bool3
o valor de verdadeiro. Em seguida, foi criada uma variavel mutavel chamada resultado e, primeiramente, foi 
atribuido que o resultado deve ser verdadeiro e falso, sendo assim, o console.log exibirá falso pois somente
um deles será verdadeiro. A variavel resultado foi alterada e foram atribuidos os de bool1, bool2 e bool3, após
apertar console.log a resposta será falso, pois bool3 é o contrário de bool2, ou seja, tem valor verdadeiro, entretanto,
bool2 permanece como falso e portanto a mensagem exibida será falso. A terceira proposta solicita contrário
do resultado (na ultima linha lida o mesmo foi falso), com a junção de bool1 ou bool2. Sendo assim, a resposta será 
verdadeiro pois !resultado será verdadeiro e bool1 também é verdadeiro, mesmo bool2 sendo falso, a solicitação é de um
ou outro. Por fim, resultado é uma variável booleana pois tem como opções apenas verdadeiro ou falso. */

/* 2) É necessário solicitar ao colega que cheque o formato da váriavel. O erro está acontecendo pois as variaveis
estão sendo lidas como strings, ou seja, o computador apenas está juntando os dois números. É necessário que seja 
dado comando de Number (primeiroNumero) e Number (segundoNumero) dentro da variavel soma, daí em diante o computador os lerá como numeros
e fará o calculo */

/* 3) let primeiroNumero = prompt ("Digite um numero")
      let segundoNumero = prompt ("Digite outro numero")

      let soma = Number (primeiroNumero) + Number (segundoNumero)

      console.log(soma)
*/
// 1)

let idadeUsuario = prompt ("Qual é sua idade?")
let idadeAmigoUsuario = prompt ("Qual é a idade do seu melhor amigo?")
let soma = Number (idadeUsuario) > Number (idadeAmigoUsuario)
let subtracao = Number (idadeUsuario) - Number (idadeAmigoUsuario)
console.log ("Sua idade é maior que do seu amigo?", soma)
console.log ("A diferença de idade de vocês é de", subtracao, "anos")


// 2)

let perguntaUsuario = prompt ("Digite um numero par")
let resultado = Number (perguntaUsuario) % 2
let numeroParConfirmacao = Number (resultado) === 2 % 2
console.log ("O numero selecionado é par", numeroParConfirmacao,)

/* Ao colocar o numero par, o resultado sempre será zero pois numeros pares nunca terão resto numa divisão
pelo numero 2. Por conseguinte, ao colocar qualquer numero impar o resultado sempre será 1 pois haverá sempre
o mesmo resto em dividindo-se por 2 sem o mesmo ser par. */

// 3)

let perguntaIdadeUsuario = prompt ("Qual é sua idade?")

let resultadoIdadeMeses = Number (perguntaIdadeUsuario) * 12
console.log("Você tem", resultadoIdadeMeses, "meses vividos")
let resultadoIdadeDias = Number (perguntaIdadeUsuario) * 365
console.log("Você tem", resultadoIdadeDias, "dias vividos")
let resultadoIdadeHoras = Number (perguntaIdadeUsuario) * 8760
console.log("Você tem", resultadoIdadeHoras, "horas vividas")

// 4) 

let primeiroNumero = prompt ("Digite um numero")
let segundoNumero = prompt ("Digite outro numero")
let resultado1 = Number (primeiroNumero) >= Number (segundoNumero) || Number (primeiroNumero) <= Number (segundoNumero)
console.log("O primeiro numero é maior que segundo?", resultado1)
let resultado2 = Number (primeiroNumero) === Number (segundoNumero) && primeiroNumero === Number (segundoNumero)
console.log("O primeiro numero é igual ao segundo?", resultado2)
let divisao1 = Number (primeiroNumero) % Number (segundoNumero)
let divisaoResultado = Number (divisao1) === 2 % 2 || Number (divisao1) !== 2 % 2
console.log ("O primeiro numero é divisivel pelo segundo?", divisaoResultado,)
let divisao2 = Number (segundoNumero) % Number (primeiroNumero)
let divisaoResultado2 = Number (divisao2) === 2 % 2 || Number (divisao2) !== 2 % 2 
console.log("O segundo numero é divisivel pelo primeiro?", divisaoResultado2,)



 
























