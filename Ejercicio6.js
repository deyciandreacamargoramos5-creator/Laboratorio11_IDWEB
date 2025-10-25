function NumerosPrimosRango(){
    let numero = parseInt(prompt("Ingrese un numero:"));
    if(isNaN(numero) || numero < 2){
        alert("Ingresa un número mayor o igual a 2."); 
        return;
    }
    console.log("Numeros primos hasta " + numero + ":");
    for(let i = 2; i<=numero; i++){
        let esPrimo = true;
        for(let j = 2; j<=Math.sqrt(i); j++){
            if(i % j === 0){
                esPrimo=false;
                break;           
            }
        }
        if(esPrimo){
            console.log(i);
        }
    }
}