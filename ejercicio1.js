// es un comentario, poner info que no se ejecuta
/*
comentario muy largo en varias lineas 
*/

// declaracion de variables

let animal = 'gato'; //variable de tipo string o texto 

let numero = 1;   //variable de tipo numero 


console.log(animal);  //impresion de variable con console.log

console.log(numero);  

console.log(typeof animal);  //impresion de tipo de variable con typeof

console.log(typeof numero);


let suma = 2 + '2';   //las variables pueden guardar resultados de operaciones como sumas 

console.log(suma);

let resta = 2-2;  //las variables pueden guardar resultados que sean numeros vs numeros 

let suma_correcta = 2 + 2;

console.log(suma_correcta);

let suma_texto = "hola" + "larissa gonzalez";   //las variables pueden guardar el resultado de suma de textos o contatenacion de textos 

console.log(suma_texto);


let amiga = "regis";

let saludo = "hola" + amiga;  //las variables pueden guardar el resultado de operaciones con otras variables 

console.log(saludo);


let veterinaria = "perros" + "gatos";
let tiene = "tiene" + veterinaria;

console.log(tiene);


let sueños= "minicooper" 
let carro = "el carro de mis sueños es" + sueños;

console.log(carro);


let texto = "el resultado de la suma";
let suma2 = "2+2 =";
let resultado = "4";
let operacion = "elresultado de la suma" + "2+2 =" + "4";

console.log(operacion)



// Condicionales IF/ELSE y comparadores > < >= <=


let edad_lari = 14;
let puede_nopuede;


// sintaxis o palabra reservada
if(edad_lari >= 18 ){

    puede_nopuede = "PUEDE PISTEAR LARI TIENE ";

    console.log(puede_nopuede + edad_lari);

} else {
    puede_nopuede = "NO PUEDE";

    console.log(puede_nopuede + edad_lari);
}

edad_lari = 16;

// sintaxis o palabra reservada
if(edad_lari >= 18 ){

    puede_nopuede = "PUEDE PISTEAR LARI TIENE ";

    console.log(puede_nopuede + edad_lari);

} else {
    puede_nopuede = "NO PUEDE LARI TIENE";

    console.log(puede_nopuede + edad_lari);
}


edad_lari = 18;

// sintaxis o palabra reservada
if(edad_lari >= 18 ){

    puede_nopuede = "PUEDE PISTEAR LARI TIENE ";

    console.log(puede_nopuede + edad_lari);

} else {
    puede_nopuede = "NO PUEDE LARI TIENE";

    console.log(puede_nopuede + edad_lari);

}






let leon = "omnivoro";

leon = "omnivoro" // reasignacion


// == es una comparacion
if(leon == "carnivoro"){

    puede1_nopuede1 = "COMERTE";

    console.log(puede1_nopuede1 + leon);

} else {
    puede1_nopuede1 = "NO TE COME";

    
    console.log(puede1_nopuede1 + leon);
}
    