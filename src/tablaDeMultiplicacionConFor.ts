// ingreso de valiables y valor numerico
let numero, numDeCorte, resultado, i: number;
// se piden el numero a multiplicar y hasta que numero se multiplica
numero = Number(prompt("Ingrese su numero a multiplicar: "));
numDeCorte = Number(prompt("Ingrese hasta que numero desea multiplicarlo: "));
// i el contador se inicia en 1 se le da el corte con el numero a multiplicar
for (i = 1; i <= numDeCorte; i++) {
  // se guarda en resultado la multiplicacion del numero por el contador
  resultado = numero * i;
  console.log(
    "La multiplicacion de: " + numero + " * " + i + " = " + resultado
  );
}
