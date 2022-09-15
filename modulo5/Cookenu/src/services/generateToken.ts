import * as jwt from "jsonwebtoken";
import dotenv from 'dotenv'

dotenv.config()

export interface AuthenticationData {
  id: string  
}

  const expiresIn = "1hr"

  export const generateToken = (payload: AuthenticationData): string => {
    const token = jwt.sign(
      payload,
      process.env.JWT_KEY as string,
      {
        expiresIn
      }
    );
    return token;
  }

  export const verifyToken = (token: string) => {
     try {
      const payload = jwt.verify(token, process.env.JWT_KEY)
      return payload as AuthenticationData
     } catch (error) {
      return null
     }
  }