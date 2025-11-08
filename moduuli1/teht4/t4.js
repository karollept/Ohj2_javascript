function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
const name = prompt('What is your name?');
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

document.querySelector('#house').innerHTML = name + ', your house is ' + personal_house + '!';