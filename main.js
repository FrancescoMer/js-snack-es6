// Funzione per generare un numero intero casuale tra min e max (inclusi)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Array iniziale di squadre con punti e falliSubiti a 0
const squadre = [
  { nome: "Juventus", punti: 0, falliSubiti: 0 },
  { nome: "Milan", punti: 0, falliSubiti: 0 },
  { nome: "Inter", punti: 0, falliSubiti: 0 },
  { nome: "Roma", punti: 0, falliSubiti: 0 },
  { nome: "Napoli", punti: 0, falliSubiti: 0 }
];

// Assegniamo numeri casuali a punti e falliSubiti
for (let squadra of squadre) {
  squadra.punti = getRandomInt(0, 100);
  squadra.falliSubiti = getRandomInt(0, 50);
}

// Creiamo un nuovo array con solo nome e falliSubiti
const squadreConFalli = squadre.map(squadra => {
  return {
    nome: squadra.nome,
    falliSubiti: squadra.falliSubiti
  };
});

// Stampiamo tutto in console
console.log("Tutte le squadre con dati completi:");
console.log(squadre);

console.log("Nuovo array con solo nome e falli subiti:");
console.log(squadreConFalli);

