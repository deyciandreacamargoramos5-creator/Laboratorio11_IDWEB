function Mercado() {
  let total = 0;
  let continuar;

  do {
    let precio = parseFloat(prompt("Ingrese el precio del producto:"));
    if (isNaN(precio) || precio <= 0) {
      alert("Dato Invalido");
      continue;
    }
    total += precio;

    continuar = prompt("¿Desea agregar otro producto?").toLowerCase();
  } while (continuar === "s");

  console.log("Total sin descuento: " + total.toFixed(2));

  if (total > 100) {
    console.log("Tiene un descuento del 10%");
    total *= 0.9;
  } else if (total >= 50) {
    console.log("Gana un cupón del 5%");
    total *= 0.95;
  } else {
    console.log("No aplica descuento");
  }

  console.log("Total final a pagar: " + total.toFixed(2));
}