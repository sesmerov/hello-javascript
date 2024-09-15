/*
Clase 3 en vídeo | 24/07/2024
Condicionales, arrays y sets
https://www.youtube.com/live/XCNjoIoO3Ws?si=3XCjdZ9r41JID-by&t=978
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let nombre = "Diego"

if (nombre == "Diego"){
    console.log("Tu nombre es "+nombre)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let user = "pepe"
let password = "1234234234"

if (user == "pepe" && password == "1234"){
    console.log("Acceso permitido")
} else {
    console.log("Acceso no permitido")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let number = 34
if (number > 0){
    console.log("El numero es positivo")
} else if (number < 0){
    console.log("El numero es negativo")
} else{
    console.log("El numero es 0")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let age = 13

if(age >= 18){
    console.log("Puede votar")
} else{
    console.log("No puede votar")
    console.log("Le faltan", 18-age, "años.")
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

let estado

estado = age >=18 ? estado = "adulto" : estado = "menor"
console.log(estado)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let month = 10
switch (month) {
    case 1:
    case 2:
    case 3:
        console.log("Estamos en INVIERNO")
    break;

    case 4:
    case 5:
    case 6:
        console.log("Estamos en PRIMAVERA")
    break;

    case 7:
    case 8:
    case 9:
        console.log("Estamos en VERANO")
    break;

    case 10:
    case 11:
    case 12:
    console.log("Estamos en OTOÑO")
    break;
    
    default:
    console.log("NUMERO DE MES INCORRECTO")

}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7