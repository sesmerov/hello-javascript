/*
Clase 5 en vídeo | 07/08/2024
Objetos, desestructuración, propagación y clases
https://www.youtube.com/live/SBXEpAx_y_Q?si=Sbqqa2-_eGwsUkH-&t=958
*/

// 1. Crea un objeto con 3 propiedades

let car = {
    tyres: 4,
    brand: "Opel",
    hp: 110
}

// 2. Accede y muestra su valor
console.log(car.tyres)
console.log(car.brand)
console.log(car.hp)

// 3. Agrega una nueva propiedad

car.model = "Calibra"

// 4. Elimina una de las 3 primeras propiedades

delete car.tyres
console.log(car)

// 5. Agrega una función e invócala

car.sound = function(){console.log("BRUUUUUUUUUUM")}
car.sound()

// 6. Itera las propiedades del objeto

for (const key in car) {
    console.log(`La clave ${key} corresponde al valor ${car[key]}`)
    }


// 7. Crea un objeto anidado

let car2 = {
    tyres: 4,
    brand: "Skoda",
    hp: 110,
    tyresDescription:{
        pulgadas:17,
        medida:225
    }
}

// 8. Accede y muestra el valor de las propiedades anidadas

console.log(car2.tyresDescription)

// 9. Comprueba si los dos objetos creados son iguales

console.log(car == car2)

// 10. Comprueba si dos propiedades diferentes son iguales

console.log(car.hp == car2.hp)