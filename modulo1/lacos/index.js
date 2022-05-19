// 1) 

// A função solicita que seja feito um loop onde o começo é 0, a condição de continução é ir até um número
// que seja menor do que 5 e o incremento é sempre somar mais um até chegar a condição. O console irá exibir o número
// pois a função sempre soma o valor que foi definido ao final do loop ao valor do indice que virá no retorno do loop.

// 2) 

// a)

// Será impresso no console apenas os números maiores de 18 dentro da array pois há uma condição de só mostrar o console
// se for verdadeira a condição de que o item encontrado e mostrado é maior que 18

// b) 

//Seria necessário alterar os parametros do let de forma que ele acessasse todos os itens da array sendo o último item
// chamado pelo array.length.

// 3) 

// Aparecerá no console seguidamente asteriscos até se completarem 4 asteriscos juntos. O codigo informa que enquanto
// o numero da quantidadeAtual for menor que o numero da quantidadeTotal, serão adicionados asteriscos no console.log

// *****************************************************************************************************************

// 1) Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 

// a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

        let perguntaPetUsuario = Number (prompt("Quantos bichos de estimação você tem?"))
        
            if (perguntaPetUsuario === 0){
            console.log("Que pena! Você pode adotar um bichinho!")
                

             
// b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
        
            }else if (perguntaPetUsuario > 0){
                let arrayDePets = []
                let pets = 0
                while (arrayDePets.length < perguntaPetUsuario){
                console.log(prompt("Digite o nome do seu pet"))
                arrayDePets.push(perguntaPetUsuario)         
                }
               
                console.log(arrayDePets)
         
            
        }
        
        

       