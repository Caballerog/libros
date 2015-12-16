function testMinMax(campo, min, max) {
    min = (typeof min === 'undefined') ? 0 : min;
    max = (typeof max === 'undefined') ? "" : max;
    var valor = campo.value;
    var expresion = "^.{" + min + "," + max + "}$";
    var rExp = new RegExp(expresion);
    return rExp.test(valor);
}
