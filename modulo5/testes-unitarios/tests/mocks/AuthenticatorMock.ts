import { USER_ROLES } from '../../src/models/User'
import {ITokenPayload} from '../../src/services/Authenticator'

export class AuthenticatorMock {
    generateToken = (payload: ITokenPayload): string => {
        if (payload.role === USER_ROLES.NORMAL){
            return "token normal"
        } else {
            return "token admin"
        }
    }

    getTokenPayload = (token: string): ITokenPayload | null => {
        if (token === "token normal"){
            const normalPayload: ITokenPayload = {
                id: "id aleatório2",
                role: USER_ROLES.NORMAL
            }
            return normalPayload
        }
        if (token === "token admin"){
            const adminPayload: ITokenPayload = {
                id: "id aleatório3",
                role: USER_ROLES.ADMIN
            }
            return adminPayload
        }

        return null
    }
}