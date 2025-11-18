const numerot = [];
let input;

function numbers() {
  while (input !== 0) {
    input = Number(prompt('Anna numero (lopeta kirjoittamalla O):'));
    if (input !== 0) numerot.push(input);
  }
}

function kaanto() {
  numerot.sort((a, b) => b - a);

  for (const n of numerot) {
    console.log(n);
  }
}

numbers();
kaanto();
