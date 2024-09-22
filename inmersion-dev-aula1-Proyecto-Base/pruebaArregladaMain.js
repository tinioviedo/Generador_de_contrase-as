let cantidad = document.getElementById('cantidad');
let contrasena = document.getElementById('contrasena');

function generar() {
    let numeroDigitado = parseInt(cantidad.value);

    if (numeroDigitado < 8) {
        alert("La cantidad de caracteres tiene que ser mayor que 8");
        return;
    }

    const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let password = '';
    for (let i = 0; i < numeroDigitado; i++) {
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        password += caracterAleatorio;
    }

    contrasena.value = password;
    validarContrasena(password); // Llamar a la validación
}

function validarContrasena(password) {
    const tieneNumero = /\d/.test(password);
    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneEspecial = /[!@#$%^&*()]/.test(password);
    const tieneLongitud = password.length >= 8;

    let mensaje = "";

    if (!tieneLongitud) {
        mensaje = "La contraseña debe tener al menos 8 caracteres.";
    } else if (!tieneNumero) {
        mensaje = "La contraseña debe contener al menos un número.";
    } else if (!tieneMayuscula) {
        mensaje = "La contraseña debe contener al menos una letra mayúscula.";
    } else if (!tieneEspecial) {
        mensaje = "La contraseña debe contener al menos un carácter especial.";
    } else {
        mensaje = "La contraseña es fuerte.";
    }

    document.getElementById('mensaje-validacion').textContent = mensaje; // Mostrar el mensaje
}

function limpiar() {
    contrasena.value = ""; // Limpiar el campo de contraseña
    document.getElementById('mensaje-validacion').textContent = ""; // Limpiar el mensaje de validación
}
