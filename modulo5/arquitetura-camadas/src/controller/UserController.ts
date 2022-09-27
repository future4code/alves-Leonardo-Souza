import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
    public signup = async(req: Request, res: Response) => {
        try {
            // const {name, email, password} = req.body
            const input: any = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const userBusiness = new UserBusiness()
            const response = await userBusiness.signup(input)

            res.status(201).send(response)

        } catch (error) {
            res.status(500).send({message: error.message})
        }
    }
}