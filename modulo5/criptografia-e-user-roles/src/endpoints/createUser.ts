import { Request, Response } from 'express'
import { generateId } from '../services/generateId'
import { AuthenticationData, generateToken } from '../services/generateToken'
import { connection } from '../connection'
import { HashManager } from '../services/generateHash'

export const createUser = async (req: Request, res: Response) => {
    try {
        const id = generateId()
        const hashManager = new HashManager()

        const { email, password } = req.body
        const hash = await hashManager.hash(password)


        await connection("autenticacao_User")
            .insert({
                id,
                email,
                password: hash
            })

        const payload: AuthenticationData = {
            id: id
        }
        const token = generateToken(payload)

        res.status(200).send({
            message: "Usuário cadastrado com sucesso!",
            token
        })
    } catch (error) {
        res.status(500).send("Erro ao criar usuário!")
    }
}
