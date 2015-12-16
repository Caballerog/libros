function testCPNacional(campo){
  var valor = campo.value;
  var expresion = "^([0-5][0-2]\\d{3}|(070|071|080)\\d{2})$";
  var rExp = new RegExp(expresion);
  return rExp.test(valor);
}
