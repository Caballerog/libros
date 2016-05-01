function testEntero(campo) {
    var valor = campo.value;
    var expresion = "^-?[0-9]$";
    var rExp = new RegExp(expresion);
    return rExp.test(valor);
}
