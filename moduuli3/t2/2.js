const target = document.getElementById("target");
const list = ['First item', 'Second item', 'Third item'];

list.forEach((text, index) => {
  const li_element = document.createElement('li');
  li_element.textContent = text;  // automaattinen mutta teknisesti voi kai poistaa
  if (index === 1) li_element.classList.add ('my-item');
  target.appendChild(li_element);
});