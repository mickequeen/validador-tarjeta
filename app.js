function isValidCard(numbers) {
  do {
    /*
    *solicitar numero de tarjeta por teclado a usuario y guardarlo en variable
    */
    var creditCard = prompt('favor ingrese número de tarjeta');
    /*
    *variables generales
    */
    var validateNumbers = /^\d*$/;
    var strToArr = [];
    var arrInverse = strToArr.reverse();
    var pairToSum = [];
    var impairToSum = [];
    var finalSum = 0;
    /*
    *condicionar, si el prompt NO está vacío y ES número, entonces se ejecuta
    */
    if (creditCard !== '' && validateNumbers.test(creditCard) === true) {
      /*
      *recorrer la variable que aloja lo ingresado en el prompt de uno en uno.
      */
      for (var i = 0; i < creditCard.length; i++) {
        /*
        *ingresar uno a uno los carácteres del string del prompt en un array, pasándolos a tipo integer
        */
        strToArr.push(parseInt(creditCard[i]));
      }
      var contForPair = 1;
      /*
      *bucle que recorre el array volteado, de uno en uno
      */
      for (var x = 0; x < arrInverse.length; x++) {
      /*
      *si el contador es par se agrega el número en el array de pares y lo multiplica *2, sino se agrega a array impair
      */
        if (contForPair % 2 === 0) {
          pairToSum.push(arrInverse[x] * 2);
        } else {
          impairToSum.push(arrInverse[x]);
        }
        contForPair++;
      }
      /*
      *para sumar los resultados con dos cifras, juntar todo en un string y luego separarlos un espacio.
      */
      pairTogether = pairToSum.join('').split('');
      /*
      *variable que contiene pares e impares
      */
      var pairAndImpair = pairTogether.concat(impairToSum);
      /*
      *for recorrerá arreglo final de números alojados en posiciones impares + los de posiciones pares*2 y cortados en caso de tener más de un dígito.
      */
      for (y = 0; y < pairAndImpair.length; y++) {
        /*
        *ingresar a variable y sumar cada dígito
        */
        finalSum += pairAndImpair[y];
        /*
        *si el residio de la suma/10 es 0 entonces indicar que la tarjeta es válida o no
        */
      } if (finalSum % 10 === 0) {
        return alert('la tarjeta ingresada es válida');
      } else {
        return alert('la tarjeta ingresada NO es válida');
      }
    } else {
      alert('favor ingrese parámetros válidos');
    }
  }
  while (creditCard === '' || validateNumbers.test(creditCard) === false);
}

isValidCard();
