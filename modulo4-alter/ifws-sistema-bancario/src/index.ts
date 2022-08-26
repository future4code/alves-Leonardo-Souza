import express, { Request, Response } from 'express'
import cors from 'cors'
import { usersArray } from './data'

const app = express()

app.use(express.json())
app.use(cors())
app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003!");
})

app.get("/users", (req: Request, res: Response) => {
    let errorCode = 400
    try {
        if (usersArray.length === 0) {
            errorCode = 404
            throw new Error("Não existem usuários cadastrados!")
        } if (usersArray.length != 0) {
            res.send(usersArray)
        }

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
})
app.post("/create", (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const { name, cpf, birthDate } = req.body

        const splittedDate: string[] = birthDate.split("/")
        const actualYear: number = 2022

        if (!name || !cpf || !birthDate) {
            errorCode = 422
            throw new Error("Dados incompletos para cadastro. Favor verificar os campos necessários")
        }
        if (actualYear - 18 < Number(splittedDate[2])) {
            throw new Error("Usuário deve ter mais de 18 anos!")
        }
        if (actualYear - 18 > Number(splittedDate[2])) {
            usersArray.push(req.body)
            res.send("Usuário cadastrado com sucesso!")
        }

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
})
