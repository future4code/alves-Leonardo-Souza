import axios from 'axios';
import { base_url } from './base_url'

// 3.

// a) Não, pois o tipo informado tem o mesmo formato do que é solicitado na API

// b) Dependendo da quantidade de informações de uma API, é importante esta ação para mostrar
// apenas informações que sejam necessárias em determinada requisição

// c)

export type user = {
	id: string;
	name: string;
	email: string;
}

export const getAllSubscribers = async (): Promise<user[]> => {
    const res = await axios.get(`${base_url}/subscribers`)
    return res.data.map((res: any) => {
        return {
            id: res.id,
            name: res.name,
            email: res.email
        }
    })
}

getAllSubscribers()