
//Carrito Vacío
let carrito = [];


//funciones
function cargarJuegos() {
    let juegos = cargarJuegosLS();
    let juegoHTML = "";
    //Agregarlo al html
    for (const juego of juegos){
        juegoHTML += `
        <div class="cajaProducto">
            <img onclick="verJuego(${juego.id});" src="${juego.imagen}" alt="" class="productoImg">
            <h2 class="tituloProducto">${juego.titulo}</h2>
            <span class="precioProducto">$<strong>${juego.precio}</strong></span>
            <button onclick="agregarAlCarrito(${juego.id});" id="agregar" class="addToCart" data-id="${juego.id}"><i class='bx bx-cart-add addCarritoIcon'></i></button>
        </div>
        `;
    }
    document.querySelector('.tiendaContenido').innerHTML = juegoHTML;
}

guardarJuegosLS(juegos)
cargarJuegos();
actualizarBtnCarrito()

document.querySelector('#vaciarCarrito').addEventListener('click', eliminarCarrito);