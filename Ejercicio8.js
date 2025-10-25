function Areas(){
    do {
        let opcion = parseInt(prompt("MENU:\n1. Área del círculo\n2. Área del rectángulo\n3. Salir "));
        if(opcion === 1){
            let radio =parseFloat(prompt("Ingrese el radio"));
            let area = Math.PI * radio * radio;
            console.log("El area del circulo es:" + area.toFixed(2));
        }else if (opcion === 2){
            let base = parseFloat(prompt("Ingrese la base del rectangulo"));
            let altura = parseFloat(prompt("Ingrese la altura del rectangulo"));
            let area = base * altura;
            console.log("El area del rectangulo es: " + area);
        }else if (opcion !== 3){
            console.log("Invalido");
        }
    }while (opcion !== 3);
    console.log("Fin");
}