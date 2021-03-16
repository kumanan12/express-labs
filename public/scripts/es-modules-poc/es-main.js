import { mean, stddev, greeting, name } from './es-math.js';
const nameElement = document.getElementById('name');
const greetingbtn = document.getElementById('btnGreeting');

function onButtonClick() {
  let msg = greeting(nameElement.value);
  console.log(msg);
}

greetingbtn.addEventListener('click', onButtonClick);

console.log(greeting('Kumanan'));
console.log(name);
