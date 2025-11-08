const year = prompt('Lisää vuosi');


if (year % 4 === 0) {
  if (year % 100 === 0) {

    if (year % 400 === 0)
    {document.querySelector('#vuosi').innerHTML = 'Vuosi ' + year + ' on karkausvuosi';}

    else {document.querySelector('#vuosi').innerHTML = 'Vuosi ' + year + ' ei ole karkausvuosi';}
  }
    else {document.querySelector('#vuosi').innerHTML = 'Vuosi ' + year + ' on karkausvuosi';}
}

else {document.querySelector('#vuosi').innerHTML = 'Vuosi ' + year + ' ei ole karkausvuosi';}
