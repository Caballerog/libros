function testColor(campo) {
    var valor = campo.value;
    var expresion = "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$";
    var rExp = new RegExp(expresion);
    return rExp.test(valor);
}
