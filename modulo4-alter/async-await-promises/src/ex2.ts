import axios from 'axios'
import { base_url } from './base_url'

// 2.

// a) A diferença consiste na posição que é declarado o async

// b)

const getAllSubscribers = async (): Promise<any[]> => {
    const res = await axios.get(`${base_url}/subscribers`)
    return (res.data)
}

getAllSubscribers()