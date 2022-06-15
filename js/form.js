function validarFormulario() {
    let nombre = document.querySelector('#nombre').value;
    let email = document.querySelector('#email').value;
    let direccion = document.querySelector('#direccion').value;
    let numero = document.querySelector('#numero').value;
    let departamento = document.querySelector('#departamento').value;
    let piso = document.querySelector('#piso').value;
    let telefono = document.querySelector('#telefono').value;
    let localidad = document.querySelector('#localidad').value;
    let provincia = document.querySelector('#provincia').value;
    let resultadoForm = document.querySelector('#nvoForm');

    let validarEmail = document.querySelector(".validarEmail");
    //indexOf es lo mismo que includes
    (email.indexOf("@") > -1 && email.indexOf(".") > -1) ? validarEmail.innerHTML = '<span class="obligatorio validarEmail">*</span>': validarEmail.innerHTML = '<span class="obligatorio validarEmail">* El email ingresado es Incorrecto (obligatorio @ y .)</span>';

    if (nombre.length == 0 || email.length == 0 || email.length == 0 || direccion.length == 0 || numero.length == 0 || telefono.length == 0 || localidad.length == 0 || provincia.length == 0) {
        Swal.fire({
            position: 'bottom-end',
            text: 'Por favor complete los campos vacios',
            color: 'black',
            background: '#DF3731',
            showConfirmButton: false,
            width: '21vw',
            timer: 1500
        })
    }
}
const btnEnviar = document.getElementById("btnEnviarForm");
document.querySelector('#btnEnviarForm').addEventListener("click", validarFormulario);



// Email JS

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

emailjs.init('P6GdZC-ZfzuCo0Vbf');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

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
                btnEnviar.value = 'Enviar';
                Toastify({
                    text: "El email ingresado no es válido",
                    duration: 1000,
                    gravity: 'bottom',
                    style: {
                        background: '#E16F3D',
                        color: "black",
                    }
                }).showToast();
            });
    });
