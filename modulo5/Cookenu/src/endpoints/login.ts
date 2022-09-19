import { Request, Response } from 'express'
import { connection } from '../connection'
import { HashManager } from '../services/generateHash'
import { generateToken } from '../services/generateToken'

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            res.status(422).send("Insira corretamente todas as informações")
        }

        const result = await connection("cookenu_user")
            .select("*")
            .where({ email })

        const userDb: any = result[0]

        if(!userDb){
            throw new Error ("Email não cadastrado no sistema!")
        }

        const hashManager = new HashManager()
        const isPasswordCorrect = await hashManager.compare(password, userDb.password)

        if(!isPasswordCorrect){
            throw new Error ("Senha incorreta!")
        }

        const token = generateToken({ id: userDb.id })

        res.status(200).send({ message: "Usuário logado com sucesso", token })

    } catch (error: any) {
        res.status(res.statusCode || 500).send(error.message)
    }
}