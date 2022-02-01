//Punto2
//Pedir al usuario que ingrese dos números diferentes y mayores a cero

var num1 = parseInt(prompt('Ingrese el primer numero:'));
var num2 = parseInt(prompt('Ingrese el segundo numero:'));

document.write('Primer numero: ' + num1 + '<br>');
document.write('Segundo numero: ' + num2 + '<br>');

//Calcular Suma, Resta, División, Multiplicación, Módulo

if (num1> 0 || num2> 0) {
    document.write('El resultado de la suma '+ num1  +' + '+ num2 +' es '+ (num1 + num2) +'.<br>');
    document.write('El resultado de la resta '+ num1 +' - '+ num2 +' es '+ (num1 - num2) +'.<br>');
    document.write('El resultado de la división '+ num1 +' / '+ num2 +' es '+ (num1 / num2) +'.<br>');
    document.write('El resultado de la multiplicación '+ num1 +' * '+ num2 +' es '+ (num1 * num2) +'.<br>');
    document.write('El resultado del módulo '+ num1 +' % '+ num2 +' es '+ (num1 % num2) +'.<br>');
}else{
    document.write('Error, ingrese número mayor a 0');
}

