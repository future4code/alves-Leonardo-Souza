import { Request, Response } from 'express'
import { connection } from '../connection';
import { generateId } from '../services/generateId';

export const createUser = async (id: string, email: string, password: string) => {
   try {
    let id = generateId()  
    await connection ("autenticacao_User")
    .insert({id, email, password})    
   } catch (error) {
    
   }
  };