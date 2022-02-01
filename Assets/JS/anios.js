//Punto4
// Pedir al usuario una cantidad de días

var dias = parseInt(prompt('Ingrese la cantidad de días a calcular:'));

document.write('Días ingresados: ' + dias + '<br>');

//Calcular su equivalente en Años, Semanas y Días
var años = Math.floor(dias/365);
var semanas = Math.floor((dias -(365*años))/7);
var diasX = Math.floor(dias - (años*365) - (semanas*7));

//Resultado

document.write('Los días ingresados equivalen a: ' + años + ' años, ' + semanas + ' semanas, ' + diasX + ' días.<br>');

