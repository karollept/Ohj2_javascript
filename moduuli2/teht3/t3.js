const maara = 6;
const nimet = [];

for (let i = 0; i < maara; i++) {
  const nimi = prompt(`Enter ${i + 1} dogs name:`);
  nimet.push(nimi);
}

nimet.sort().reverse();

let html = "<ul>";
for (const nimi of nimet) {
  html += `<li>${nimi}</li>`;
}
html += "</ul>";

document.querySelector("#target").innerHTML = html;

