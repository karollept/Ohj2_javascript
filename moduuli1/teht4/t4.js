function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

const numero = getRandomInt(1, 4);
let personal_house = '';

if (numero === 1) {
  personal_house = 'Gryffindor';
} else if (numero === 2) {
  personal_house = 'Ravenclaw';
} else if (numero === 3) {
  personal_house = 'Slytherin';
} else if (numero === 4) {
  personal_house = 'Hufflepuff';
}

console.log('You are a ' + personal_house + '.');
document.querySelector('#house').innerHTML = 'Your house is ' + personal_house + '!';