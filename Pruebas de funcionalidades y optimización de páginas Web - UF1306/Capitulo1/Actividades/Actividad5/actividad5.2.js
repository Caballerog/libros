function testTexto(campo, min, max) {
    min = (typeof min === 'undefined') ? 0 : min;
    max = (typeof max === 'undefined') ? "" : max;
    var valor = campo.value;
    var expresion = "^[a-zA-Z\\sá-úÁ-Ú'à-ùÀ-Ùä-üÄ-Ü]{" + min + "," + max + "}$";
    var rExp = new RegExp(expresion);
    return rExp.test(valor);
}

function testEmail(campo) {
    var valor = campo.value;
    var expresion = "^[\\w\\-\\.]{3,}@([\\w\\-\\.]{2,})\\.[\\w\\-]{2,4}$";
    var rExp = new RegExp(expresion);
    return rExp.test(valor);
}

function testObservaciones(campo){
    var valor = campo.value;
    return valor.length>=5 && valor.length<300;
}
