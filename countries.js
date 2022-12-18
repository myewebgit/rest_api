// console.log('countries')

const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries();

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries')
    // for(const country of countries){
    //     console.log(country)
    // }
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country')

        // this code is as same as dynamic code********* 

        // const h3 = document.createElement('h3');
        // h3.innerText = country.name.common;
        // div.appendChild(h3);
        // const p =document.createElement('p');
        // p.innerText = country.capital;
        // div.appendChild(p);
        // 

        div.innerHTML = `
        <h3>${country.name.common}</h3>
        <p>${country.capital}</p>
        <button onClick="countryByName('${country.name.common}')">Details</button>`
        countriesDiv.appendChild(div);
        // console.log(country)

    });
}

const countryByName = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]))
    console.log(url);
}

const displayCountryDetail = country =>{
    // console.log(country);
    // const detail = document.getElementById('detail');
    // detail.innerHTML = `
    // <h3>${country.name.common}</h3>
    // <p>${country.population}</p>
    // <img width = "200px" src="${country.flags.png}">`
    const countryDiv = document.getElementById('detail')
    const div= document.createElement('div');
        div.classList.add('detail');
       div.innerHTML = `
    <h3>${country.name.common}</h3>
    <p>${country.population}</p>
    <img width = "200px" src="${country.flags.png}">`
    countryDiv.appendChild(div);
    countryDiv.value = '';


}