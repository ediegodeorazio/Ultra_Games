function alertJuegoAgregado(){
    Toastify({
        text: "Añadiste el juego al carrito",
        duration: 1000,
        gravity: 'bottom',
        style: {
            background: "#85FA33",
            color:"black",
        }
        }).showToast();
}

function alertVaciarCarrito(){
    Toastify({
        text: "Vaciaste el carrito correctamente",
        duration: 1000,
        gravity: 'bottom',
        style: {
            background: '#33F7FA',
            color:"black",
        }
        }).showToast();
}

function alertJuegoEliminado(){
    Toastify({
        text: "Eliminaste un juego correctamente",
        duration: 1000,
        gravity: 'bottom',
        style: {
            background: '#E16F3D',
            color:"black",
        }
        }).showToast();
}

