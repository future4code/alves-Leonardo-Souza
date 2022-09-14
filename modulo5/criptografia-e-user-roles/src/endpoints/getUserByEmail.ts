import { connection } from "../connection"

export const getUserByEmail = async (email: string) => {
    const result = await connection('autenticacao_User')
        .select("*")
        .where({ email })

    return result [0]
}