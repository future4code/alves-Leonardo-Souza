export interface IOrdersDB {
    id: string   
}
export interface IOrdersItemDB {
    id: string,
    pizza_name: string,
    quantity: number,
    order_id: string 
}

export interface IOrderItem{
    id: string,
    pizza_name: string,
    quantity: number,
    order_id: string
}

export class Order {
    constructor(
        private id: string,
        private orderItem: IOrderItem []
    ) {} 

    public getId = () => {
        return this.id
    }

    public getOrderItem = () => {
        return this.orderItem
    } 

    public setOrderItem = (newOrderItem: IOrderItem[]) => {
        this.orderItem = newOrderItem
    }

    public addOrderItem = (newOrderItem: IOrderItem) => {
    this.orderItem.push(newOrderItem)
    }

    public removeOrderItem = (idToRemove: string) => {
        return this.orderItem.filter(orderItem => orderItem.id !== idToRemove)
    }       

} 