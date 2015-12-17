function testTelefonoMovil(campo) {
    var valor = campo.value;
    var expresion = "^(\\+\\d{2,3}|00\\d{2})?[67]\\d{8}$";
    var rExp = new RegExp(expresion);
    return rExp.test(valor);
}
