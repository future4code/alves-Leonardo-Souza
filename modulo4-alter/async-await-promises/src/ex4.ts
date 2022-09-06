import { base_url } from "./base_url";
import axios from "axios";
import { create } from "ts-node";

// 4.

// a) O endpoint utilizado será o PUT que serve para atualizar ou adicionar nova informação à API

// b) 

const createNews = async(title: string, content: string, date: number): Promise<void> => {
    const news = {
        title: "Teste A",
        content: "Testando A",
        date: Date.now
    }
    await axios.put(`${base_url}/news`, news)
}

createNews()

