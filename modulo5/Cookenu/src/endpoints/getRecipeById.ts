import { Request, Response } from 'express'
import { connection } from '../connection'
import { verifyToken } from '../services/generateToken'

export const getRecipeById = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization
        const payload = verifyToken(token)

        if (!payload){
            throw new Error ("Token inválido!")
        }
        
        const result = await connection("cookenu_recipe")
            .select("title", "description")
            .where({id: payload.id})

        const recipeInfo = result [0]

        res.status(200).send(recipeInfo)
            
    } catch (error) {
        res.status(res.statusCode || 500).send(error.message)
    }
}