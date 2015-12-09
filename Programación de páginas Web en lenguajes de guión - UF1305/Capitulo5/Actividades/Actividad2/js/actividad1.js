
        function validarNombre(nombre) {
            try {
                cadenaVacia(nombre,'Nombre');
                cadenaMinima(nombre, 'Nombre', 3);
                cadenaMaxima(nombre, 'Nombre', 20);
            } catch (e) {
                throw e;
            }
        }
        function validarApellidos(apellidos){
          try{
            cadenaVacia(apellidos,'Apellidos');
            cadenaMinima(apellidos,'Apellidos',3);
            cadenaMaxima(apellidos,'Apellidos',20);
          }catch(e){
            throw e;
          }
        }

        function validarEdad(edad) {
            try {
                cadenaVacia(edad, 'Edad');
                esNumero(edad,'Edad');
                numeroMinimo(edad, 'Edad', 16);
            } catch (e) {
                throw e;
            }
        }

        function validarDNI(dni) {
            var numero;
            var letra;
            var letraCalculada;

            /* Se comprueba que el dni sean u dígitos y una letraCalculada;*/
            if (/^\d{8}[a-zA-Z]$/.test(dni)) {
                numero = dni.substr(0, dni.length - 1);
                letra = dni.substr(dni.length - 1, 1);
                numero = numero % 23;
                letraCalculada = 'TRWAGMYFPDXBNJZSQVHLCKET';
                letraCalculada = letraCalculada.substring(numero, numero + 1);
                if (letraCalculada !=  letra.toUpperCase()) {
                    throw new Error('ERROR: DNI erróneo. La letra del NIF no se corresponde');
                }
            } else {
                throw new Error('ERROR: DNI erróneo. Formato no válido');
            }
        }

        function validarTelefono(telefono) {
          cadenaVacia(telefono,'Telefono');
          if( !/^\d{9}$/.test(telefono)){
            throw new Error('ERROR: Formato del teléfono incorrecto');
          }
        }

        function cadenaVacia(cadena, titulo) {
            if (cadena === "") {
                throw new Error('ERROR: Cadena ' + titulo + ' vacía');
            }
            return true;
        }

        function cadenaMinima(cadena, titulo, minimo) {
            if (cadena.length < minimo) {
                throw new Error('ERROR: Cadena ' + titulo + ' no tiene la longitud mínima ' + minimo);
            }
            return true;
        }

        function cadenaMaxima(cadena, titulo, maximo) {
            if (cadena.length > maximo) {
                throw new Error('ERROR: Cadena ' + titulo + ' supera la longitud máxima ' + maximo);
            }
            return true;
        }

        function esNumero(num,titulo) {
            if (!isNaN(parseFloat(num)) && isFinite(num)) {
                return true;
            } else {
                throw new Error('ERROR: ' + titulo + ' no es un número');
            }
        }

        function numeroMinimo(num, titulo, minimo) {
            if (num < minimo) {
                throw new Error('ERROR: El número ' + titulo + ' debe ser como mínimo ' + minimo);
            }
        }
