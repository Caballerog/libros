function testRadio(radio) {
    var seleccionado = radio.querySelectorAll('input[type="radio"]:checked');
    return (seleccionado.length == 0) ? false : seleccionado;
}
