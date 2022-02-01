//Punto5
// Solicitar al usuario 5 números

var num1 = parseInt(prompt('Ingrese el primer numero:'));
var num2 = parseInt(prompt('Ingrese el segundo numero:'));
var num3 = parseInt(prompt('Ingrese el tercer numero:'));
var num4 = parseInt(prompt('Ingrese el cuarto numero:'));
var num5 = parseInt(prompt('Ingrese el quinto numero:'));
var sum;
var prom;


document.write('Los numeros ingresados son: ' + num1 + ', ' + num2 + ', ' + num3 + ', ' + num4 + ', ' + num5 + '<br>');
// Calcular la suma

function sumar(num1, num2, num3, num4, num5) {
    sum = (num1 + num2 + num3 + num4 + num5);
    return sum;
}

// Calcular el promedio

function promedio(num1, num2, num3, num4, num5) {
    prom = (num1 + num2 + num3 + num4 + num5)/5 ;
    return prom;
}

//Resultado

document.write('El resultado de la suma es: '+ sumar (num1, num2, num3, num4, num5) + '.<br>');
document.write('El resultado del promedio es: '+ promedio (num1, num2, num3, num4, num5) + '.<br>');
    