// function reallyLong(cb) {
//   for (let index = 0; index < 1000000; index++) {}
//   cb("done");
// }

function print() {
  console.log("done");
}

// function printName(name) {
//   console.log("printing  name");
//   reallyLong(print);
//   console.log(`The name is ${name}`);
//   console.log("done");
// }

// printName("kumanan");
// // reallyLong();

// setTimeout(print, 1000);


window.onload = print;
