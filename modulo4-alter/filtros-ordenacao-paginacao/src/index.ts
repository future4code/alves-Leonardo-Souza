import express, {Request, Response} from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA
  }
});

const app = express();
app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");    
})

export default async function selectAllUsers():Promise<any> {
    const result= await connection.raw(`
       SELECT id, name, email, type
       FROM aula49_exercicio;
    `)
 
    return result[0]
 }

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
       const users = await selectAllUsers()
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No users found")
       }
 
       res.status(200).send(users)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }

app.get("/users", getAllUsers)

/////////////////////////////////////////////////

async function selectByName(name: string):Promise<any> {
    const result= await connection.raw(`
       SELECT id, name, email, type
       FROM aula49_exercicio
       WHERE name LIKE "%${name}%"
    `)
 
    return result[0]
 }
export const filterByName = async(req: Request,res: Response): Promise<void> =>{
    try {
       const name = req.query.name as string 
       if(!name){
        throw new Error ("Nome não consta no banco!")
       } 
       const users = await selectByName(name)
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No users found")
       }
 
       res.status(200).send(users)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }

 app.get("/users/search", filterByName)
