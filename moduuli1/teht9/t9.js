const numero = Number(prompt("Anna numero"));

for (let jakaja = 2; jakaja < loppuvuosi; jakaja++) {
  if (jakaja % 4 === 0) {
    document.querySelector("#karkausvuodet").innerHTML = lista;
  }

  else {
    document.querySelector("#karkausvuodet").innerHTML = 'Numero on alkuluku';
  }
}
