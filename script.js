function mostrarImagen() {
    const archivoInput = document.getElementById("agregar");
    const imagenContainer = document.getElementById("principal");

    const archivo = archivoInput.files[0];

    if (archivo) {
        const lector = new FileReader();

        lector.onload = function (e) {
            const imagen = document.createElement("img");
            imagen.src = e.target.result;
            imagenContainer.appendChild(imagen);
        };

        lector.readAsDataURL(archivo);
    } else {
        console.error("Selecciona un archivo antes de intentar mostrarlo");
    }
}