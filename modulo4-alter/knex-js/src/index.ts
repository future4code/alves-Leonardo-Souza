import express, {Request, Response} from 'express'
import cors from 'cors'
import knex from 'knex'
import connection from './connection'

const app = express()

app.use(express.json())
app.use(cors())

const searchActor = async (name: string): Promise<any> => {
    const [result] = await connection.raw(`
      SELECT * FROM Actor WHERE name = "${name}"
    `)
    return result
}

searchActor("Adriana Esteves")
.then(result => {
    console.log(result);    
}).catch(err => {
    console.log("Nome não consta no banco");
    
})

app.get("/maleactors", async(req: Request, res: Response) => {
    try {
        
    } catch (error) {
        
    }
})

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003!");    
})