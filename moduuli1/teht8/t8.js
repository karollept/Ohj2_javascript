const alkuvuosi = Number(prompt("Mistä vuodesta aloitetaan?"));
const loppuvuosi = Number(prompt("Mihin vuoteen lopetetaan?"));

let lista = "<ul>";

for (let vuosi = alkuvuosi; vuosi < loppuvuosi; vuosi++) {
  if (vuosi % 4 === 0) {
    if (vuosi % 100 === 0) {

      if (vuosi % 400 === 0)
      {lista += `<li>${vuosi}</li>`;}

      else {;}
    }
      else {lista += `<li>${vuosi}</li>`;}
  }

  else {;}
}

lista += "</ul>";
document.querySelector("#karkausvuodet").innerHTML = lista;