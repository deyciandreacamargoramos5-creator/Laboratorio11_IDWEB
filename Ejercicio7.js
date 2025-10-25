function SumaNumeros(){
    let n = parseInt(prompt("Ingresa N"));
    if(isNaN(n) || n < 1){
        return;
    }
    let suma = 0;
    for (let i = 1; i<=n; i++){
        if(i % 5 === 0) continue;
        suma += i;
    }
    console.log("La suma de 1 a " + n + "es : " + suma);
}