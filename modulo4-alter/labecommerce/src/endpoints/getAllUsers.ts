import { Request, Response } from "express";
import connection from "../connection";
import users from "../types";

const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const usersArray: users[] = await connection("labecommerce_users")
        res.status(200).send(usersArray)

    } catch (error) {
        res.status(500).send("Erro ao buscar usuários. Tente novamente!")
    }
}

export default getAllUsers