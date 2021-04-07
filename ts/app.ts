//definicion de variables
let formulario:any = document.getElementById("formulario");       //any = cualquier tipo de valor
let rut:any;
let digito:any;
let telefono:any;
let mensaje:any = document.getElementById("mensaje");
let validacion:boolean = false;
let rutCompleto:any;

//limpiar pantalla
formulario.addEventListener("onclick",function (evento:any){
  limpiarDatos();
  evento.preventDefault();
});

//formulario enviado
formulario.addEventListener("submit", function (evento:any){
    rut = document.getElementById("rut");
    digito = document.getElementById("digito");
    telefono = document.getElementById("telefono");
    rutCompleto = rut.value + "-" + digito.value;
    //validamos el largo del numero de telefono y el rut
    if(verificarTelefono(telefono.value) && validarRut(rutCompleto)){
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
        //mostramos error
        alert("Datos incorrectos, por favor intente nuevamente.");
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
  formulario ['nombre'].value = '';
  formulario ['apellido'].value = '';
  formulario ['rut'].value = '';
  formulario ['digito'].value = '';
  formulario ['correo'].value =  '';
  formulario ['telefono'].value = '';
  formulario ['descripcion'].value = '';
  formulario ['nivel'].value = '';
  //clearArray();
  //clearArray();

}

/*Funcion clearArray: complementaría a limpiarDatos*/
function clearArray(array:any){
  for (let i = 0; i < array.length; ++i) {
    array[i].checked = false;
  }
}
/*Funcion validarRut: Valida si el rut ingresado es válido y además no tiene puntos.*/
function validarRut(rutt:any) {
    if (rutt.toString().trim() != '' && rutt.toString().indexOf('-') > 0) {
        var caracteres = new Array();
        var serie = new Array(2, 3, 4, 5, 6, 7);
        var dig = rutt.toString().substr(rutt.toString().length - 1, 1);
        rutt = rutt.toString().substr(0, rutt.toString().length - 2);
        var dv:any;
        for (var i = 0; i < rutt.length; i++) {
            caracteres[i] = parseInt(rutt.charAt((rutt.length - (i + 1))));
        }

        var sumatoria = 0;
        var k = 0;
        var resto = 0;

        for (var j = 0; j < caracteres.length; j++) {
            if (k == 6) {
                k = 0;
            }
            sumatoria += parseInt(caracteres[j]) * serie[k];
            k++;
        }

        resto = sumatoria % 11;
        dv = 11 - resto;

        if (dv == 10) {
            dv = "K";
        }
        else if (dv == 11) {
            dv = 0;
        }

        if (dv.toString().trim().toUpperCase() == dig.toString().trim().toUpperCase())
            return true;
        else
            return false;
    }
    else {
        return false;
    }
}
