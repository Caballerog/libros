function testTelefonoFijoNacional(campo) {
    var valor = campo.value;
    var expresion = "^[89]\\d{8}$";
    var rExp = new RegExp(expresion);
    return rExp.test(valor);
}
