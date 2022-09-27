import { toUpperString } from "./exercicios/exercicios"

describe ("Exercicio 1", () => {
    test ("O texto está em caixa alta?", () => {
        const input = toUpperString("bananinha")             
        expect(input).toBe("BANANINHA")
    })
})