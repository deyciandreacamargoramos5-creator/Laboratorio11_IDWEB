function Edad(){
    let edad = parseInt(prompt("Ingrese una edad"));
    let categoria;
    if(edad < 12){
        categoria ="niño";
    }else if (edad < 18){
        categoria ="Adolescente";
    }else if (edad < 60){
        categoria ="Adulto";
    }else{
        categoria = "Adulto mayor"
    }
    return categoria;
}
let resultado = Edad();
console.log(resultado)