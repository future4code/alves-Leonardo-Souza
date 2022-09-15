import {Request, Response} from "express"
import { generateId } from "../services/generateId"
import { generateToken } from "../services/generateToken"
import { HashManager } from "../services/generateHash"
import { User } from "../classes/User"
import { connection } from "../connection"


export const signUp = async (req: Request, res: Response) => {
    try{
        const id = generateId()
        const hashManager = new HashManager()
        const {name, email, password} = req.body
        const hash = await hashManager.hash(password)

        if(!name || !email || !password) {
            res.status(422).send("Insira corretamente todas as informações") 
        }       
     
        await connection("cookenu_user")
        .insert({
            id,
            name,
            email,
            password: hash
        })

        const token = generateToken({id})

        res.status(200).send({message:"Usuário criado com sucesso", token})

    } catch(error: any) {
        res.status(res.statusCode || 500).send(error.message)
    }
}