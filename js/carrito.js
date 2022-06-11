//busca un juego (para que se devuelva por ID), luego me devuelve el objeto
function buscarJuego(id) {
    let juegos = cargarJuegosLS()

    return juegos.find(x => x.id == id); //x es una variable que le paso a find
}
// cargar juegos al carrito y recupero el array carrito
function cargarJuegosCarrito() {
    if (localStorage.getItem("carrito")) {
        return JSON.parse(localStorage.getItem("carrito"));
    }
    return [];
}
// voy pasando por id para agregarlo al array carrito y se lo paso a buscarJuego
function agregarAlCarrito(id) {
    let juegosCarrito = cargarJuegosCarrito();
    const posicionCarrito = juegosCarrito.findIndex(x => x.id == id); // me devuelve el nro de id y tambien el index donde se encuentra

    //seteo la cantidad en -1 si no existe el componente ya agregado ( -1 se pone cuando no existe)
    if (posicionCarrito === -1){
        const juego = buscarJuego(id);
        juego.cantidad = 1;
        juegosCarrito.push(juego);
    }else {
        //si ya se fue agregado le sumo uno
        juegosCarrito[posicionCarrito].cantidad += 1;
    }
    localStorage.setItem("carrito", JSON.stringify(juegosCarrito));
    actualizarBtnCarrito();
    cargarJuegosCarrito();
    alertJuegoAgregado();
}

//remueve todo el local storage
function eliminarCarrito() {
    localStorage.removeItem("carrito");
    actualizarBtnCarrito();
    cargarJuegosSeleccionados();
    //llamo alerta
    alertVaciarCarrito();
}
// Actualiza el botón carrito ( cambia numero del badge) y lo actualiza
function actualizarBtnCarrito() {
    let juegosCarrito = cargarJuegosCarrito();
    let contenido = `<button type="button" class="btn btn-dark position-relative">
    <i class='bx bxs-cart-download carritoBox'></i>
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        ${juegosCarrito.length}</span>
</button>`
    document.querySelector('#iconoCarrito').innerHTML = contenido;
    cargarJuegosSeleccionados();
};

// sumo una cantidad al carrito
function agregarJuego(id){
    let juegosCarrito = cargarJuegosCarrito();
    const posicionCarrito = juegosCarrito.findIndex(x => x.id == id);
    juegosCarrito[posicionCarrito].cantidad += 1;
    localStorage.setItem/("carrito", JSON.stringify(juegosCarrito));
    actualizarBtnCarrito();
    cargarJuegosCarrito();
}

//Elimino de a un componente buscandolo por id
function eliminarJuego(id){
    let juegosCarrito = cargarJuegosCarrito();
    const posicionCarrito = juegosCarrito.findIndex(x => x.id == id);
    juegosCarrito[posicionCarrito].cantidad -= 1;

    if (juegosCarrito[posicionCarrito].cantidad == 0) {
        juegosCarrito = juegosCarrito.filter(x => x.id != id);
    }

    localStorage.setItem("carrito", JSON.stringify(juegosCarrito));
    actualizarBtnCarrito();
    cargarJuegosSeleccionados;
    alertJuegoEliminado();
}

//función para cargar juegos seleccionados
function cargarJuegosSeleccionados() {
    let juegos = cargarJuegosCarrito();
    let juegoCarritoHTML = "";
    let total = 0;
    //Recorro el array e inserto en HTML
    for (const juego of juegos){
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
    document.querySelector(".carritoProductos").innerHTML = juegoCarritoHTML;
    document.querySelector('.totalPrecio').innerHTML = `$${total}`;
}
