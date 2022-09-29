import {BaseDatabase} from '../../src/database/BaseDatabase'
import { IUserDB, User, USER_ROLES } from '../../src/models/User'

export class UserDatabaseMock extends BaseDatabase {
    public static TABLE_USERS = "Labook_Users"

    public toUserDBModel = (user: User): IUserDB => {
        const userDB: IUserDB = {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()
        }

        return userDB
    }

    public findByEmail = async (email: string): Promise<IUserDB | undefined> => {
       if (email === "leonardo@labenu.com"){
        const leonardo: IUserDB = {
            email: "leonardo@labenu.com",
            id: "id aleatorio4",
            name: "Leonardo Couto",
            password: "hash-bananinha",
            role: USER_ROLES.NORMAL
        }
        return leonardo
       }
       if (email === "astrodev@gmail.com"){
        const astrodev: IUserDB = {
            email: "astrodev@gmail.com",
            id: "id aleatorio5",
            name: "Astrodev",
            password: "hash-bananinha",
            role: USER_ROLES.ADMIN
        }
        return astrodev
       }
       return undefined
    }

    public createUser = async (user: User): Promise<void> => {
              
    }
}