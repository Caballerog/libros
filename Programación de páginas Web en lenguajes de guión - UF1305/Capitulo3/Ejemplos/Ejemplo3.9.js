var x = 10;

(function () {
    var x; // La variable es elevada
    console.log("x:", x); // undefined
    x = 20;
    console.log("x:", x); // x es 20
})();
