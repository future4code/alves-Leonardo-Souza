import axios from 'axios';
import { base_url } from './base_url'

// 1.
// a) Endpoint GET em todos os subscribers

// b) Pode ser indicado após os parenteses com possíveis paramêtros entre <> com a definição de any seguida
// dos colchetes que simbolizam um array

// c)

async function getAllSubscribers(): Promise<any[]> {
    const res = await axios.get(`${base_url}/subscribers`);
    return res.data;
};

getAllSubscribers()