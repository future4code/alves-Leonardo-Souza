import { stringify } from "querystring"

export const isNumberEven = (n: number): boolean => {
    if (n % 2 === 0){
        return true
    }
        return false
}

export const toUpperString = (input: string) => {
    return input.toUpperCase()
}

export const splitString = (input: string): string[] => {
    return input.split("")
}

export const toNumberfyString = (input: string): number => {
    return Number(input)
}

export const countCharsInString = (input: string)=> {
    return input.length
}

export const generateNumber = (): number => {
    return Math.floor(Math.random() * 10)
}

export const usersArray: string[] = ["Leonardo", "Astrodev", "Jéssica", "Estela"]