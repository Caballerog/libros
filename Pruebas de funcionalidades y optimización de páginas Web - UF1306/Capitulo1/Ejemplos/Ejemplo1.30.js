function testURL(campo) {
    var valor = campo.value;
    var expresion = "^https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%\\._\\+~#=]{2,256}\\.[a-z]{2,6}$";
    var rExp = new RegExp(expresion);
    return rExp.test(valor);
}
