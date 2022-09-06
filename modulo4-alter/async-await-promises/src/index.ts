import express from 'express'
import cors from 'cors'
import axios from 'axios'
import { base_url } from './base_url'
import { getAllSubscribers, sendNotification } from './ex5'

const app = express()

app.use(express.json())
app.use(cors())
app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
})

const main = async (): Promise<any> => {
    try {
        console.log(await getAllSubscribers());
               
    } catch (error) {
        
    }
}
main()









