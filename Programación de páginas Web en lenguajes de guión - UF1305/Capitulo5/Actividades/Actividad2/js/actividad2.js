var refWindow, posicion = 0,
    alto, ancho;
var screenwidth = screen.availWidth;
var screenheight = screen.availHeight;

window.onload = function() {
    alto = parseFloat(prompt('Introduzca el alto de la nueva ventana'));
    ancho = parseFloat(prompt('Introduzca el ancho de la nueva ventana'));
    try {
        esNumero(alto, 'Alto');
        esNumero(ancho, 'Ancho');
    } catch (e) {
        alert(e.message);
        return;
    }
    refWindow = popupCenter('', 'Mi ventana', ancho, alto);
    refWindow.onkeypress = muevete;
};

function muevete() {
    if (posicion === 0) {
        moveTopLeft();
        posicion++;
    } else if (posicion === 1) {
        moveTopRight();
        posicion++;
    } else if (posicion === 2) {
        moveBottomRight();
        posicion++;
    } else if (posicion === 3) {
        moveBottomLeft();
        posicion = 0;
    }
    if (refWindow.focus) {
        refWindow.focus();
    }

}

function moveTopLeft() {
    refWindow.moveTo(0, 0);
}

function moveTopRight() {
    ancho = refWindow.innerWidth;
    refWindow.moveTo(screenwidth - ancho, 0);
}

function moveBottomRight() {
    ancho = refWindow.innerWidth;
    alto = refWindow.innerHeight;
    refWindow.moveTo(screenwidth - ancho, screenheight - alto);
}

function moveBottomLeft() {
    alto = refWindow.innerHeight;
    refWindow.moveTo(0, screenheight - alto);
}

function popupCenter(url, title, w, h) {
    // Fixes dual-screen position                         Most browsers      Firefox
    var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top;

    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
    var top = ((height / 2) - (h / 2)) + dualScreenTop;
    var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

    // Puts focus on the newWindow
    if (window.focus) {
        newWindow.focus();
    }
    return newWindow;
}
