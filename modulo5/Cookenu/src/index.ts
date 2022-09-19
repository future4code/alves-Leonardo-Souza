import { app } from "./app";
import { createRecipe } from "./endpoints/createRecipe";
import { getRecipeById } from "./endpoints/getRecipeById";
import { login } from "./endpoints/login";
import { showSelectedUser } from "./endpoints/showSelectedUser";
import { signUp } from "./endpoints/signUp";

app.post("/user/create", signUp)
app.post("/user/login", login)
app.post("/recipe", createRecipe)
app.get("/user/profile", showSelectedUser)
app.get("recipe/id", getRecipeById)