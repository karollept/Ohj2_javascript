const answer = confirm('Lasketaanko neliöjuuri?');
if (answer === true) {
  const number = prompt ('Anna numerosi');
  if (number >= 0) {
    const tulos = Math.sqrt(number);
    document.querySelector('#neliojuuri').innerHTML = 'Luvun '+ number + ' neliöjuuri on ' + tulos + '.';
  }
  else {
    document.querySelector('#neliojuuri').innerHTML = 'Negatiivisten lukujen neliöjuurta ei ole määritetty.';
  }
}
else {
  document.querySelector('#neliojuuri').innerHTML = 'Neliöjuurta ei lasketa.';
}