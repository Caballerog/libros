window.onload = function(){
  var btnAtras = document.getElementById('btnAtras');
  var btnAdelante = document.getElementById('btnAdelante');
  var btnDesplazarte = document.getElementById('btnDesplazarte');
  var txtPosicion = document.getElementById('txtPosicion');
  btnAtras.onclick = function(){move(-1);};
  btnAdelante.onclick = function(){move(1);};
  btnDesplazarte.onclick = function(){move(txtPosicion.value);};
};
function move(posicion){
  history.go(posicion);
}
