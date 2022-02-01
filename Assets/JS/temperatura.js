//Punto3
//Pedir al usuario ingresar la temperatura en grados Celsius

var tempC = parseInt(prompt('Ingrese la temperatura en grados Celsius a convertir:'));
var tempK;
var tempF;
//Transformar la temperatura a grados Kelvin y Fahrenheit

document.write('La temperatura en grados Celsius: ' + tempC + '<br>');

function kelvin (tempC) {
    tempK = (tempC + 273.15);
    return tempK;
}

function farenheit (tempC) {
    tempF = (tempC * 9/5) + 32;
    return tempF;
}

//Resultado

document.write('La temperatura en grados Kelvin es: '+ kelvin(tempC) + '°K' + '.<br>');
document.write('La temperatura en grados Farenheit es: '+ farenheit(tempC) + '°F' + '.<br>');
    