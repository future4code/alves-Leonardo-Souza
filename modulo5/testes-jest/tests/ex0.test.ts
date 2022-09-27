import { isNumberEven } from "./exercicios/exercicios"

describe ("Exercicio 0", () => {
    test ("O número informado é par?", () => {
        const number = 112
        const answer = isNumberEven(number)
        expect(answer).toBe(true)
    })
})
