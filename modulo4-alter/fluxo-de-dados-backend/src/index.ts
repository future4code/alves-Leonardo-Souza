import express, { request, response } from 'express'
import cors from 'cors'
import { productsArray, product } from '../src/data'


const app = express()

app.use(express.json())
app.use(cors())

app.get("/test", (request, response) => {
    response.send("Teste Ok!")
})

app.post("/create", (request, response) => {
    request.body = {
        id: Date.now(),
        name:"",
        price:""
    }
})

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})