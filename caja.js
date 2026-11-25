const prompt = require('prompt-sync')();

let total = 0;
let contador = 0;
let precio;

do {
  precio = Number(prompt("Ingrese el precio del producto (0 para terminar): "));

  if (isNaN(precio)) {
    console.log("Por favor ingrese un numero");
    continue; 
  }

  if (precio < 0) {
    console.log("Error: No se permiten numeros negativos. No se sumó.");
    continue;
  }

  if (precio !== 0) {
    total = total + precio;
    contador++;
  }

} while (precio !== 0);

console.log("Cantidad total de productos: " + contador);
console.log("Monto total a pagar: $" + total);