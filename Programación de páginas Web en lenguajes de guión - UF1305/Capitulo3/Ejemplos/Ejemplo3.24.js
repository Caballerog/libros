var permiso = true,
   mensaje = "Hola Mundo",
   mensaje_vacio = "No tiene permisos o no hay mensajes para usted";
if(!permiso && mensaje != "undefined") {
  alert(mensaje_vacio);
}else{
  alert(mensaje);
}
