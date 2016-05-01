function testFecha(campo){
var valor = campo.value;
var expresion = "^(((0[1-9]|1\d|2[0-8])\/(0[1-9]|1[0-2]))|((31\/(0[13578]|1[02]))|((29|30)\/(0[1,3-9]|1[0-2]))))\/(\d{4}|\d{2})$";
var rExp = new RegExp(expresion);
return rExp.test(valor);
}
