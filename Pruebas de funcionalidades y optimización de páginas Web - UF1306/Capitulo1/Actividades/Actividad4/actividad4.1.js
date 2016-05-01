var butValidar = window.document.getElementById("butValidar");
var txtNombre = window.document.getElementById('txtNombre');
var txtDNI = window.document.getElementById('txtDNI');
var txtNumeroTarjeta = window.document.getElementById('txtNumeroTarjeta');
var selCompania = window.document.getElementById("selCompania");
var txtTelefonoFijo = window.document.getElementById("txtTelefonoFijo");
var txtTelefonoMovil = window.document.getElementById("txtTelefonoMovil");
var selTipoVia = window.document.getElementById("selTipoVia");
var txtNombreCalle = window.document.getElementById('txtNombreCalle');
var validar = window.document.getElementById("divValidar");

window.onload = function() {
    txtNombre.addEventListener('input', validaForm, false);
    txtDNI.addEventListener('input', validaForm, false);
    txtNumeroTarjeta.addEventListener('input', validaForm, false);
    selCompania.addEventListener('change', validaForm, false);
    selTipoVia.addEventListener('change',validaForm,false);
    txtNombreCalle.addEventListener('input',validaForm, false);
    txtNumeroCalle.addEventListener('input',validaForm, false);

    txtTelefonoFijo.addEventListener('input', validaForm, false);
    txtTelefonoMovil.addEventListener('input', validaForm, false);

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
    validar.innerHTML = '<div id="divValNombre"> Nombre: </div><div id="divValDNI"> DNI: </div> <div id="divValNumeroTarjeta">Numero de tarjeta: </div> <div id="divValSelCompania">Compañía de seguro:</div><div id = "divValTlfF"> Teléfono Fijo:</div><div id="divValTlfM"> Teléfono Móvil:</div> <div id="divValSelTipoVia">Tipo de vía:</div> <div id="divValNombreCalle"> Nombre de calle: </div> <div id="divValNumeroCalle"> Número de calle: </div>';
};

function validaForm() {
    renderHelp();
    !testTexto(txtNombre, 3, 100) ? renderError('divValNombre') : renderOk('divValNombre');
    !testDNI(txtDNI) ? renderError('divValDNI') : renderOk('divValDNI');
    !testNumeroTarjeta(txtNumeroTarjeta) ? renderError('divValNumeroTarjeta') : renderOk('divValNumeroTarjeta');
    !testLista(selCompania) ? renderError('divValSelCompania') : renderOk('divValSelCompania');
    !testTelefonoFijo(txtTelefonoFijo) ? renderError('divValTlfF') : renderOk('divValTlfF');
    !testTelefonoMovil(txtTelefonoMovil) ? renderError('divValTlfM') : renderOk('divValTlfM');
    !testLista(selTipoVia) ? renderError('divValSelTipoVia') : renderOk('divValSelTipoVia');
    !testTexto(txtNombreCalle, 3, 100) ? renderError('divValNombreCalle') : renderOk('divValNombreCalle');
    !testTextoNumero(txtNumeroCalle, 1, 100) ? renderError('divValNumeroCalle') : renderOk('divValNumeroCalle');

    }
