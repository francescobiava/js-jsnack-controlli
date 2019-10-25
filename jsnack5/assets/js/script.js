// Crea un array vuoto. Chiedi per 6 volte all'utente di inserire un numero, se è dispari inseriscilo nell'array.

// creazione variabili
var i, list = [], num;

// ciclo con input utente e controllo dispari
for (i = 0; i < 6; i++) {
  num = parseInt(prompt('Inserisci un numero'));
  if (num % 2 !== 0) {
    list.push(num);
  }
}

// output con check se sono tutti pari
if (list.length == 0) {
  console.log('I numeri sono tutti pari');
} else {
  console.log(list);
}