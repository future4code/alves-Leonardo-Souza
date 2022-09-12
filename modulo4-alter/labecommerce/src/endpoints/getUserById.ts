import connection from '../connection'

const getUserById  = async (id: string) => {
          
        const usersList = await connection("labecommerce_purchases")
            .where ({id: id})
            .select ("*") 
        
        return usersList[0]
}

export default getUserById 