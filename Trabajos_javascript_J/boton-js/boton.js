const boton = document.getElementById('miboton');
boton.addEventListener('click', function() {
    console.log('Has hecho clic aquí');
});

const campotexto = document.getElementById('micampoTexto');
campotexto.addEventListener('input', function(event) {
    const texto = event.target.value;
    console.log('El texto de este campo es: ' + texto);

    const div = document.getElementById('midiv');
    if (texto === '') {
        div.style.backgroundColor = 'blue';
    } else if (texto.toLowerCase().includes('rojo')) { 
        div.style.backgroundColor = 'red';
    } else if (texto.toLowerCase().includes('verde')) {
        div.style.backgroundColor = 'green';
    } else {
        div.style.backgroundColor = 'lightblue';
    }
});
