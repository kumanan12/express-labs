const fs = require("fs");

// option1 , create an anonymous function as the second argument. 
  fs.readFile("test-file.txt","utf-8", function(err,data){
    if (err) {
      console.error(err); 
    }
    console.log(data);
  });


  // option2 : declare a function seperately and pass it to the readFileMethod.
  function onFileRead(err, data) {
    if (err) {
      console.error(err);
      return;
    }
    console.log("option 2");
    console.log(data);
  }
  
    // Read a file and then call the function back with the data.
fs.readFile('test-file.txt', 'utf8',onFileRead);
  




