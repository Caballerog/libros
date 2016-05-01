var iFirefox = document.getElementById("iFirefox");

function activar() {
    iFirefox.src = "firefox - off.png";
}

function desactivar() {
    iFirefox.src = "firefox - on.png";
}
iFirefox.addEventListener("mouseover", activar, false);
iFirefox.addEventListener("mouseout", desactivar ,false);
