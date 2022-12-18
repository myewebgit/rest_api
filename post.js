// console.log('post connected')

function loadPosts (){
    fetch ('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then (data => displayPost(data))
}
loadPosts();

function displayPost(posts){
    const postContainer = document.getElementById('posts');

    for (const abc of posts){
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `<h3>${abc.title}</h3>
        <p>${abc.body}</p>;`
        postContainer.appendChild(div);
        console.log(abc.title)
    }
    
}
