function leerArchivo(archivo, manejarArchivo) {
    const inputArchivo = document.getElementById('entradaArchivo'); 
    
    inputArchivo.addEventListener('change', function(event) {
      const archivo = event.target.files[0]; 
      
      if (archivo) {
        const lector = new FileReader(); 
  
        // Definir qué hacer cuando el archivo se haya leído correctamente
        lector.onload = function() {
          manejarArchivo(lector.result); // Ejecutar el callback con el contenido del archivo
        };
  
        // Leer el archivo como texto
        lector.readAsText(archivo);
      }
    });
  }

  function manejarArchivo(contenido) {
    // Aquí mostramos el contenido en la consola
    console.log(contenido);
  }
  