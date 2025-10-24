function CalcularPromedio(){
    let suma = 0;
    let cantidadNotas = 5;
    for (let i = 1; i <= cantidadNotas; i++){
        let nota;
        do{
            nota = parseFloat(prompt("Ingrese la nota"));
            if(isNaN(nota) || nota < 0 || nota < 20){
                console.log("Dato incorrecto");
            }
        }while(isNaN(nota) || nota < 0 || nota > 20);
        suma += nota;
    }
    let promedio = suma / cantidadNotas;
    console.log("El promedio de las notas es:" + promedio);
}