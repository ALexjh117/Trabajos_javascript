// Obtener los elementos HTML
let inputNumero = document.getElementById("inputNumero");
let botonComprobar = document.getElementById("botonComprobar");
let mensaje = document.getElementById("mensaje");
let intentos = document.getElementById("intentos");

// Crear el número secreto entre 1 y 10
let numeroSecreto = Math.floor(Math.random() * 10) + 1;

// Número de intentos
let intentosRestantes = 5;

// Función para comprobar si el jugador adivina el número
function comprobarNumero() {
    // Obtener el valor del número ingresado por el jugador
    let numeroIngresado = parseInt(inputNumero.value);

    // Si el jugador no pone un número válido
    if (isNaN(numeroIngresado)) {
        mensaje.textContent = "Por favor, introduce un número válido.";
        return;
    }

    // Si el número ingresado es correcto
    if (numeroIngresado === numeroSecreto) {
        mensaje.textContent = "¡Felicidades! Adivinaste el número " + numeroSecreto + ".";
        intentosRestantes = 0; // El jugador ha ganado
    } else {
        // Si el número no es correcto, restamos un intento
        intentosRestantes--;

        // Si se acabaron los intentos, el jugador pierde
        if (intentosRestantes === 0) {
            mensaje.textContent = "¡Perdiste! El número secreto era " + numeroSecreto + ".";
        } else {
            // Si el número ingresado es mayor o menor que el secreto
            if (numeroIngresado < numeroSecreto) {
                mensaje.textContent = "El número es mayor. Te quedan " + intentosRestantes + " intentos.";
            } else {
                mensaje.textContent = "El número es menor. Te quedan " + intentosRestantes + " intentos.";
            }
        }
    }

    // Actualizar los intentos restantes en la pantalla
    intentos.textContent = "Intentos restantes: " + intentosRestantes;
}

// Cuando el jugador haga clic en el botón, comprobar el número
botonComprobar.addEventListener("click", comprobarNumero);
