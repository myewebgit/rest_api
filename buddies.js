// console.log('buddies')

const loadBuddies = () =>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayBuddies(data));
}

loadBuddies();

const displayBuddies = data =>{
    const buddies = data.results;
    const buddiesDiv = document.getElementById('buddies')
 
    for (const buddie of  buddies){
       const p = document.createElement('p');
      p.classList.add('quote')
       p.innerText = `Name: ${buddie.name.title} ${buddie.name.first} ${buddie.name.last}`;
            buddiesDiv.appendChild(p);

    }
    // console.log(data.results)
    // console.log(data)
}