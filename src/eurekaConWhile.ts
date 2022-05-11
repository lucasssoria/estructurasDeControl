// ingreso las variables y sus valores
let clave: string = "eureka";
let pass: string = "";
let i = 1;
//mientras... i=contador se repita no mas de 3 veces
while (i <= 3) {
  // solicito la contraseña y le asigno el valor de pass
  pass = prompt("Ingrese su contraseña: ", "Intento Nº " + i);
  // si... pass es igual a la clave se finaliza el ciclo con su break
  if (pass == clave) {
    console.log("Clave correcta.");
    break;
    // sino... clave incorrecta Y...
  } else {
    console.log("Clave incorrecta");
  }
  // vuelve al incio del ciclo y suma el contador hasta la 3er vuelta
  i = i + 1;
}
