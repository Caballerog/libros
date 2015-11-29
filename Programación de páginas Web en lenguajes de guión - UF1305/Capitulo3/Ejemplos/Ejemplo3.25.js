var permiso = true,
   mensaje_permiso_vacio = "No tiene permisos y no hay mensajes para usted.",
   mensaje_permiso = "Usted no tiene permisos.",
   mensaje_vacio = "Usted no tiene mensajes.";
if(!permiso && mensaje != "undefined") {
  alert(mensaje_permiso_vacio);
}else if(!permiso){
  alert(mensaje_permiso);
}else if(mensaje != "undefined"){
  alert(mensaje_vacio);
}
