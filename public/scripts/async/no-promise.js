// function add(n1, n2) {
//   for (let index = 0; index < 1000000000; index++) {}
//   return n1 + n2;
// }

// function multiply(n1, n2) {
//   return n1 * n2;
// }

// function divide(n1, n2) {
//   return n1 / n2;
// }

// // var addResult = add(3, 2);
// //   console.log(`3 + 2 is ${addResult}`);

// function onTimerExpired(){
//     var addResult = add(3, 2);
//     console.log(`3 + 2 is ${addResult}`);
// }

// setTimeout(onTimerExpired, 1000);


// var multiplyResult = multiply(3, 2);
// console.log(`3 * 2 is ${multiplyResult}`);

// var divideResult = divide(3, 2);
// console.log(`3 / 2 is ${divideResult}`);

// function buttonClicked(){
//     console.log("Button click handler");
// }

// document.getElementById("saveBtn").addEventListener('click', buttonClicked);

var names = ["Nikhil", "Suganthi", "Yazhini", "Meghaa", "Sasi" ];

function filter(name, filter) {
  return name === filter
}


var filteredNames = names.find(filter.bind(this, "Suganthi"));

console.log(filteredNames);
