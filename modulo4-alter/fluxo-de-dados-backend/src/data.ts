export type product = {
    id: string | number,
    name: string, 
    price: number
}

const product1: product = { 
    id: Date.now(),
    name: "Escova",
    price: 50
}
const product2: product = { 
    id: Date.now(),
    name: "Sabonete",
    price: 10
}
const product3: product = { 
    id: Date.now(),
    name: "Pente",
    price: 35
}

export const productsArray: product[] = [product1, product2, product3]