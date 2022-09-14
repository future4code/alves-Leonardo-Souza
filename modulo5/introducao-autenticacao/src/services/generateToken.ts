import * as jwt from "jsonwebtoken";
import dotenv from 'dotenv'

dotenv.config()

  const expiresIn = "1hr"

  export const generateToken = (id: string): string => {
    const token = jwt.sign(
      {
        id
      },
      process.env.JWT_KEY as string,
      {
        expiresIn
      }
    );
    return token;
  }
  

export type EntradaFuncao = {
  id: string;
}