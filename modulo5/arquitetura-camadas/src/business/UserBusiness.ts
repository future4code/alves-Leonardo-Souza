import { UserDatabase } from "../database/UserDatabase"
import { User } from "../models/User"
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class UserBusiness {
    public signup = async (input: any) => {
        const { name, email, password } = input

        if (!name || !email || !password){
            throw new Error ("Verifique todos os campos necessários")
        }

        const userId = new IdGenerator()
        const id  = userId.generate()
        const hashManager = new HashManager()
        const hash = await hashManager.hash(password)
        

        const user = new User(
            id,
            name,
            email,
            hash
        )       

        const userDataBase = new UserDatabase()
        await userDataBase.createUser(user)

        const payload: ITokenPayload = {
            id: user.getId(),
            role: user.getRole()
        }

        const authenticator = new Authenticator()
        const token = authenticator.generateToken(payload)

        const response = {
            token
        }

        return response

    }
}