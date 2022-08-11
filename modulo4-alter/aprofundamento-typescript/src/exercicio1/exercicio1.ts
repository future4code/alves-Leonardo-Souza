// 1. a) Crie uma variável minhaString do tipo string e atribua um valor a ela.
// Tente atribuir um número a esta variável. O que acontece?

const minhaString: string = ""

// Em seguida a adição de um número aleatorio, a variável quebrou e um alert informa
// que somente uma string é aceita.

//b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. Como fazer
// para que essa variável também aceite strings? Ou seja, como criamos no typescript uma
// variável que aceite mais de um tipo de valor?

const meuNumero: number | string = "vinte e oito"

// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

// `nome`, que é uma string;

// `idade`, que é um número;

// `corFavorita`, que é uma string.

// Crie mais três objetos, que também precisam ter apenas os campos definidos acima.
// Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: string,    
}
const pessoa1: pessoa = {
    nome: "Arnaldo",
    idade: 30,
    corFavorita: "Roxo",    
}
const pessoa2: pessoa = {
    nome: "Paulo",
    idade: 43,
    corFavorita: "Verde",    
}
const pessoa3: pessoa = {
    nome: "Raul",
    idade: 36,
    corFavorita: "Rosa",    
}

// d) Modifique a propriedade corFavorita para que apenas seja possível escolher entre as cores do arco-íris.
// Utilize um enum para isso.

enum CoresArcoIris {
    VERMELHO = "Vermelho", 
    LARANJA = "Laranja", 
    AMARELO = "Amarelo", 
    VERDE = "Verde", 
    AZUL = "Azul", 
    AZUL_ESCURO = "Azul Escuro", 
    VIOLETA = "Violeta",
}

const pessoa4: pessoa = {
    nome: "Rubens",
    idade: 38,
    corFavorita: CoresArcoIris.AMARELO,    
}
const pessoa5: pessoa = {
    nome: "Cassio",
    idade: 49,
    corFavorita: CoresArcoIris.AZUL,    
}
const pessoa6: pessoa = {
    nome: "Bernardo",
    idade: 27,
    corFavorita: CoresArcoIris.LARANJA,    
}




