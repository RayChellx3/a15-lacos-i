//WHILE
// Vamos criar um sistema em que a pessoa será solicitada a inserir vários números. um após o outro.
// Quando digitar '0', devemos parar de solicitar inputs e imprimir no console a soma de todos os numeros indicados.
//Ex: Vamos supor que ele coloque: 10,3,50,7,0.
//o resultado deve ser: 70.

let numeroUsuario
let soma = 0
// +prompt ("insira um numero") >> pode ser utilizado tambem

while (numeroUsuario !== 0){
    numeroUsuario = Number(prompt("insira um número"))
    console.log(numeroUsuario)
    soma += numeroUsuario
}
console.log(soma)

//FOR
//Vamos escrever um programa que recebe um número por input de usuario
//Esse programa deve escrever os números de 0 até o valor que foi digitado pela pessoa
// Para isso, vamos utilizar um laço FOR que roda por x vezes, onde x é o numero digitado.

let numeroFor = Number(prompt("digite um numero:"))

    for (let i =0; i<= numeroFor; i++){
        console.log(i)
    }

// FOR COM ARRAYS
//Vamos criar um array com 7 numeros, e utilizar um for para percorrer os indices deste array, imprimindo no console a cada linha:
//"O número do indice ${indice} é ${numero}"
    

const array = [1,2,3,4,5,6,7]
    for (let i=0; i<array.length; i++){
        const numero = array[i]
        console.log(`O número do índice ${i} é ${numero}`)
    }


    // 1. Utilizando o laço while, escreva um código que recebe um prompt esperando seu tipo de usuário. O tipo de usuário é representado pelas letras abaixo:
    // “A”: Administrador;
    // “B”: Usuário comum;
    // “C”: Usuário assinante
    
    // Enquanto o valor passado for diferente da letra que representa “Administrador”, o laço deve se repetir, exibindo a mensagem: “Acesso negado.”
    // Quando o valor for igual ao da letra que representa “Administrador”, o laço deve parar, e a mensagem “Boas-vindas, admin!” deve ser impressa.

let tipoUsuario 

    while (tipoUsuario !== "A"){
        tipoUsuario = prompt("Digite um tipo de usuario:").toUpperCase() 
       if (tipoUsuario !== "A"){
        console.log("Acesso negado")
       }
    }
    console.log("Boas Vindas, Admin!")






