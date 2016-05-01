function testTexto(campo, min, max) {
    min = (typeof min === 'undefined') ? 0 : min;
    max = (typeof max === 'undefined') ? "" : max;
    var valor = campo.value;
    var expresion = "^[a-zA-Z\\sá-úÁ-Ú'à-ùÀ-Ùä-üÄ-Ü]{" + min + "," + max + "}$";
    var rExp = new RegExp(expresion);
    return rExp.test(valor);
}
function testTextoNumero(campo, min, max) {
    min = (typeof min === 'undefined') ? 0 : min;
    max = (typeof max === 'undefined') ? "" : max;
    var valor = campo.value;
    var expresion = "^[a-zA-Z0-9\\sá-úÁ-Ú'à-ùÀ-Ùä-üÄ-Ü\º\ª\-]{" + min + "," + max + "}$";
    var rExp = new RegExp(expresion);
    return rExp.test(valor);
}



function testTelefonoFijo(campo) {
    var valor = campo.value;
    var expresion = "^(\\+\\d{2,3}|00\\d{2})?[89]\\d{8}$";
    var rExp = new RegExp(expresion);
    return rExp.test(valor);
}

function testTelefonoMovil(campo) {
    var valor = campo.value;
    var expresion = "^(\\+\\d{2,3}|00\\d{2})?[67]\\d{8}$";
    var rExp = new RegExp(expresion);
    return rExp.test(valor);
}

function testFecha(campo) {
    var valor = campo.value;
    var expresion = "(^(((0[1-9]|1\\d|2[0-8])\/(0[1-9]|1[0-2])) | ((31\/(0[13578]|1[02])) | ((29|30)\/(0[1,3-9]|1[0-2]))))\/\\d{4}$) | (^(29\/02)\/( (0[48]00|[13579][26]00|[2468][048]00) | (\\d{2})?(0[48]|[2468][048]|[13579][26]))$)";
    var rExp = new RegExp(expresion);
    return rExp.test(valor);
}

function testLista(select) {
    var index = select.selectedIndex;
    return (index === null) ? -1 : index;
}



function testDNI(campo) {
    var dni = campo.value;
    var numero;
    var letr;
    var letra;
    var expresion_regular_dni;

    expresion_regular_dni = /^\d{8}[a-zA-Z]$/;

    if (expresion_regular_dni.test(dni) === true) {
        numero = dni.substr(0, dni.length - 1);
        letr = dni.substr(dni.length - 1, 1);
        numero = numero % 23;
        letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
        letra = letra.substring(numero, numero + 1);
        if (letra != letr.toUpperCase()) {
            return false;
        }else{
            return true;
        }
    } else {
        return false;
    }
}


function testNumeroTarjeta(campo){
  var valor = campo.value;
  var expresion = "^[a-zA-Z0-9]{3}\/[0-9]{8}\/[A-Z]{2}$";
  var rExp = new RegExp(expresion);
  return rExp.test(valor);

}
