function Estadisticas() {
    let opcion;
    let notas = [];
    do {
        opcion = parseInt(prompt(
            "MENÚ:\n1. Ingresar notas\n2. Promedio\n3. Máximo\n4. Mínimo\n5. Pares e impares\n6. Encima del promedio\n7. Pares e impares en rango\n8. Tabla de multiplicar\n9. Salir"));
            switch (opcion) {
                case 1:
                    notas = [];
                    let cantidad = parseInt(prompt("¿Cuántas notas desea ingresar?"));
                    for (let i = 0; i < cantidad; i++) {
                        notas.push(parseFloat(prompt("Ingrese la nota " + (i + 1) + ":")));
                    }
                break;
                case 2:
                    let promedio = notas.reduce((a, b) => a + b, 0) / notas.length;
                    console.log("Promedio: " + promedio.toFixed(2));
                break;
                case 3:
                    console.log("Máximo: " + Math.max(...notas));
                break;
                case 4:
                    console.log("Mínimo: " + Math.min(...notas));
                break;
                case 5:
                    let pares = notas.filter(n => n % 2 === 0).length;
                    let impares = notas.length - pares;
                    console.log("Pares: " + pares + ", Impares: " + impares);
                break;
                case 6:
                    let prom = notas.reduce((a, b) => a + b, 0) / notas.length;
                    let encima = notas.filter(n => n > prom).length;
                    console.log("Notas por encima del promedio: " + encima);
                break;
                case 7:
                    let inicio = parseInt(prompt("Inicio del rango:"));
                    let fin = parseInt(prompt("Fin del rango:"));
                    let paresR = 0, imparesR = 0;
                    for (let i = inicio; i <= fin; i++) {
                        if (i % 2 === 0) paresR++;
                        else imparesR++;
                    }
                    console.log("Pares: " + paresR + ", Impares: " + imparesR);
                break;
                case 8:
                    let num = parseInt(prompt("Ingrese número para la tabla:"));
                    for (let i = 1; i <= 10; i++) {
                        console.log(num + " * " + i + " = " + (num * i));
                    }
                break;
                case 9:
                    console.log("Fin");
                break;
                default:
                    console.log("Opción inválida.")
                    }
                } while (opcion !== 9);
            }