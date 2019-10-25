// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

// creazione variabili
var word1, word2;

// input da utente
word1 = prompt('Inserisci la prima parola');
word2 = prompt('Inserisci la seconda parola');

// confronto
if (word1.length > word2.length) {
  console.log(word2, word1);
} else if (word2.length > word1.length) {
  console.log(word1, word2);
} else {
  console.log(word1, word2, ' sono lunghe uguali');
}