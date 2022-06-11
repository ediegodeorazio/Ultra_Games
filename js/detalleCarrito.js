function actualizarBtnCarrito() {
    let juegosCarrito2 = cargarJuegosCarrito();
    let contenido2 = `<button type="button" class="btn btn-dark position-relative">
    <i class='bx bxs-cart-download carritoBox'></i>
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        ${juegosCarrito2.length}</span>
</button>`
    document.querySelector('#iconoCarrito2').innerHTML = contenido2;
    cargarJuegosSeleccionados();
};

//función para cargar juegos seleccionados
function cargarJuegosSeleccionados() {
    let juegos = cargarJuegosCarrito();
    let juegoCarritoHTML = "";
    let total = 0;
    //Recorro el array e inserto en HTML
    for (const juego of juegos) {
        juegoCarritoHTML += `
        <div class="cart-box">
            <img src="${juego.imagen}" alt="${juego.titulo}" class="cart-img">
            <div class="detail-box">
                <div class="cart-product-title">${juego.titulo}</div>
                <div class="cart-price">$${juego.precio}</div>
                <div class= "d-flex">
                    <i class='bx bxs-minus-circle btnMasMenos' onclick='eliminarJuego(${juego.id});'></i>
                    <input type="text" value="${juego.cantidad}" min="0" class="cart-quantity">
                    <i class='bx bxs-plus-circle  btnMasMenos' onclick='agregarAlCarrito(${juego.id});'></i>
                </div>
            </div>
            <!-- Vaciar Carrito -->
            <i class='bx bxs-trash cart-remove' onclick='eliminarJuego(${juego.id});'></i>
        </div>
        `;
        total += juego.precio * juego.cantidad;
    }
    document.querySelector(".carritoProductos2").innerHTML = juegoCarritoHTML;
    document.querySelector('.totalPrecio').innerHTML = `$${total}`;
}

actualizarBtnCarrito();
cargarJuegosSeleccionados();


//Variables Muestra Carrito
let btnCarrito2 = document.querySelector('#iconoCarrito2');
let btnCerrarCarrito = document.querySelector('#cerrarCarrito');

let divCarritoProductos = document.querySelector('.carrito carritoProductos');

//Abrir Carrito
btnCarrito2.onclick = () => {
    document.querySelector('.carrito2').classList.add("active");
}
//Cerrar Carrito
btnCerrarCarrito.onclick = () => {
    document.querySelector('.carrito2').classList.remove("active");
}

document.querySelector('#vaciarCarrito').addEventListener('click', eliminarCarrito);

function detalleJuego() {
    let id = localStorage.getItem("verJuego");
    let juego = buscarJuego(id);
    let divDetalleJuego = document.querySelector("#detalleJuego");
    let juegoDetalleHtml = "";
    let divPrecio = document.querySelector('#divPrecio');
    let divPrecioHTML = "";

    let agregarHTML = "";
    juegoDetalleHtml += `
    <div class="col-md-6 d-flex justify-content-center border-end">
    <div class="d-flex flex-column">
        <img src="${juego.imagen}">
    </div>
    </div>
    <div class="col-md-6 d-flex justify-content-center">
    <div class="d-flex flex-column">
        <h3 class="text-center pt-4 fw-bold text-decoration-underline">${juego.titulo}</h3>
        ${juego.detalles}
        <h5>Trailer:</h5>
        ${juego.iframe}
        <h5> Disponible en:</h5>
            <div id="muestradisponible" class="muestradisp d-flex justify-content-around"></div> 
        </div>
    </div>
    `;
    divDetalleJuego.innerHTML = juegoDetalleHtml;


    divPrecioHTML += `
    <div class="col-md-12 border-top">
                <div class="d-flex justify-content-between mt-4">
                    <a href="./index.html"><img class="imgVolver" src="./img/volver.png"></a>
                    <h5>Precio: $${juego.precio}</h5>
                    <button onclick="agregarAlCarrito(${juego.id});" type="button" class="btn btn-dark"><i class='bx bx-cart-add addCarritoIconDetalle'></i></button>
                </div>
            </div>
    `;
    divPrecio.innerHTML = divPrecioHTML;

    let divDisponible = document.querySelector("#muestradisponible");
    //conectarApi
    if (juego.disponible == 1){
        fetch('../api/pc.json')
        .then((respuesta) => respuesta.json())
        .then((contenido) => {
            contenido.forEach(game => {

                agregarHTML += `
                <div class="d-flex justify-content-around">
                    <img class="imgdisp" src= '${game.imagen}'>
                </div>
                `;
                divDisponible.innerHTML = agregarHTML;
            });
        })
    }else if (juego.disponible == 2) {
        fetch('../api/pcps5.json')
        .then((respuesta) => respuesta.json())
        .then((contenido) => {
            contenido.forEach(game => {
                agregarHTML += `
                <div class="d-flex justify-content-around">
                    <img class="imgdisp" src= '${game.imagen}'>
                </div>
                `;
                divDisponible.innerHTML = agregarHTML;
            });
        })
    }else {
        fetch('../api/pcpsxbox.json')
        .then((respuesta) => respuesta.json())
        .then((contenido) => {
            contenido.forEach(game => {

                agregarHTML += `
                <div class="d-flex justify-content-around">
                    <img class="imgdisp" src= '${game.imagen}'>
                </div>
                `;
                divDisponible.innerHTML = agregarHTML;
            });
        })
    }
}

detalleJuego();