let bodyEl= document.querySelector('body');
let btnEl = document.getElementById('btn');
let inputEl = document.getElementById('cityInput').value;
let h1El = document.getElementById('h1');
let h2El = document.getElementById('h2');
let h3El = document.getElementById('h3');
let h4El = document.getElementById('h4');
let h5El = document.getElementById('h5');
let h6El = document.getElementById('h6');


document.addEventListener('click', function(e){
  e.preventDefault();
  console.log(e.currentTarget);
});

const apiKey = 'lT72EtOZwFMRYL0Fq+hsug==YlEscJLFvZQjSVfu';
let apiUrl = 'https://api.api-ninjas.com/v1/weather?city='

const options = {
  method: 'GET',
  headers:{
    'X-API-KEY': apiKey
  },
};


let farenheit = 0;

function cToF(celsius){
  return farenheit = (celsius * 9/5) + 32;
}

async function getWeather(){
  inputEl = document.getElementById('cityInput').value;
  let city = inputEl.value;
  console.log(city);
  console.log('getWeather');

  h1El.innerText = 'loading weather...';
  let response = await fetch(apiUrl + city, options);
  let data = await response.json();
  h1El.innerText =city;
  console.log(`${data.weather}, ${data.temp}`)

  console.log(data);
  console.log(data.temp);
  console.log(cToF(data.temp)); d;
}


btnEl.addEventListener('click', getWeather);