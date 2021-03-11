'use strict';
var users = document.getElementById('users');
//var tableRow =
function onerror(msg) {
  console.error(msg);
}

function getUsers() {
  console.log('getting users');
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(loadData)
    .catch(onerror);
  console.log('got users');
}

function loadData(data) {
  var userData = '';
  console.log('loading data');
  console.log(data);
  if (data) {
    data.forEach((item) => {
      userData += `  <tr><td scope="row">${item.name}</td><td>${item.name}</td><td>${item.phone}</td></tr>`;
    });
    users.innerHTML = userData;
  }
}

getUsers();
