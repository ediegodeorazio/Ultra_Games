//Variables Muestra Carrito
let btnCarrito = document.querySelector('#iconoCarrito');
let divCarrito = document.querySelector('.carrito');
let btnCerrarCarrito = document.querySelector('#cerrarCarrito');

let divCarritoProductos = document.querySelector('.carrito carritoProductos');

//Abrir Carrito
btnCarrito.onclick = () =>{
    divCarrito.classList.add("active");
}
//Cerrar Carrito
btnCerrarCarrito.onclick = () =>{
    divCarrito.classList.remove("active");
}