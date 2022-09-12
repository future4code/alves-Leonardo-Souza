import { Request, Response } from 'express'
import connection from '../connection'

const signUp = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, password } = req.body

        let id = Date.now().toString()

        if(!name || !email || !password){
            res.statusCode = 401
            throw new Error("Complete todos os campos necessários para completar o cadastro")
        }

        await connection("labecommerce_users")
            .insert({ id, name, email, password })


        res.status(200).send("Usuário criado com sucesso!")

    } catch (error) {
        res.statusCode
        res.send()
    }
}

export default signUp
