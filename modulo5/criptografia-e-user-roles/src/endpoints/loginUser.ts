import { Request, Response } from 'express'
import { generateId } from '../services/generateId'
import { AuthenticationData, generateToken } from '../services/generateToken'
import { connection } from '../connection'
import { HashManager } from '../services/generateHash'
import { getUserByEmail } from './getUserByEmail'

export const login = async (req: Request, res: Response) => {
    try {
        const {email, password} = req.body
        const hashManager = new HashManager() 
        const hash = hashManager.compare
        // const payload: AuthenticationData = {
        //    email: email
        // }

        if(!email){
            throw new Error ("Erro ao logar. Verifique o email")
        }

        const token = generateToken

        
        
    } catch (error) {

    }
}