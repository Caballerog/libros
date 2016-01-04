function validarTexto() {
    !testTexto(txtNombre, 3, 100) ? renderError('divValNombre') : renderOk('divValNombre');
}

function validarTelefonoFijo() {
    !testTelefonoFijo(txtTelefonoFijo) ? renderError('divValTlfF') : renderOk('divValTlfF');
}

function validarTelefonoMovil() {
    !testTelefonoMovil(txtTelefonoMovil) ? renderError('divValTlfM') : renderOk('divValTlfM');
}

function validarCP() {
    !testCPNacional(txtCP) ? renderError('divValCP') : renderOk('divValCP');
}

function validarEmail() {
    !testEmail(txtEmail) ? renderError('divValEmail') : renderOk('divValEmail');
}

function validarFecha() {
    !testFecha(txtFNac) ? renderError('divValFNac') : renderOk('divValFNac');
}

function validarLista() {
    !testLista(selCoche) ? renderError('divValSelCoche') : renderOk('divValSelCoche');
}

function validarCasillas() {
    !testCasillas(casillasExtra, 1, 3) ? renderError('divValCExtra') : renderOk('divValCExtra');
}
