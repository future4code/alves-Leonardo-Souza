import axios from "axios";
import { base_url } from "./base_url";
import { user } from "./ex3";

export const getAllSubscribers = async (): Promise<any[]> => {
    const users = await axios.get(`${base_url}/subscribers`)
    return [users.data]    
}

export const sendNotification = async (users: user[], message: string): Promise<void> => {
try {
    for (const user of users) {
	    await axios.post(`${base_url}/notifications`, {
	      users: [user.id],
	      message: "Notificação pra você"
	    });
	  }
	  console.log("As notificações foram enviadas");
	} catch {
		console.log("Erro!");
	}
};