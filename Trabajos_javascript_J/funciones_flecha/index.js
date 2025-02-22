//Área de un círculo: Escribe una función que reciba el radio de un círculo
//como argumento y devuelva su área.

var areaCirculo = (radio) => {
    var area ;
    area = 3.14 * radio*radio; //3.14 es pi redondeado , se puede utlizar math.pi para un calculo  exacto
    return area;

};

console.log( 'el area del circulo es '+areaCirculo(8) +'centimetros cuadrados');




//Conversión de temperatura: Crea una función que tome una
//temperatura en grados Celsius y la convierta a grados Fahrenheit.

var gradosFahrenheit = (temperaturacelcius) => {
    return (temperaturacelcius * 9/5) + 32; 
}

console.log('La temperatura en grados Fahrenheit es: ' + gradosFahrenheit(25));  




//Número mayor: Implementa una función que reciba un array de
//números y retorne el número más grande que se encuentra en el array.


var numero_mayor = (arr) => {
    let mayor = arr[0]; // Inicializamos  con el primer valor del arreglo

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > mayor) {
            mayor = arr[i]; // Si encontramos un valor mayor, lo actualizamos
        }
    }

    return mayor; // Retornamos el valor máximo encontrado
};


var arreglo =[1,5,8,9,12,13];


var maximo = numero_mayor(arreglo);
console.log(maximo);



 //Filtrado de números pares: Escribe una función que reciba un array de 
//números y devuelva un nuevo array que contenga solo los números pares 
//del array original.


var numero_par = (arr) => {
    var par = [];

    for (let i= 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            par.push(arr[i]);
        }
    }
    return par;
};


var arreglo_par= [2,4,3,5,8,9,10];
var par_encontrado = numero_par(arreglo_par);
console.log(par_encontrado);

//Factorial de un número: Diseña una función que calcule el factorial de 
//un número entero positivo dado.


var numero_factorial = (n) => {
    var factorial = 1;
     for (let i=1; i <= n; i++){
        factorial *=i;

     }
        return factorial;
} 


console.log(numero_factorial(6));


//Suma de elementos de un array: Crea una función que reciba un array 
//de números y devuelva la suma de todos sus elementos.

var suma_arreglo = (arr) => {
    var sumar_arreglo = 0;
     for (let i = 0;  i < arr.length; i++){
        sumar_arreglo += arr[i];
         
     }
     return sumar_arreglo;
}

var sumade_arreglo= [2,4,10];
var resultado_suma = suma_arreglo(sumade_arreglo);
console.log(resultado_suma);



//Escribe una función que determine si una cadena de texto es un palíndromo
//es decir, si se lee igual de izquierda a derecha que de derecha a izquierda).

const esPalindromo = (cadena) => {
    // Eliminar espacios y convertir todo a minúsculas
    var cadenaLimpia = cadena.replace(/\s+/g, '').toLowerCase();

    // Invertir la cadena
    var cadenaInvertida = cadenaLimpia.split('').reverse().join(''); // join convierte un array en una cadena de texto

    // Comparar la cadena limpia con la invertida
    return cadenaLimpia === cadenaInvertida;  // Devuelve true si son iguales, false si no
}

console.log(esPalindromo("ojo"));       // true
console.log(esPalindromo("radar"));     // true
console.log(esPalindromo("Hola Alex")); // false



//Implementa una función que genere un número aleatorio dentro de un rango especificado 
// (entre un valor mínimo y un valor máximo).
const generarNumeroAleatorio = (min, max) => parseInt(Math.random() * (max - min + 1)) + min;
console.log(generarNumeroAleatorio(20,30));
console.log(generarNumeroAleatorio(10,20)); 






const convertirPrimerYUltimaLetra = (cadena) => {
    if (cadena.length <= 1) {
// Si la cadena tiene 1 o menos caracteres, simplemente devuelve la misma cadena
    return cadena.toUpperCase();
    }
 // Convertir la primera y última letra a mayúsculas y concatenar el resto
    const primeraLetra = cadena.charAt(0).toUpperCase();
    const ultimaLetra = cadena.charAt(cadena.length - 1).toUpperCase();
    const medio = cadena.slice(1, cadena.length - 1);

// Retornar la nueva cadena con las letras convertidas a mayúsculas
    return primeraLetra + medio + ultimaLetra;
};
console.log(convertirPrimerYUltimaLetra("Alex"));          // "AleX"
console.log(convertirPrimerYUltimaLetra("Batman"));        // "BatmaN"
console.log(convertirPrimerYUltimaLetra("Harry Potter"));  // "Harry PotteR"
console.log(convertirPrimerYUltimaLetra("Superman"));      // "SupermaN"
console.log(convertirPrimerYUltimaLetra("Joker"));         // "JokeR"
console.log(convertirPrimerYUltimaLetra("Wonder Woman"));  // "Wonder WomaN"


      








const ordenarArrayPorPropiedad = (array, propiedad, ascendente = true) => {
    return array.sort((a, b) => { // sort ordenar los elementos del array en su lugar
        // Comprobamos si el orden es ascendente o descendente
        if (ascendente) {
            return a[propiedad] > b[propiedad] ? 1 : (a[propiedad] < b[propiedad] ? -1 : 0);
        } else {
            return a[propiedad] < b[propiedad] ? 1 : (a[propiedad] > b[propiedad] ? -1 : 0);
        }
    });
};


const personas = [
    { nombre: "Luis", edad: 31 },
    { nombre: "Alex", edad: 19 },
    { nombre: "Maria", edad: 49 },
    { nombre: "sandro", edad: 52 }
];

// Ordenar por edad de manera ascendente
console.log(ordenarArrayPorPropiedad(personas, "edad", true));

// Ordenar por edad de manera descendente
console.log(ordenarArrayPorPropiedad(personas, "edad", false));

// Ordenar por nombre de manera ascendente
console.log(ordenarArrayPorPropiedad(personas, "nombre", true));

// Ordenar por nombre de manera descendente
console.log(ordenarArrayPorPropiedad(personas, "nombre", false));
