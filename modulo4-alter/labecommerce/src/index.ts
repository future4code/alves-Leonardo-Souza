import app from "./app";
import addProductsToChart from "./endpoints/addProductsToChart";
import createProduct from "./endpoints/createProduct";
import getAllProducts from "./endpoints/getAllProducts";
import getAllUsers from "./endpoints/getAllUsers";
import getUsersPurchases from "./endpoints/getUsersPurchases";
import signUp from "./endpoints/signUp";


app.post("/users", signUp)
app.get("/users", getAllUsers)
app.post("/products", createProduct)
app.get("/products", getAllProducts)
app.post("/purchases", addProductsToChart)
app.get("/users/:user_id/purchases", getUsersPurchases)


