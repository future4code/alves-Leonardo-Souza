import express, {Request, Response} from 'express'
import cors from 'cors' 

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Porta 3003 está rodando servidor");    
})

app.get("/", (req, res) => {          
    res.send("Exercicio 1 está funcionando!!")
})

type userInfo = {
    id: number,
    name: string,
    phone: number | string,
    email: string,
    website: string
}

const user1: userInfo = {
    id: 1,
    name: "Leonardo Couto",
    phone: 999872981,
    email: "leonardo@labenu.com",
    website: "www.leonardocouto.com"
}
const user2: userInfo = {
    id: 2,
    name: "Jéssica Bernardes",
    phone: 987456985,
    email: "jessica@labenu.com",
    website: "www.jessicabernardes.com"
}
const user3: userInfo = {
    id: 3,
    name: "Edson Junior",
    phone: 987632145,
    email: "edson@labenu.com",
    website: "www.edsonjunior.com"
}
const user4: userInfo = {
    id: 4,
    name: "Thiago de Castro",
    phone: 932654985,
    email: "thiago@labenu.com",
    website: "www.thiagodecastro.com"
}

const usersArray: userInfo[] = [user1, user2, user3, user4]

app.get("/users", (req: Request, res: Response) => {          
    res.send(usersArray) 
})

type userPost = {
    id: number,
    userId: number, 
    title: string | number,
    body: string | number,
}

const post1: userPost = {
    id: 1,
    userId: 2,
    title: "Lorem ipsum dolor sit amet",
    body: "Duis auteur irure pain in reprehenderit in voluptate velit this cillum dolore eu fugiat nulla pariatur"
}
const post2: userPost = {
    id: 2,
    userId: 4,
    title: "Lorem velit this cillum",
    body: "Excepteur sint occecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}
const post3: userPost = {
    id: 3,
    userId: 1,
    title: "Lorem ipsum auteur irure pain",
    body: "Enim adim ad minimim veniam, quis nostrud exercise ullamco laboris nisi ut alipip ex ea commodo consequat"
}

const postsArray: userPost[] = [post1, post2, post3]

app.get("/posts", (req: Request, res: Response) => {          
    res.send(usersArray) 
})




