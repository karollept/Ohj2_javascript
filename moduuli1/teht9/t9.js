const numero = Number(prompt("Anna numero"));

for (let jakaja = 2; jakaja < numero; jakaja++) {
    if (numero % jakaja === 0) {
      document.querySelector("#alkuluku").innerHTML = 'Numero ei ole alkuluku';
      break;
    }
  else {
    document.querySelector("#alkuluku").innerHTML = 'Numero on alkuluku';
  }
}
