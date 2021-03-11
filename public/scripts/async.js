console.log("hello async");

function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  

  function resolveAfter1Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved after 1 sec');
      }, 1000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    const users = await fetch("https://jsonplaceholder.typicode.com/users");
    const userData = await users.json();
    console.log(result);
    // expected output: "resolved"
  }

  resolveAfter2Seconds().then(console.log).catch(console.error);
  
  asyncCall();
  