export type transaction = {
    value: number,
    date: string,
    description: string,
}

export type user = { 
    name: string,
    cpf: number,
    birthDate: string, 
    extract: transaction[]  
}

export const userOne: user = {
    name: "Leonardo Couto",
    cpf: 19851536024,
    birthDate: "06/11/1991",
    extract: []    
}
export const userTwo: user = {
    name: "Thiago de Castro",
    cpf: 46925363060,
    birthDate: "20/05/1987",
    extract: []
}
export const userThree: user = {
    name: "Leonardo Rocha Siqueira",
    cpf: 80481846050,
    birthDate: "03/12/1993",
    extract: []
}
export const userFour: user = {
    name: "Edson Junior",
    cpf: 53797224079,
    birthDate: "10/04/1991",
    extract: []
}
export const userFive: user = {
    name: "Jéssica Bernardes",
    cpf: 53797224079,
    birthDate: "19/04/1991",
    extract: []
}

export const usersArray: user[] = [userOne, userTwo, userThree, userFour, userFive]


