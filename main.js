let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generar() {
    let numeroDigitado = parseInt(cantidad.value);
    //console.log(numeroDigitado)     solo pa validar 

    if (numeroDigitado < 8) {
        alert("La cantidad de caracteres tiene que ser mayor que 8");
        return; // Salir de la función si no cumple la condición
    }

    let password = '';
    for (let i = 0; i < numeroDigitado; i++) {
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);
        password += caracterAleatorio;
    }
    //console.log('password generada:' + password);
    contrasena.value = password;

    validarContrasena(password); // Llamar a la función para validar la contraseña
}

function validarContrasena(password) {
    const tieneNumero = /\d/.test(password);
    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneEspecial = /[!@#$%^&*()]/.test(password);
    const tieneLongitud = password.length >= 8;

    let mensaje = "";

    if (!tieneLongitud) {
        mensaje = "La contraseña debe contener al menos 8 caracteres.";
    } else if (!tieneNumero) {
        mensaje = " Contraseña es débil, la contraseña debe contener al menos un número.";
    } else if (!tieneMayuscula) {
        mensaje = "La contraseña debe contener al menos una letra mayúscula.";
    } else if (!tieneEspecial) {
        mensaje = "La contraseña debe contener al menos un carácter especial.";
    } else {
        mensaje = "Contraseña es fuerte.";
    }

    // Mostrar el mensaje
    const mensajeValidacion = document.getElementById('mensaje-validacion');
    mensajeValidacion.textContent = mensaje;
}

function limpiar() {
    contrasena.value = "";  // Limpiar el valor del campo de contraseña
    document.getElementById('mensaje-validacion').textContent = ""; // Limpiar el mensaje de validación
}

/*numeros y cadenas de texto
let texto = "texto";
console.log(typeof cantidad);
*/

/*condicionales
if(cantidad < 8){
    alert("La cantidad de caracteres tiene que ser mayor que 8")
}
*/
