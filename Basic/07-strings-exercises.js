/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.youtube.com/live/euVbF1eatEY?si=nHS3QznAlA_C39NK&t=808
*/

// 1. Concatena dos cadenas de texto

console.log("Hola " + "Mundo")

// 2. Muestra la longitud de una cadena de texto

console.log("Hola Mundo".length)

// 3. Muestra el primer y último carácter de un string

let string = "Cadena de prueba"

console.log(string[0])
console.log(string[string.length-1])

// 4. Convierte a mayúsculas y minúsculas un string

console.log(string.toUpperCase())
console.log(string.toUpperCase)

// 5. Crea una cadena de texto en varias líneas

console.log(`Esto es
    una cadena de texto
    en varias lineas`)

// 6. Interpola el valor de una variable en un string

let nombre = "Diego"

console.log(`Hola ${string}!`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

console.log(string.replaceAll(" ","-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(string.includes("prueba"))

// 9. Comprueba si dos strings son iguales

string == nombre ? console.log("Son iguales") : console.log("No son iguales")

// 10. Comprueba si dos strings tienen la misma longitud

"Hola".length == "Pepe".length ? console.log("Tienen la misma longitud") : console.log("No tienen la misma logitud")