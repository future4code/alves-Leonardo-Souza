import { toNumberfyString } from "./exercicios/exercicios"

describe ("Exercicio 3", () => {
    test ("Transformar string em número", () => {
        const input = "50"
        const output = toNumberfyString(input)
        expect (output).toBe(50)
    })
})