const numero = prompt ('Montako kertaa heitetään noppaa?');
let heitto_sum = 0;

for (let i = 0; i < numero; i++) {
  const heitto = Math.floor(Math.random() * 6) + 1;
  heitto_sum += heitto;
}

document.querySelector('#noppa').innerHTML = 'Nopanheittojen summa on ' + heitto_sum + '.';