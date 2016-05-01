var clearRender = function(e){
  nodo=window.document.getElementById(e).getElementsByTagName('span')[0];
  if (nodo && nodo.parentNode) {
       nodo.parentNode.removeChild(nodo);
   }
};
var renderError = function(e) {
  clearRender(e);
  var span = window.document.createElement('span');
  span.innerHTML = "<img src='img/bad.png'/>";
  window.document.getElementById(e).appendChild(span);
};
var renderOk = function(e) {
  clearRender(e);
  var span = window.document.createElement('span');
  span.innerHTML = "<img src='img/ok.png'/>";
  window.document.getElementById(e).appendChild(span);
};
