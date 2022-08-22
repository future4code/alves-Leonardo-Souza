//1) 

// const userName: string = "Leonardo"
// const birthDate: string = "6/11/1991"

// const birthSplit = () => {
//     return birthDate.split("/")       
// }

// const splitedBith: string[] = birthSplit()

// console.log(`Olá me chamo ${userName}, nasci no dia ${splitedBith[0]} do mês ${splitedBith[1]} do ano de ${splitedBith[2]}`)

// 2) 

// const randomVariable1: number = 985
// const randomVariable2: string = "União Soviética"

// const verifyType = () => {
//     return typeof randomVariable2
// }

// console.log(verifyType());

// 3) 

enum GENRE {
	ACTION="action",
	DRAMA="drama",
	COMEDY="comedy",
	ROMANCE="romance",
	HORROR="horror"
}

type movie = {
    name: string,
    releaseYear: number,
    genre: GENRE,
    rating? : number
}






