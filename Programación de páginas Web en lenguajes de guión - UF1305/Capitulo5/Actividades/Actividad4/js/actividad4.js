window.onload = function() {
    var btnEnviar = document.getElementById('btnEnviar');
    var refWindow = "";
    var listVentanas = [];
    btnEnviar.onclick = function() {

        var url = document.getElementById('url').value;
        var posicion = buscarVentana(url);

        if (posicion === -1) {
            refWindow = window.open(url);
            listVentanas.push({
                url: url,
                refWindow: refWindow
            });
        } else {
            listVentanas[posicion].refWindow.location.href = url;
            listVentanas[posicion].refWindow.focus();
        }
    };

    function buscarVentana(url) {
        var longitud = listVentanas.length;
        var contador = 0;
        var encontrado = false;
        while (contador < longitud) {
            if (listVentanas[contador].url === url) {
                return contador;
            } else {
                contador++;
            }
        }
        return -1;
    }
};
