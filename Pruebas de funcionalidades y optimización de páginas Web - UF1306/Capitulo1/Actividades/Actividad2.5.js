// El teléfono en EEUU está compuesto por
// Código de área (optativo) con paréntesis: (123)
// Prefijo, 3 números y un guión: 123-
// Número, 3 números y un guión: 123-
// Número final, 4 números: 1234

function testTelefonoEEUU(campo) {
    var valor = campo.value;
    var expresion = "^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$";
    var rExp = new RegExp(expresion);
    return rExp.test(valor);
}
