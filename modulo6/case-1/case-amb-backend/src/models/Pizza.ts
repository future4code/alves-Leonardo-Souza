export interface IPizzaDB {
    name: string,
    price: number   
}
export interface IIngredientsDB {
    name: string     
}
export interface IPizzasIngredientsDB {
    pizza_name: string,
    ingredient_name: string     
}

export class Pizza {
    constructor(
        private name: string,
        private price: number,
        private ingredients: string []
    ) {} 

    public getName = () => {
        return this.name
    }

    public getPrice = () => {
        return this.price
    }

    public getIngredients = () => {
        return this.ingredients
    }
 
    public setName = (newName: string) => {
        this.name = newName
    }

    public setPrice = (newPrice: number) => {
        this.price = newPrice
    }

    public setIngredients = (newIngredients: string[]) => {
        this.ingredients = newIngredients
    }

    public addIngredient = (newIngredient: string) => {
        this.ingredients.push(newIngredient)
    }

    public removeIngredient = (ingredientToRemove: string) => {
        this.ingredients.filter(ingredient => ingredient !== ingredientToRemove)
    }

} 

export interface ISignupInputDTO {
    name: string,
    email: string,
    password: string
}

export interface ISignupOutputDTO {
    message: string,
    token: string
}

export interface ILoginInputDTO {
    email: string,
    password: string
}

export interface ILoginOutputDTO {
    message: string,
    token: string
}

export interface IGetPizzasOutputDTO {
    message: string,
    pizzas: {
        name: string,
        price: number,
        ingredients: string []
    }[]
}