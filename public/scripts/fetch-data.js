var users = document.getElementById("users");
//var tableRow = 
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(loadData);

function loadData(data) {
    var userData = '';
    console.log("loading data");
    console.log(data)
    if (data) {
        data.forEach(item => {
            userData += `  <tr><td scope="row">${item.name}</td><td>${item.name}</td><td>${item.phone}</td></tr>`;
        });
        users.innerHTML = userData;
    }
}

