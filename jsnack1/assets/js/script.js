// L'utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

// creazione variabili
var num1, num2, result;

// input da utente
num1 = parseInt(prompt('Inserisci il primo numero'));
num2 = parseInt(prompt('Inserisci il secondo numero'));

// confronto
if (num1 > num2) {
  result = num1;
} else if (num2 > num1) {
  result = num2;
} else {
  result = 'Sono uguali';
}

// output
// console.log('Il numero maggiore è: ', result);
document.getElementById('js-result').innerHTML = (result);