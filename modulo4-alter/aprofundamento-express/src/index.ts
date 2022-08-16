import express, { Request, Response } from 'express'
import cors from 'cors'
import { toUSVString } from 'util'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor operando na porta 3003")
})

app.get("/ping", (req: Request, res: Response) => {
    res.send("pong")
})

type toDoList = {
    userId: number,
    id: number,
    title: number | string,
    completed: boolean
}
const taskOne: toDoList = {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
}
const taskTwo: toDoList = {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
}
const taskThree: toDoList = {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
}
const taskFour: toDoList = {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
}
const taskFive: toDoList = {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": true
}

const toDoArray: toDoList[] = [taskOne, taskTwo, taskThree, taskFour, taskFive]

app.get("/completedtasks", (req: Request, res: Response) => {
    const completedArray = toDoArray.filter((task) => {
        if (task.completed === true) {
            return (task)
        }
    })
    res.send(completedArray)
})

app.post("/create", (req: Request, res: Response) => {
    const newTask: toDoList = req.body
    toDoArray.push(newTask)
    res.send(toDoArray)
})

app.get("/change/:id", (req: Request, res: Response) => {
    const taskId = req.params.id

    toDoArray.forEach(task => {
        if(task.id === Number(taskId)){
            if (task.completed){
                return (!task.completed)
            }
        }
    }); res.send( toDoArray)
        
})

app.delete("/deletar/:taskid", (req: Request, res: Response) => {

})
