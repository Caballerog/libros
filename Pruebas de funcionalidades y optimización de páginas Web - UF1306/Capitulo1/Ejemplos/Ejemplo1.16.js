function testEmail(campo) {
    var valor = campo.value;
    var expresion = "^[\\w\\-\\.]{3,}@([\\w\\-\\.]{2,})\\.[\\w\\-]{2,4}$";
    var rExp = new RegExp(expresion);
    return rExp.test(valor);
}
