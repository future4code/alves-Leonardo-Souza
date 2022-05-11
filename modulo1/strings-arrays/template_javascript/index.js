/* 1)

    a) A primeira mensagem será undefinied pois não foi
definido nenhum valor para o array */

/* b) A segunda mensagem mostrará null pois o valor definido
para esta array foi null, ou seja, é definido porém sem valor */

/* c) A terceira mensagem mostrará o tamanho da array, porém mostrará
apenas a quantidade de elementos, ou seja, mostrará o numero 11. */

/* d) A quarta mensagem mostrará o primeiro item da array. Foi criada uma 
variavel de valor 0 e exibido no console o comando de mostrar o item 0 da lista 
da array selecionada. Caso a variavel fosse let i = 1, o numero mostrado seria o numero 4
e não o numero 3*/

/* e) A quinta mensagem mostrará uma troca de valores. É informado ao console
que o primeiro item após o item 0, ou seja, o numero 4, será substituido
pelo numero 19. Caso estivesse na instrução array[i + 2] = 19, o numero a ser
substituido seria o segundo numero apos o item 0, sendo assim o numero 5.  */

/* f) A sexta mensagem será a criação de uma variável que mostrará o sexto numero
após o item 0 da array, ou seja, a variavel será o numero 9. Este exemplo é parecido 
o supracitado   */

/* 2) Ao ser inserida a frase, o console mostrará a frase com todas as letras maiusculas.
Poderia se achar que não seria substituido o A pois foi escrito em minusculo e seriam substituidos
apenas os maiusculos, entretanto, o comando foi dado após o comando de todas as letras ficarem
maiusculas, por isso foi substituido */

//1)

let nomeUsuario = prompt (`Qual seu nome?`)
let emailUsuario = prompt (`Qual seu email?`)
console.log("O e-mail", emailUsuario ,"foi cadastrado com sucesso. Seja bem-vinda(o)", nomeUsuario)

// 2)

let arrayComidas = ["Churrasco", "Pizza", "Pipoca", "Bolo", "Pão"]
console.log(arrayComidas)
console.log(`Essas são as minhas comidas preferidas:\n${[arrayComidas[1]]}\n${[arrayComidas[2]]}\n${[arrayComidas[0]]}\n${[arrayComidas[4]]}\n${[arrayComidas[3]]}`)

let perguntaUsuario = prompt ("Qual sua comida favorita?")
arrayComidas[1] = perguntaUsuario  
console.log(`Essas são as minhas comidas preferidas:\n${[arrayComidas[1]]}\n${[arrayComidas[2]]}\n${[arrayComidas[0]]}\n${[arrayComidas[4]]}\n${[arrayComidas[3]]}`)


// 3)

/*a)*/ let listaDeTarefas = []
/*b)*/ let pergunta1 = prompt ("Cite uma tarefa diária")
       let pergunta2 = prompt ("Cite outra tarefa diária")
       let pergunta3 = prompt ("Cite mais uma tarefa diária")
       listaDeTarefas = [pergunta1, pergunta2, pergunta3]
/*c)*/ console.log(listaDeTarefas)
/*d)*/ let escolhaUsuario = prompt ("Escolha a tarefa 1, 2 ou 3")
       listaDeTarefas.splice (escolhaUsuario - 1, 1)
       console.log(listaDeTarefas)


