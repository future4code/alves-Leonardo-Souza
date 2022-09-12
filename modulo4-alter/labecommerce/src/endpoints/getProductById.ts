import connection from '../connection'

const getProductById  = async (id: string) => {
          
        const productsList = await connection("labecommerce_products")
            .where ({id: id})
            .select ("*") 
        
        return productsList[0]
}

export default getProductById 