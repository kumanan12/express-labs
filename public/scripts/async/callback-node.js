const fs = require("fs").promises;

// // read file returns a promise.
var result = fs.readFile("test-file.txt", "utf8");


// the result will have either a success or failure.

function onSuccess(data){
  console.log(data);
}

function onError(err){
  console.error(err);
}


result
  .then(onSuccess)
  .catch(onError);

console.log("Three");
