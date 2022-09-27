import { generateNumber } from "./exercicios/exercicios"

describe ("Exercicio 5", () => {
    test("Gerar número aleátorio", () => {
        const randomNumber = generateNumber()
        expect (randomNumber).toBeLessThanOrEqual(10)
    })
})