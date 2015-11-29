var x = 10;

(function () {
    console.log("x:", x); //Se espera 10
    var x = 20;
    console.log("x:", x); //Se espera 20
})();
