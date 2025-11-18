const numerot = [];
let numero;

while (true) {
  numero = Number(prompt('Anna numero (lopeta kirjoittamalla O):'));
  if (numerot.includes(numero)) {
    alert('Olet jo käyttänyt numeroa.')
    break;
  }
}
numerot.push(numero)

numerot.sort((a, b) => a - b);

for (const n of numerot) {
  console.log(n);
}
