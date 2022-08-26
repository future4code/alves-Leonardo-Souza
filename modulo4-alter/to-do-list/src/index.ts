import express, {Request, Response} from 'express'
import cors from 'cors'
import knex from 'knex';
import dotenv from 'dotenv'

const app = express()
dotenv.config()

// export const connection = knex({
// 	client: "mysql",
// 	connection: {
//     host: "35.226.146.116",
//     port: 3306,
//     user: "alves-leonardo-souza",
//     password: "TLDxrLwzLk9VRgQHMllK",
//     database: "alves-leonardo-souza"
//   }
// });

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003!");    
})

app.post("/user", async (req: Request, res: Response) => {    
    const userName = req.body.name
    const userEmail = req.body.email
    const userNick = req.body.nick    
    try {
        if(!userName || !userEmail || !userNick){
        res.statusCode = 422
        throw new Error("Dados incompletos para cadastro. Favor prencher todos os campos necessários")
    }  
        await connection.raw(`
        INSERT INTO Users (id, name, email, nick)
        VALUES (
            ${Date.now().toString()},
            "${userName}",
            "${userEmail}",
            "${userNick}"
        )
      `      
      )      
      res.status(200).send("Usuário criado com sucesso!");

    } catch (error) {
        res.status(res.statusCode || 500).send(error.message)
    }
  })

app.get("/user/:id", async (req: Request, res:Response) => {
    const id = req.params.id            
    try {
        if(!id){
            res.statusCode = 422
            throw new Error ("Usuário não encontrado")
        }
        const [usersList] = await connection.raw(`
        SELECT id, name FROM Users WHERE id = ${id}
        `)
        res.status(200).send(usersList)
        
    } catch (error) {
        res.status(res.statusCode || 500).send(error.message)
    }
})

