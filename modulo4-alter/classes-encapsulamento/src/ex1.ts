// 1. a) O construtor serve para definir os valores que serão assumidos por aquela classe quando a mesma
// for chamada

// b) Caso seja realocado em cada um dos getters, será reproduzido três vezes.

// c) Utilizando getters

// 2. 

class Transaction {
    private description: string
    private value:  number
    private date: string;

    constructor(
        description: string,
        value: number,
        date: string
    ){

    }
    public getDescription(): string {
        return this.description
    }
    public getValue(): number {
        return this.value
    }
    public getDate(): string {
        return this.date
    }
  }

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
    }
    public getCpf(): string {
        return this.cpf
    }
    public getName(): string {
        return this.name
    }
    public getAge(): number {
        return this.age
    }
  }



