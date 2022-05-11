let number: number = 0;

for (let i = 1; i < 999; i++) {
  number = Number(prompt("Ingrese su numero:"));
  if (number === 0) {
    alert("Ingrese un numero mayor a 0.");
    console.log("Ingrese un numero mayor a 0.");
    i = i++;
  } else if (number % 2 == 0) {
    alert("Su numero es par.");
    console.log("Su numero es par.");
    break;
  } else {
    alert("Su numero es impar.");
    console.log("Su numero es impar.");
    break;
  }
}
