import { splitString } from "./exercicios/exercicios"

describe ("Exercicio 2", () => {
    test ("Dividir o texto por letras", () => {
        const input = splitString("dev")             
        expect(input).toEqual(["d","e","v"])
    })
})