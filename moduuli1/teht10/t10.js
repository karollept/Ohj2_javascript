//number of dice
//number we want from dice
//likelyhood of getting it

const maara = Number(prompt("Kuinka montaa noppaa käytetään?"));
const numero = Number(prompt("Minkä numeron haluat saada nopista?"));

const looppi = 10000;
let saavutettu = 0;

for (let i = 0; i < looppi; i++) {
  let saatu = 0;
  for (let j = 0; j < maara; j++) {
    saatu += Math.floor(Math.random() * 6) + 1;
  }
  if (saatu === numero) {
    saavutettu++;
  }
}

const todennakoisyys = Number(saavutettu / looppi * 100).toFixed(2);
document.querySelector("#todennakoisuus").innerHTML = 'Todennäköisyys saada ' + maara + ' nopasta luku ' + numero + ' on ' + todennakoisyys + '%.';