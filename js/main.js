let bodyEl = document.querySelector('body');
let btnEl = document.getElementById('btn');
// let inputEl = document.getElementById('cityInput').value;
let locationEl = document.getElementById('location');
let tempEl = document.getElementById('temperature');
let feelsEl = document.getElementById('feels-like');
let sunriseEl = document.getElementById('sunrise');
let sunsetEl = document.getElementById('sunset');
// let h6El = document.getElementById('h6');


document.addEventListener('click', function(e) {
  e.preventDefault();
  console.log(e.currentTarget);
});

// const apiKey = 'API_NINJA';
const apiKey = 'JZF7eRiucibMaOs9TvH7xfktlLUS0x5Oj4KCzkzh';
const apiUrl = 'https://api.api-ninjas.com/v1/weather?city='

const options = {
  method: 'GET',
  headers: {
    'X-API-KEY': apiKey
  },
};


let farenheit = 0;

function cToF(celsius) {
  return farenheit = (celsius * 9 / 5) + 32;
}

function toTime(timestamp){
  const date = new Date(timestamp * 1000);
  return date.toLocaleTimeString();
}

async function getWeather() {
  // inputEl = document.getElementById('cityInput').value;
  let city = 'Saipan';
  console.log(city);
  console.log('getWeather');

  locationEl.innerText = 'loading weather...';
  let response = await fetch(apiUrl + city, options);
  let data = await response.json();
  locationEl.innerText = city;
  tempEl.innerText = cToF(data.temp);
  feelsEl.innerText = cToF(data.feels_like);
  sunriseEl.innerText = toTime(data.sunrise);
  sunsetEl.innerText = toTime(data.sunset);
  console.log(`${data.weather}, ${data.temp}`)

  console.log(data);
  console.log(data.temp);
  console.log(cToF(data.temp));
}


btnEl.addEventListener('click', getWeather);
