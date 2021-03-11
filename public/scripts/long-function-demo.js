function reallyLong(cb) {
  for (let index = 0; index < 10000000000; index++) {}
  cb("done");
}

function reallyLongWithPromise() {
  return new Promise(resolve => {
    for (let index = 0; index < 10000000000; index++) {}
  });
}

function print() {
  console.log("done");
}

function printNameOption2(name){
  console.log("printing  name");
 var result = reallyLongWithPromise();
 result.then(data =>{
   console.log("I am done with really long promise");
 });
 result.catch(console.error);
  console.log(`The name is ${name}`);
  console.log("done");
}

function printName(name) {
  console.log("printing  name");
  reallyLong(print);
  console.log(`The name is ${name}`);
  console.log("done");
}

//printName("kumanan");
printNameOption2("kumanan");

// // reallyLong();

// setTimeout(print, 1000);


