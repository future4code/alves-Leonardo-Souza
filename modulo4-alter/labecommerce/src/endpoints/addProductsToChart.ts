import { Request, Response } from 'express'
import connection from '../connection'
import getProductById from './getProductById'

const addProductsToChart = async (req: Request, res: Response): Promise <void> => {
    try {
        let id = Date.now().toString()
        const {user_id, product_id, quantity} = req.body

        if(!user_id || !product_id || !quantity){
            res.statusCode = 401
            throw new Error ("Verifique todos os campos necessários")
        }

        const products = await getProductById(product_id)
                
        const total_price = products.price * quantity

        await connection("labecommerce_purchases")
            .insert({id, user_id, product_id, quantity, total_price})

        res.status(200).send("Produto adicionado ao carrinho com sucesso!")   
         
    } catch (error) {
        res.status(res.statusCode || 500).send(error.message || error.sqlMessage)
    }
}

export default addProductsToChart