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

