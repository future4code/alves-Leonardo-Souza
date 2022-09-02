import { Request, Response } from "express";
import connection from "../connection";
import getUserById from "./getUserById";

const getUsersPurchases = async (req: Request, res: Response) => {
    try {
        let user_id = req.params 
        
        if(!user_id){
            throw new Error ("Usuário não encontrado. Verifique o Id!")
        }

        const usersPurchases = await connection("labecommerce_purchases")
            .where(user_id === user_id)
            .select ("*")

        res.status(200).send(usersPurchases)
            
    } catch (error) {
        res.status(res.statusCode || 500).send(error.message || error.sqlMessage)
    }
}

export default getUsersPurchases