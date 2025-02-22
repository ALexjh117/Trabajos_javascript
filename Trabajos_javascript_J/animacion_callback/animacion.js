
const cuadro = document.getElementById('box');

function moverCuadro(funcionSiguiente) {
    cuadro.style.animation = 'mover 2s forwards';
    cuadro.addEventListener('animationend', function() {
    console.log('Animación de mover terminada');
    funcionSiguiente(); 
    });
}


function cambiarColorCuadro() {
    cuadro.style.animation = 'cambiarColor 2s forwards';
    cuadro.addEventListener('animationend', function() {
    console.log('Animación de cambio de color terminada');
    });
}
moverCuadro(cambiarColorCuadro);
