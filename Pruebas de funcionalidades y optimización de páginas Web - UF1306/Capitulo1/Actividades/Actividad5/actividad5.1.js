var butValidar = window.document.getElementById("butValidar");
var txtNombre = window.document.getElementById('txtNombre');
var txtEmail = window.document.getElementById('txtEmail');
var txtObservaciones = window.document.getElementById('txtObservaciones');
var validar = window.document.getElementById("divValidar");

window.onload = function() {
    txtNombre.addEventListener('input', validaForm, false);
    txtEmail.addEventListener('input', validaForm, false);
    txtObservaciones.addEventListener('input', validaForm, false);

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
    validar.innerHTML = '<div id="divValNombre"> Nombre: </div><div id="divValEmail"> Email: </div> <div id="divValObservaciones">Observaciones: </div>';
};

function validaForm() {
    renderHelp();
    !testTexto(txtNombre, 4, 50) ? renderError('divValNombre') : renderOk('divValNombre');
    !testEmail(txtEmail) ? renderError('divValEmail') : renderOk('divValEmail');
    !testObservaciones(txtObservaciones) ? renderError('divValObservaciones') : renderOk('divValObservaciones');

    }
