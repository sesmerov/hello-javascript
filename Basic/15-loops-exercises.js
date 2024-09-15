/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

for (let i = 1; i <= 20; i++) {
    console.log(i)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let suma = 0
for (let i = 1; i <=100; i++){
    suma+=i
}
console.log("Resultado: "+suma)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

for (let i = 1; i <=50; i++) {
    if (i%2 == 0){
        console.log(i)
    }
    
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let myArray = ["Paco","Pepe","Diego","Jesus"]
for (const nombre of myArray) {
    console.log(nombre)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let text = "Esto es un texto de prueba"
let vowels = ["a","e","i","o","u"]
let suma2 = 0
for (const char of text) {
    if(vowels.includes(char) || vowels.includes(char.toLowerCase())){
        suma2+=1
    }
}
console.log(suma2)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let arrayNumeros = [4,5,6]
let producto = 1
for (const numero of arrayNumeros) {
    producto*=numero
}
console.log(producto)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
let number = 5
for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + number*i)
}

// 8. Usa un bucle para invertir una cadena de texto

let textoPrueba = "Hola"
for (let i = textoPrueba.length-1; i >=0 ; i--){
    process.stdout.write(textoPrueba[i]) //Al estar en Node se puede usar esta funciona para evitar el salto de liena
}

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci



// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let myArray3 = [1,2,14,23,12,5,6]
let resultadoArray = []

for (const numero of myArray3) {
    if(numero > 10){
        resultadoArray.push(numero)
    }
}
console.log(resultadoArray)