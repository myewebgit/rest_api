const loadQuest = () =>{
    fetch('https://api.kanye.rest/')
    .then(res =>res.json())
    .then(data => displayQuote(data))
}

const displayQuote = quote =>{
    const container = document.getElementById('quote')
    console.log(quote)
    const quoteElement = document.getElementById('quote');
    const div =document.createElement('div')
    div.classList.add('quote')
    div.innerText = quote.quote;
    container.appendChild(div)
}
const singleQuest = () =>{
    fetch('https://api.kanye.rest/')
    .then(res =>res.json())
    .then(data => sdisplayQuote(data))
}

const sdisplayQuote = quote =>{
    const element = document.getElementById('squote')
    element.innerText = quote.quote;
}