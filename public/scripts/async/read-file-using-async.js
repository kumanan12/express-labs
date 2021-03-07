const fs = require("fs").promises;

//option 3
// read file returns a promise.


async function readAFile(){
   try {
    var result = await fs.readFile("test-file.txt", "utf8");
    console.log(result);
       
   } catch (e) {
       console.error(e.message);
   }

}

readAFile();
