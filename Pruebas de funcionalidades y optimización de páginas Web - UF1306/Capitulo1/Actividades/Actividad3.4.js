function testHTML(campo) {
    var valor = campo.value;
    var expresion = "^<[^>]+>.*<[^>]+/>$";
    var rExp = new RegExp(expresion);
    return rExp.test(valor);
}
