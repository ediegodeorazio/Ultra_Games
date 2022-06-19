function mostrarEnFinalizarCompra(){
    if(document.querySelector('.resumenDeCompra')){
        let juegos = cargarJuegosCarrito(); 
        let resumenCompra = document.querySelector('.resumenDeCompra');
        let resumenCompraHTML = "";
        let divResumen = document.querySelector("#enviarDetalles");
        let divResumenHTML = "";

        if(juegos.length == 0){
            resumenCompraHTML = `
            <div class="tablaMuestra">
                <p>No se encontraron productos seleccionados.</p>
            </div>`
            ;
            resumenCompra.innerHTML = resumenCompraHTML;
        } else {
            let total = 0;
            resumenCompraHTML = `
            <div class="tablaMuestra">
                <table class="tablaContenido">
                    <tr class="trTableMain">
                        <th>#</th>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio Unitario</th>
                        <th>SubTotal</th>
                    </tr>
            `;

            for (const juego of juegos) {
                let subtotal = juego.precio * juego.cantidad;
                resumenCompraHTML += `
                <tr class="trTableItems">
                    <td><img src="${juego.imagen}" alt="${juego.titulo}" class="detalle-img"></td>
                    <td>${juego.titulo}</td>
                    <td>x${juego.cantidad}</td>
                    <td>$${juego.precio}</td>
                    <td>$${subtotal}</td>
                </tr>
                `;
                total += juego.precio * juego.cantidad;
                divResumenHTML += `
                <ul>
                <li><input type="text" name="detallesjuegos" value=" ${juego.titulo} x${juego.cantidad}: $${subtotal}"></li>
                </ul>
                `;
            }

            resumenCompraHTML += `
            </table>
                <div class="total">
                    <div class="total-title">Total:</div>
                    <div class="total-price">$${total}</div>
                </div>
            </div>
            `;
            divResumenHTML += `<input type="text" name="totalpedido" value="Total: $${total}">`;
            resumenCompra.innerHTML = resumenCompraHTML;
            divResumen.innerHTML += divResumenHTML;
        }
    }
}

mostrarEnFinalizarCompra();