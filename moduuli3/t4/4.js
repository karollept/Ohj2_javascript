'use strict';
const target = document.getElementById("target");
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

students.forEach(student => {
  const vaihtoehto = document.createElement('option');
  vaihtoehto.value = student.value;
  vaihtoehto.textContent = student.name;
  target.appendChild(vaihtoehto);
});
