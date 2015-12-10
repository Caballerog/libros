    var ventana = window.open("", "", "width=150, height=150");
    var i = 0;
    var j = 0;
    var intervalo1 = setInterval(function() {
        ventana.resizeBy(+1, +1);
        i++;
        if (i == 200) {
            clearInterval(intervalo1);
            terremoto();
        }
    }, 20);

    function terremoto() {
        var intervalo2 = setInterval(function() {
            if (j % 2 === 0) {
                ventana.moveBy(+10, +10);
            } else {
                ventana.moveBy(-10, -10);
            }
            j++;
            if (j == 200)
                clearInterval(intervalo2);

        }, 20);
    }
