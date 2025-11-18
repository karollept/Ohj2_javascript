const maara = Number(prompt('How many participants are there?'));
const nimet = [];

for (let i = 0; i < maara; i++) {
  const nimi = prompt(`Enter name: ${i + 1}`);
  nimet.push(nimi);
}

nimet.sort();

let html = "<ol>";
for (const nimi of nimet) {
  html += `<li>${nimi}</li>`;
}
html += "</ol>";

document.querySelector("#target").innerHTML = html;

