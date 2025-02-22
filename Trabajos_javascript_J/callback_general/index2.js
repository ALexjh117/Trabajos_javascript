//
function saludar (nombre,funcion) {
    let saludo = 'hola,'+nombre;
    funcion (saludo);
}

function nombre1(saludo){
    console.log(saludo);
}

saludar ('Alex' , nombre1);

//Operaciones matemáticas: Crea una función que reciba dos 
//números y un callback. La función debe realizar una operación 
//matemática (suma, resta, multiplicación, división) con los números 
//y luego ejecutar el callback con el resultado. El callback podría 
//mostrar el resultado en la consola o en un elemento HTML.


function matemáticas(n1, n2, operación, mostrarResultado) {
    let resultado;
    
  
    if (operación === 'suma') {
        resultado = n1 + n2;
    } else if (operación === 'resta') {
        resultado = n1 - n2;
    } else if (operación === 'multiplicación') {
        resultado = n1 * n2;
    } else if (operación === 'división') {
       
        if (n2 === 0) {
            console.log("Error: No se puede dividir entre cero");
            return;
        }
        resultado = n1 / n2;
    } else {
        console.log("Operación no válida");
        return;
    }
    
    
    mostrarResultado(resultado);
}

function mostrarResultado(operación) {
    console.log("El resultado es: " + operación);
}


matemáticas(10, 5, 'suma', mostrarResultado); 
matemáticas(10, 5, 'multiplicación', mostrarResultado);

//3. Temporizador: Crea una función que reciba un número de segundos 
//y un callback. La función debe esperar la cantidad de segundos 
//especificada y luego ejecutar el callback. El callback podría mostrar 
//un mensaje en la consola o en un elemento HTML indicando que el 
//tiempo ha transcurrido. 


function n_tiempo (segundos,fn){
    setTimeout(function(){
        fn();
 } ,segundos *1000);
}
    

n_tiempo(2, function() {
    console.log("hola santiago en 4 segundos.");
});




// Manipulación de arrays: Crea una función que reciba un array de 
//números y un callback. La función debe realizar una operación en 
//cada elemento del array (por ejemplo, elevar al cuadrado, 
//multiplicar por 2) y luego ejecutar el callback con el nuevo array. El 
//callback podría mostrar el nuevo array en la consola o en un 
//elemento HTML. //


function calculo (arr , calcular) {
    var resultado_c =[];
    for (let i = 0; i < arr.length; i++) {
        resultado_c.push(calcular(arr[i]));  

    }

    return(resultado_c);
}
        

function potencia(numerog){
    return numerog * numerog;
}

var resultado_array= calculo([1,4,5,6],potencia);
console.log('nuevo array',resultado_array);



 //Crea una función que reciba un array de 
//elementos y un callback. La función debe filtrar el array según una 
//condición específica (por ejemplo, números mayores que 10, 
//cadenas de texto que contengan una palabra clave) y luego ejecutar 
//el callback con el nuevo array filtrado. El callback podría mostrar el 
//nuevo array en la consola o en un elemento HTML//


function filtrar_num(arr, tipo, filtrar) {
    var array_filtrado = [];

    switch (tipo) {
        case 'mayores que 10':
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > 10) {
                    array_filtrado.push(arr[i]);
                }
            }
            break;  // Aquí termina el primer caso

        case 'pares':
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] % 2 == 0) {
                    array_filtrado.push(arr[i]);
                }
            }
            break;  // Aquí termina el segundo caso

        default:
            console.log('Tipo de filtrado no reconocido');
            return;  // Si no se reconoce el tipo, termina la función
    }

    // Llamamos al callback filtrar con el array filtrado
    filtrar(array_filtrado);
}

// Callback que muestra el array filtrado en la consola
function mostrarArray(array) {
    console.log("Array filtrado:", array);
}

// Usamos la función filtrar_num
let numeros = [5, 12, 8, 21, 30, 3];
filtrar_num(numeros, 'mayores que 10', mostrarArray); // Esto mostrará los números mayores que 10

let numeros2 = [1, 2, 3, 4, 5, 6];
filtrar_num(numeros2, 'pares', mostrarArray); // Esto mostrará los números pares



function hacerSolicitud(url, callback) {
    fetch(url)  // 1: Hacemos la solicitud HTTP a la URL
      .then(response => {  // 2: Verificamos si la respuesta es exitosa
        if (!response.ok) {  // 3: Si la respuesta no es exitosa, lanzamos un error
          throw new Error('No se pudo obtener la respuesta del servidor');  // 4: Lanzamos un error si la respuesta no es correcta
        }
        return response.json();  // 5: Convertimos la respuesta a JSON
      })
      .then(data => {  // 6: Cuando recibimos los datos JSON
        callback(data);  // 7: Llamamos al callback con los datos
      })
      .catch(error => {  // 8: Si ocurre un error, lo capturamos
        console.error('Error en la solicitud:', error);  // 9: Mostramos el error en consola
      });
  }
  
  function mostrarDatosEnConsola(data) {  // 10: Función callback para procesar los datos
    console.log('Datos recibidos:', data);  // 11: Mostramos los datos (un array de objetos) en la consola
  }
  
  const url = 'https://jsonplaceholder.typicode.com/posts';  // 12: URL que devuelve datos en formato JSON
  hacerSolicitud(url, mostrarDatosEnConsola);  // 13: Llamamos a la función hacerSolicitud, pasándole la URL y la función de callback
  



  