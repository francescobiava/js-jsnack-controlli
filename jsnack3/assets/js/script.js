// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.

// creazione variabili
var i, num, result;
result = 0;

// // ciclo for
// for (i = 0; i < 5; i++) {
//   num = parseInt(prompt('Inserisci un numero'));
//   result += num;
// }

// ciclo while
i = 0;
while (i < 5) {
  num = parseInt(prompt('Inserisci un numero'));
  result += num;
  i++;
}

// output
console.log(result);


// FIRST VERSION WITH ARRAY (WHY???)
// // creazione variabili
// var i, j, result, num = [];
// result = 0;

// // ciclo array
// for (i = 0; i < 5; i++) {
//   num.push(parseInt(prompt('Inserisci un numero')));
// }
// console.log(num);

// // ciclo for
// for (j = 0; j < 5; j++) {
//   result += num[j];
// }

// // // ciclo while
// // j = 0;
// // while (j < 5) {
// //   result += num[j];
// //   j++;
// // }

// // output
// console.log(result);