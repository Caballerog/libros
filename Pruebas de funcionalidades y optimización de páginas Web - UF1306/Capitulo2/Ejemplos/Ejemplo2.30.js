function abrirVentana() {
   refWindow = window.open('','','width=200, height=200'); // Abre una ventana
   refWindow.document.write("<p>Ventana abierta</p>");
}
function moverVentana() {
   refWindow.moveBy(250, 250);
}
