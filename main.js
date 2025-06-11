// Array di oggetti bici da corsa
const biciclette = [
  { nome: "Bianchi Oltre XR4", peso: 7.2 },
  { nome: "Pinarello Dogma F", peso: 6.8 },
  { nome: "Specialized Tarmac SL7", peso: 6.7 },
  { nome: "Cannondale SuperSix EVO", peso: 7.0 },
  { nome: "Trek Émonda SLR", peso: 6.9 }
];

// Trova la bici con il peso minore
let biciLeggera = biciclette[0];

for (let i = 1; i < biciclette.length; i++) {
  if (biciclette[i].peso < biciLeggera.peso) {
    biciLeggera = biciclette[i];
  }
}

// Stampa la bici più leggera
console.log("La bici più leggera è:");
console.log(`Nome: ${biciLeggera.nome}`);
console.log(`Peso: ${biciLeggera.peso} kg`);
