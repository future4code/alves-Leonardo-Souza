import { countCharsInString } from "./exercicios/exercicios"

describe ("Exercicio 4", () => {
    test ("Quantos caracteres há na string?", () => {
        const input = "jest"
        const output = countCharsInString(input)
        expect(output).toBe(4)
    })
})