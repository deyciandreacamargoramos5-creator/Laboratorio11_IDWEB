function Mercado2(){
    let presupuesto = parseFloat(prompt("Ingrese su presupuesto máximo:"));
    if (isNaN(presupuesto) || presupuesto <= 0) {
        alert("Presupuesto invalido");
        return;
    }
    let total = 0;
    let continuar;
    do {
        let precio = parseFloat(prompt("Ingrese el precio del producto:"));
        if (isNaN(precio) || precio <= 0) {
            alert("precio inválido");
            continue;
        }
        if (total + precio > presupuesto) {
            alert("No puede agregar este producto. Supera su presupuesto de " + presupuesto.toFixed(2));
        } else {
            total = total + precio;
            console.log("Producto agregado. Total actual: " + total.toFixed(2));
        }

        continuar = prompt("¿Desea agregar otro producto?").toLowerCase();
    } while (continuar === "s");

    console.log("Total sin descuento: " + total.toFixed(2));

    if (total > 100) {
        console.log("Tiene un descuento del 10%");
        total = total * 0.9;
    } else if (total >= 50 && total <= 100) {
        console.log("Gana un cupon del 5%");
        total = total * 0.95;
    } else {
        console.log("No aplica descuento");
    }

    console.log("Total final a pagar: " + total.toFixed(2));
    console.log("Presupuesto restante: " + (presupuesto - total).toFixed(2));
}