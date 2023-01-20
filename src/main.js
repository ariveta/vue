import {createApp} from 'vue';
import App from './App.vue';
import router from './router';

createApp(App).use(router).mount('#app');

var lookingFor = document.querySelector('#lookingFor');
var search = document.querySelector('#search');
var city = document.querySelector('#city');
var description = document.querySelector('#description');
var temperature = document.querySelector('#temperature');
var windSpeed = document.querySelector('#wind-speed');
var pressure = document.querySelector('#pressure');
var humidity = document.querySelector('#humidity');
var cloudiness = document.querySelector('#cloudiness');
var ico = document.querySelector('#ico');

var apik = '3045dd712ffe6e702e3245525ac7fa38';

function celcjusze(cel) {
  return (cel - 273).toFixed(1);
}

search.addEventListener('click', function () {
  fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=' +
      lookingFor.value +
      '&lang=pl&appid=' +
      apik +
      '&units=methric'
  )
    .then((res) => res.json())
    .then((data) => {
      var name = data['name'];
      var desc = data['weather']['0']['description'];
      var temp = data['main']['temp'];
      var wind = data['wind']['speed'];
      var pres = data['main']['pressure'];
      var humi = data['main']['humidity'];
      var clou = data['clouds']['all'];
      var icon = data['weather']['0']['icon'];

      city.innerHTML = `${name}`;
      ico.innerHTML = `<img src='http://openweathermap.org/img/wn/${icon}.png'>`;
      description.innerHTML = `${desc}`;
      temperature.innerHTML = `${celcjusze(temp)}&#8451`;
      windSpeed.innerHTML = `Prędkość wiatru: <span style="font-weight: bold">${wind} km/h<span>`;
      pressure.innerHTML = `Ciśnienie: <span style="font-weight: bold">${pres} hPa</span>`;
      humidity.innerHTML = `Wilgotność: <span style="font-weight: bold">${humi}%</span>`;
      cloudiness.innerHTML = `Zachmurzenie: <span style="font-weight: bold">${clou}%<span>`;
    });
});
