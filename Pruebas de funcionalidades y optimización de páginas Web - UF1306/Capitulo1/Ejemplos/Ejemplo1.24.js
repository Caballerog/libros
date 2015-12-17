function testTelefonoMovilNacional(campo) {
    var valor = campo.value;
    var expresion = "^[67]\\d{8}$";
    var rExp = new RegExp(expresion);
    return rExp.test(valor);
}
