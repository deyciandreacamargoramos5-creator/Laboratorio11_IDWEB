function Armstrong(){
    let numero = parseInt(prompt("Ingrese un número:"));
    if (isNaN(numero) || numero < 0) {
        alert("Número inválido.");
        return;
    }
    let strNum = numero.toString();
    let n = strNum.length;
    let suma = 0;
    for (let i = 0; i < n; i++) {
        suma += Math.pow(parseInt(strNum[i]), n);
    }
    if (suma === numero) {
        console.log(numero + " es un número Armstrong.");
    } else {
        console.log(numero + " no es un número Armstrong.");
    }
}
