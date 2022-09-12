import { Request, Response } from 'express'
import connection from '../connection'
import { products } from '../types'

const getAllProducts = async (req: Request, res: Response): Promise <void> => {
    try {
        
        const productsList: products[] = await connection("labecommerce_products")
        res.status(200).send(productsList)

    } catch (error) {
        res.status(500).send("Não foi possível buscar os produtos. Tente novamente!")
    }
}

export default getAllProducts