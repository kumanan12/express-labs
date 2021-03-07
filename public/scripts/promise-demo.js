// function getUsers() {
//   console.log("getting users");
//   const usersPromise = fetch("https://jsonplaceholder.typicode.com/users");

//   console.log(typeof usersPromise);

//   console.log("got users");
// }

// getUsers();

// function callingPromise() {
//   const usersPromise = fetch("https://jsonplaceholder.typicode.com/users");
//   usersPromise
//     .then(function (responsePromise) {
//         var resultPromise = responsePromise.json();
        
//         resultPromise.then(function(data){
//             console.log("List of users");
//             console.log(data);
//         });

//     })
//     .catch(function(error){
//         console.error(error);

//     })
//     .finally(function() {
//         console.log("done");
//     });
// }

// callingPromise();
// console.log("After callingPromise");
