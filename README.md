# Luhn-Algorithm-JS
Librería que ofrece métodos para trabajar con el algoritmo Luhn, el primero es una función para validar si un número de tarjeta de crédito es válido, el segundo método da la posibilidad de crear un número de tarjeta válido a partir de un BIN o extrapolación de un BIN.

#### Validación de un número

**Entrada:** ``4148202114488315``   **Resultado:** ``Invalido``

**Entrada:** ``4148202114488312``   **Resultado:** ``Válido``

#### Generacion de numeros validos
**Extrapolación base:** 

``
41482021xx4883xx
``

**Resultado:**

``
4148202181488310
``

``
4148202173488351
``

``
4148202138488371
``

``
4148202131488311
``

**Algoritmo Luhn**
>**Historia:** El algoritmo de Luhn o fórmula de Luhn, también conocida 
como "algoritmo base 10", es una fórmula de suma de verificación, 
utilizada para validar una diversidad de números de identificación; 
como números de tarjetas de crédito, números IMEI, etc.

> **Dominio público** Este algoritmo es de dominio público y es ampliamente 
 usado en la actualidad. Su especificación está contenida 
 en la norma ISO/IEC 7812-1.1​ Su propósito no es de ser una función 
 hash criptográfica segura contra ataques maliciosos, sino que fue 
 diseñada para protección contra errores accidentales. La gran mayoría 
 de tarjetas de crédito y otros números de identificación usan este 
 algoritmo como un método simple de distinguir números válidos a 
 partir de una entrada de números al azar.
# Importar libreria
```html
<script type="text/javascript" src="../lib/LUHN.js"></script>
```
**Validar numero de tarjeta de crédito**
```js
function comprobar(){
	var cc = document.getElementById("cc").value;
	alert(ccTest(cc));
}
```
**Generar tarjetas de crédito**
```js
function generar(){
    var bin = document.getElementById("input").innerText;
    var div = document.getElementById("cards");
    div.innerHTML="";
    for(var i=0;i<10;i++){
        var cc = ccGen(bin);
        div.innerHTML += cc + "<br>";   
    }
}
```

## License

  [MIT](LICENSE)

**Free Software ;)**