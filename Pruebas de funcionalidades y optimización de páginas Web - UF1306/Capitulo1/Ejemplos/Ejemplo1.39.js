function testCasillas(casillas, min, max) {
    min = (typeof min === 'undefined') ? 0 : min;
    max = (typeof max === 'undefined') ? "" : max;
    var seleccionados = casillas.querySelectorAll('input[type="checkbox"]:checked');
    if (seleccionados.length < min || seleccionados.length > max) {
        return false;
    } else {
        return seleccionados;
    }
}
