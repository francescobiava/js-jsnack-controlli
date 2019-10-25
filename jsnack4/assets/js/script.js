// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// creazione variabili
var i, user, list, check;

// creazione lista
list = ['andrea', 'angelo', 'fabrizio', 'filippo', 'flavio', 'francesco', 'giampaolo', 'giuseppe', 'jolanda', 'leonardo', 'lilian', 'manuel', 'marco', 'mattia', 'michele', 'simone', 'sofia', 'thomas', 'valentina', 'victor', 'axl', 'chiara'];

// valore base falso di check
check = false;

// inserimento nome utente
user = prompt('Inserisci il tuo nome');

// rendo minuscolo per confronto preciso
user = user.toLowerCase();

// confronto con la lista
i = 0;
while (i < list.length && check === false) {
  if (user === list[i]) {
    check = true;
  }
  i++;
}

// messaggio a utente
if (check === true) {
  alert("Sei invitato alla festa");
} else {
  alert('Nessuno ti vuole');
}