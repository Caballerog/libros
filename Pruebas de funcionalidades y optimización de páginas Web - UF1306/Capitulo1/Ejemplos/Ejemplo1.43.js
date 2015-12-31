var butValidar = window.document.getElementById("butValidar");
var txtNombre = window.document.getElementById('txtNombre');
var txtTelefonoFijo = window.document.getElementById("txtTelefonoFijo");
var txtTelefonoMovil = window.document.getElementById("txtTelefonoMovil");
var txtCP = window.document.getElementById("txtCP");
var txtFNac = window.document.getElementById("txtFNac");
var txtEmail = window.document.getElementById("txtEmail");
var selCoche = window.document.getElementById("selCoche");
var casillasExtra = window.document.getElementById("divCasillas");
var validar = window.document.getElementById("divValidar");

window.onload = function() {
    txtNombre.addEventListener('input', validaForm, false);
    txtTelefonoFijo.addEventListener('input', validaForm, false);
    txtTelefonoMovil.addEventListener('input', validaForm, false);
    txtCP.addEventListener('input', validaForm, false);
    txtFNac.addEventListener('input', validaForm, false);
    txtEmail.addEventListener('input', validaForm, false);
    selCoche.addEventListener('change', validaForm, false);
    casillasExtra.addEventListener('change', validaForm, false);
    butValidar.addEventListener('click', validaForm, false);
};

var renderError = function(e) {
    var span = window.document.createElement('span');
    span.innerHTML = "<img src='img/bad.png'>";
    window.document.getElementById(e).appendChild(span);
};
var renderOk = function(e) {
    var span = window.document.createElement('span');
    span.innerHTML = "<img src='img/ok.png'>";
    window.document.getElementById(e).appendChild(span);
};
var renderHelp = function() {
    validar.innerHTML = '<div id="divValNombre"> Nombre: </div> <div id = "divValTlfF"> Teléfono Fijo:</div><div id="divValTlfM"> Teléfono Móvil:</div> <div id="divValCP">CP:</div><div id="divValFNac">Fecha Nacimiento:</div><div id="divValEmail">Email: </div><div id="divValSelCoche">Tipo de coche:</div><div id="divValCExtra">Extras de coche:</div>';
};

function validaForm() {
    renderHelp();
    !testTexto(txtNombre, 3, 100) ? renderError('divValNombre') : renderOk('divValNombre');
    !testTelefonoFijo(txtTelefonoFijo) ? renderError('divValTlfF') : renderOk('divValTlfF');
    !testTelefonoMovil(txtTelefonoMovil) ? renderError('divValTlfM') : renderOk('divValTlfM');
    !testCPNacional(txtCP) ? renderError('divValCP') : renderOk('divValCP');
    !testEmail(txtEmail) ? renderError('divValEmail') : renderOk('divValEmail');
    !testFecha(txtFNac) ? renderError('divValFNac') : renderOk('divValFNac');
    !testLista(selCoche) ? renderError('divValSelCoche') : renderOk('divValSelCoche');
    !testCasillas(casillasExtra, 1, 3) ? renderError('divValCExtra') : renderOk('divValCExtra');
}
