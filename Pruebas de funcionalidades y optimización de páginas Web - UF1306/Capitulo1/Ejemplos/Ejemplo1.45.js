window.onload = function() {
    txtNombre.addEventListener('input', validarTexto, false);
    txtTelefonoFijo.addEventListener('input', validarTelefonoFijo, false);
    txtTelefonoMovil.addEventListener('input', validarTelefonoMovil, false);
    txtCP.addEventListener('input', validarCP, false);
    txtFNac.addEventListener('input', validarFecha, false);
    txtEmail.addEventListener('input', validarEmail, false);
    selCoche.addEventListener('change', validarLista, false);
    casillasExtra.addEventListener('change', validarCasillas, false);
    butValidar.addEventListener('click', validaForm, false);
};
