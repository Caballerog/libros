var suma = 0;
var objeto = {prop1: 1, prop2: 3, prop3: 12};
for each (var elemento in objeto) {
  suma += elemento;
}
print(suma); //Muestra el valor “16” (1+3+12)
