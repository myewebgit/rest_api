function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json.id))
}

function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers (data));
    // console.log('users')
}
function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data));
    // console.log('users')
}
// loadPosts();

function displayUsers (data){
    const ul = document.getElementById('users');
// console.log(data);
    for (const dfsd of data){

        const li = document.createElement('li');
        li.innerText = `name:${dfsd.name}; email${dfsd.email}; address:${dfsd.address.city}`;
        ul.appendChild(li);
        console.log(dfsd);
       
    }
    
}

