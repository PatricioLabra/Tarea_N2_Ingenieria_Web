//definicion de variables
let formulario:any = document.getElementById("formulario");       //any = cualquier tipo de valor
let rut:any = document.getElementById("rut");
let digito:any = document.getElementById("digito");
let telefono:any = document.getElementById("telefono");
let mensaje:any = document.getElementById("mensaje");
let validacion:boolean = false;
let rutCompleto:any= console.log(rut.value + "-"+ digito.value);

console.log(rutCompleto);
//formulario enviado
formulario.addEventListener("submit", function (evento:any){

    //validamos el largo del numero de telefono y el rut
    if(verificarTelefono(telefono.value) /*&& validarRut(rut.value, digito.value)*/){
      validacion = true;

    }else{
      validacion = false;
    }

    //verificamos si cambio el valor de validacion
    if(validacion == true){
      //enviamos los datos
      formulario.style.display = "none";
      mensaje.style.display = "block";
      mensaje.innerHTML = "Hemos recibido sus datos, pronto nos estaremos comunicando con usted";
      mensaje.style.color = "white";

    }else{
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
function verificarTelefono( a:any):boolean{
 if (a.length == 9) {
    return true;
  }
  return false;
}
/*Funcion limpiarDatos: Encargada de eliminar todos los datos del formulario en el momemto
que el usuario presiona el botón.*/
function limpiarDatos(){
  formulario.reset();
}
/*Funcion validarRut: Encargada de validar el rut ingresado por el usuario.*/
function validarRut(rut:any,digito:any) {
  		if (!/^[0-9]$/.test( rut.value ) && !/[0-9kK]$/.test(digito.value)){
      return false;
    }
    return true;
}
