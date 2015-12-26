function testFecha(campo) {
    var valor = campo.value;
    var expresión = "(^(((0[1-9]|1\\d|2[0-8])\/(0[1-9]|1[0-2]))|((31\/(0[13578]|1[02])) | ((29|30)\/(0[1,3-9]|1[0-2]))))\/\\d{4}$)|(^(29(\/)02)(\/)((0[48]00| [13579][26]00| [2468][048]00) |(\\d{2})?(0[48]|[2468][048]|[13579][26]))$)";
    var rExp = new RegExp(expresion);
    return rExp.test(valor); 
}
