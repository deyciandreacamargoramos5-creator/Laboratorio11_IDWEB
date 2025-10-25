function TablaDeMultiplicar(){
    let numero = parseFloat(prompt("Ingrese el numero"));
    let inicio = parseFloat(prompt("Ingrese el inicio"));
    let fin = parseFloat(prompt("Ingrese el fin"));   

    console.log("Tabla de multiplicar del " + numero + " es :");
    do{
        console.log(numero + "*" + inicio + "=" + numero*inicio);
        inicio++;
    }while (inicio<=fin);
}
