import {UserBusiness} from '../../src/business/UserBusiness'
import { ISignupInputDTO, User } from '../../src/models/User'
import { AuthenticatorMock } from '../mocks/AuthenticatorMock'
import { HashManagerMock } from '../mocks/HashManagerMock'
import { IdGeneratorMock } from '../mocks/IdGeneratorMock'
import { UserDatabaseMock } from '../mocks/UserDatabaseMock'

describe ("Testando o signup", () => {
    const userBusiness = new UserBusiness(
       new UserDatabaseMock(),
       new IdGeneratorMock(),
       new HashManagerMock(),
       new AuthenticatorMock()
    )
    test("Caso de sucesso", async () => {
        const input: ISignupInputDTO = {
            email: "jessicabsousap@labenu.com",
            name: "Jéssica Bernardes",
            password: "jess123"
        }
        const response = await userBusiness.signup(input)
        expect(response.token).toBe("token normal")
        expect(response.message).toBe("Cadastro realizado com sucesso")
    })
})