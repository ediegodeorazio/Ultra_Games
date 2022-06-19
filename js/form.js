
const btnEnviar = document.getElementById("btnEnviarForm");

function mensajeEnviado() {
    Toastify({
        text: "Se ha enviado el email de confirmacion correctamente",
        duration: 2000,
        gravity: 'bottom',
        style: {
            background: '#9edc12',
            color: "black",
        }
    }).showToast();
}

function mensajeFallido() {
    Toastify({
        text: "Algo salio mal enviado los datos...",
        duration: 1000,
        gravity: 'bottom',
        style: {
            background: '#E16F3D',
            color: "black",
        }
    }).showToast();
}

function validarFormulario() {
    Toastify({
        text: "Debes completar todos los campos...",
        duration: 3000,
        gravity: 'bottom',
        style: {
            background: '#E16F3D',
            color: "black",
        }
    }).showToast();
}

emailjs.init('P6GdZC-ZfzuCo0Vbf');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        if (nom.value === '' ||
            email.value === '' ||
            direccion.value === '' ||
            numero.value === '' ||
            telefono.value === '' ||
            localidad.value === '' ||
            prov.value === '') {
            return validarFormulario()
        }
        else {
            btnEnviar.value = 'Enviando...';

            const serviceID = 'default_service';
            const templateID = 'template_jkraciq';

            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    btnEnviar.value = 'Enviar';
                    mensajeEnviado();
                    setTimeout(() => {
                        window.location.href = "index.html";
                    }, 3000);
                    eliminarCarrito();
                }, (err) => {
                    console.log(err);

                    btnEnviar.value = 'Enviar';
                    mensajeFallido()
                })
        }
    })
