// ingreso y doy valor a las variables
let clave: string = "eureka";
let pass: string = "";
// mientras i=contador que se inicia en 1, sea menor a 4 da vueltas sumando a i de a 1
for (let i = 1; i < 4; i++) {
  // se pide el ingreso de la contraseña guardando el valor en pass y mostrando el contador
  pass = prompt("Ingrese su contraseña: ", "Intento Nº " + i);
  // si... el ingreso de pass es igual a la clave termina el ciclo con su break
  if (pass == clave) {
    console.log("Clave correcta.");
    break;
    // sino... clave incorrecta y vuelve a pedir
  } else {
    console.log("Clave incorrecta");
  }
}
