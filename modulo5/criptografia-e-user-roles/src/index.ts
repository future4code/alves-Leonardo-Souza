import { app } from "./app";
import { User } from "./classes/user";
import { createUser } from "./endpoints/createUser";

app.post("/users", createUser)
app.post("/users/login")

