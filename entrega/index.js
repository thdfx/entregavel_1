// Definindo a funcao
function calculadora(numero1, numero2, operador) {


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

}

