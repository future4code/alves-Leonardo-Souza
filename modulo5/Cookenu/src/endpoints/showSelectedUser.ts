import { Request, Response } from 'express'
import { connection } from '../connection'
import { verifyToken } from '../services/generateToken'


export const showSelectedUser = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization
        const payload = verifyToken(token)

        if (!payload){
            throw new Error ("Token inválido!")
        }
         
        const result = await connection("cookenu_user")
            .select("name", "email", "id")
            .where({id: payload.id})

        const userInfo = result [0]
              

        res.status(200).send(userInfo)
            

    } catch (error) {
        res.status(res.statusCode || 500).send(error.message)
    }
}