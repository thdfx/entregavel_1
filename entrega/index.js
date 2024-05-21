// Definindo a funcao
function calculadora(numero1, numero2, operador) {

     // Convertendo numeros
     let num1 = parseInt(numero1);
     let num2 = parseInt(numero2);
     let resultado;

    // Definindo operador e comandos
    switch (operador) {
        case "+":
            console.log(num1 + " + " + num2)
            resultado = num1 + num2;
            break;
        case "-":
            console.log(num1 + " - " + num2)
            resultado = num1 - num2;
            break;
        case "*":
            console.log(num1 + " * " + num2)
            resultado = num1 * num2;
            break;
        case "/":
            console.log(num1 + " / " + num2)
            resultado = num1 / num2;
            break;
        case "e":
            let contador = 1;
            resultado = num1 * num1;
            while (contador < num2) {
                resultado = resultado * num1;
                contador++;
            }
            break;
    }
    // verificando resultado
    if (resultado === undefined || resultado > 1000000) {
        resultado = "ERRO";
}
    return resultado;
}

// solicitando os números e o operador ao usuário
let numero1 = prompt("Digite o primeiro número:");
let numero2 = prompt("Digite o segundo número:");
let operador = prompt("Qual sera seu operador? \n1 +; \n2 -; \n3 *; \n4 /; \n5 e; ")

// chamando a função calculadora e resultado
let resultado = calculadora(numero1, numero2, operador);
console.log("O resultado é: " + resultado);