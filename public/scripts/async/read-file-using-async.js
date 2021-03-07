const fs = require("fs").promises;

//option 3
// read file returns a promise.


async function readAFile(){
    var result = await fs.readFile("test-file.txt", "utf8");
    console.log(result);
}

readAFile();
