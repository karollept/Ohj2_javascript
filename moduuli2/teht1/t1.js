lista = []

function numerot() {
  for (let i = 1; i <= 5; i++) {
    const number = prompt('Anna ensimmäinen luku');
    lista.push(number);
  }
  return lista;
}

function toisinpain() {
  for (let i = lista.length - 1; i >= 0; i--) {
    console.log(lista[i]);
  }
  return;
}

numerot();
toisinpain();