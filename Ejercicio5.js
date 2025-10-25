function CajeroAutomatico(){
    let monto = parseInt(prompt("Ingrese el monto a retirar"));
    if (isNaN(monto) || monto <= 0){
        return;
    }
    let billetes100 = Math.floor(monto / 100);
    monto %= 100;
    let billetes50 = Math.floor(monto / 50);
    monto %= 50;
    let billetes20 = Math.floor(monto / 20);
    monto %= 20;
    let billetes10 = Math.floor(monto / 10);
    monto %= 10;

    console.log("Billetes entregados:");
    console.log("100: " + billetes100);
    console.log("50: " + billetes50);
    console.log("20: " + billetes20);
    console.log("10: " + billetes10);
    console.log("Monto restante no entregado: " + monto);
}