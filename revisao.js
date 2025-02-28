//comentario de uma linha

/*
Comentario em bloco 
*/

//variaveis
//var -> não usa no dia dia
let nome = "Victor"
const idade = 20;

//nome - 'teste'
// idade = 20 não é possivel reatribuir uma constante

//operadores
const soma = 2 + 2
const subtracao = 2 - 2
const multiplicacao = 2 * 2
const divisao = 2 / 2
const resto = 3 % 3

//operadores de comparação
const igual = 2 == 2
const diferente = 3 != 2
const maior = 3 > 2
const menor = 2 > 3
const maiorOuigual = 2 >= 3
const menorOuigual = 2 <= 3

// Estruturas condições
if (idade > 18 ) {
    console.log("Maior de idade")
}

if (idade > 18 ) {
    console.log("Maior de idade")
    } else {
    console.log("Menor de idade")
    }


 //operador ténario

 const mensagem = idade >= 18 ? "Maior de idade" : "Menor de idade"
 console.log ("Mensagem -> ", mensagem)

 //arays - Listas

 const frutas = ["Maça", "Banana", "Uva"]
 console.log(frutas[0])
 console.log(frutas[1])

 console.log("Quantas frutas tem no array")
 console.log(frutas.length)

 frutas.push("Melancia")
 console.log("É agora, quantas frutas tem na array?")
 console.log(frutas.length)

 frutas.forEach( fruta => console.log(fruta))

 frutas.pop()
 console.log(frutas)