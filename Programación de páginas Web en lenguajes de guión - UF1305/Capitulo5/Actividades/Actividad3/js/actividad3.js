window.onload = function() {
    var btnEnviar = document.getElementById('btnEnviar');
    var refWindow = "";
    btnEnviar.onclick = function() {
        var url = document.getElementById('url').value;
        if (refWindow === "") {
            refWindow = window.open(url);
        } else {
            refWindow.location.href = url;
        }
    };
};
