import { Request, Response } from 'express'
import connection from '../connection'

const createProduct = async (req: Request, res: Response): Promise <void> => {
    try {
        let id = Date.now().toString()
        const {name, price, img_url} = req.body

        await connection("labecommerce_products")
            .insert({id, name, price, img_url})

        res.status(200).send("Produto cadastrado com sucesso!")    
    } catch (error) {
        res.status(500).send("Erro ao cadastrar produto. Tente novamente!")
    }
}

export default createProduct