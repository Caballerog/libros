function testURL(campo){
var valor = campo.value;
var expresion = "^https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%\\._\\+~#=]{2,256}\\.empresa.com$";
var rExp = new RegExp(expresion);
return rExp.test(valor);
}
