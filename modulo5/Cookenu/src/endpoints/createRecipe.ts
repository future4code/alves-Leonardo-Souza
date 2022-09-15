import { Request, Response } from 'express'
import { connection } from '../connection'
import { generateId } from '../services/generateId'

export const createRecipe = async (req: Request, res: Response) => {
    try {
        const id = generateId()
        const createdAt = new Date()
        const {title, description} = req.body

        if(!title || !description){
            res.statusCode = 401
            throw new Error ("Insira todas as informações")
        }

        await connection("cookenu_recipe")
            .insert({id, title, description, createdAt})

        res.status(200).send("Receita criada com sucesso!")

    } catch (error) {
        res.status(res.statusCode || 500).send(error.message)
    }
}
