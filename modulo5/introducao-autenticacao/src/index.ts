import { app } from "./app";
import { generateId } from '../src/services/generateId'
import { generateToken } from "./services/generateToken";
import { create } from "domain";

app
let userId = generateId()
console.log("O id gerado é: ", userId)

let userToken = generateToken(userId)
console.log("O token gerado é:", userToken);

app.post("/user/signup", )




