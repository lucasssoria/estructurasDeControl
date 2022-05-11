// se ingresan las variables y se validan
let num1, num2, total: number;
total = 0;
// solicito los 2 numeros a sumar
num1 = Number(prompt("ingrese su primer numero: "));
num2 = Number(prompt("Ingrese su segundo numero: "));
// a i le doy el valor inicial de num1 y num2 es el numero de cierre con su contador i++
for (let i = num1; i <= num2; i++) {
  // se suma el contador al total
  total += i;
}
// se imprime el total en pantalla o consola
alert("Su total es: " + total);
console.log("Su total es: " + total);
