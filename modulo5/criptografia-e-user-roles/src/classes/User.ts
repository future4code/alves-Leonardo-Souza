export class User {
    private email: string
    private password: string
    constructor(
        userEmail: string,
        userPassword: string
    ){
         this.email = userEmail
         this.password = userPassword
    }
    public getEmail(): string{
        return this.email
    } 
}


