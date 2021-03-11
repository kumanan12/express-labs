// async function getUsers() {
//     console.log("getting users");
//     var response = await fetch("https://jsonplaceholder.typicode.com/users");
//     var data = await response.json();
//     console.log(data);
//     console.log("got users");
//   }

//   getUsers();
  console.log("done");

  function disemvovel(inputWord){
      var output = null;
      output =inputWord.replace('a','');
      output =output.replace('e','');
      output =output.replace('i','');
      output =output.replace('o','');
      output =output.replace('u','');
      return output;
  }

  var result = disemvovel("This website is for loser");
  console.log(result);