"use strict";
//definicion de variables
var formulario = document.getElementById("formulario"); //any = cualquier tipo de valor
var rut = document.getElementById("rut");
var digito = document.getElementById("digito");
var telefono = document.getElementById("telefono");
var mensaje = document.getElementById("mensaje");
var validacion = false;
var rutCompleto = console.log(rut.value + "-" + digito.value);
console.log(rutCompleto);
//formulario enviado
formulario.addEventListener("submit", function (evento) {
    //validamos el largo del numero de telefono y el rut
    if (verificarTelefono(telefono.value) /*&& validarRut(rut.value, digito.value)*/) {
        validacion = true;
    }
    else {
        validacion = false;
    }
    //verificamos si cambio el valor de validacion
    if (validacion == true) {
        //enviamos los datos
        formulario.style.display = "none";
        mensaje.style.display = "block";
        mensaje.innerHTML = "Hemos recibido sus datos, pronto nos estaremos comunicando con usted";
        mensaje.style.color = "white";
    }
    else {
        //mostramos error y limpiamos
        mensaje.style.display = "block";
        mensaje.innerHTML = "ERROR";
        mensaje.style.color = "white";
        //limpiarDatos();
    }
    evento.preventDefault();
});
/*Funcion verificarTelefono: Encargada de verificar el largo de caracteres del telefono
movil ingresado en el formulario.*/
function verificarTelefono(a) {
    if (a.length == 9) {
        return true;
    }
    return false;
}
/*Funcion limpiarDatos: Encargada de eliminar todos los datos del formulario en el momemto
que el usuario presiona el botón.*/
function limpiarDatos() {
    formulario.reset();
}
/*Funcion validarRut: Encargada de validar el rut ingresado por el usuario.*/
function validarRut(rut, digito) {
    if (!/^[0-9]$/.test(rut.value) && !/[0-9kK]$/.test(digito.value)) {
        return false;
    }
    return true;
}
