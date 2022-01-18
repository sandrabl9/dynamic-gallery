// Guardar estado imagen activa
let imagenActiva = 1

//Seleccionar las imagenes
const imagenes = document.querySelectorAll(".imagen")

//Escuchar los "clicks" en cada una de ellas

imagenes.forEach((imagen, indice) => {
    imagen.addEventListener("click", function() {
        cambiarImagen(indice)
    })
})


//Cambiar el estado de la imagen

function cambiarImagen(indice) {
    imagenes[imagenActiva].classList.remove("activa")
    imagenes[indice].classList.add("activa")
    imagenActiva = indice
}