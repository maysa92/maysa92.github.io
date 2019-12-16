alert("Hello! Welcome to my second website - the first was built with Wix.com for my design artworks.");
//DOM elements
const leftbtn = document.getElementById('leftbtn');
const rightbtn = document.getElementById('rightbtn');

let rotation = 0;

function rotatecat (event){
    const cat = document.getElementById('pic');
    rotate(cat, event);
}

function rotate (element, event){
    if (event.target.id == 'leftbtn') 
    {
      rotation = rotation - 15;
    }
    else
    {
      rotation = rotation + 15;
    }
    element.style.transform = 'rotate('+rotation+'deg)';
}

leftbtn.onclick = rotatecat
rightbtn.onclick = rotatecat

const colorbtn = document.querySelector('.colorbtn');
const station = document.querySelector('.banner');
const colors = ['#3a4537', 'blue', '#3b5998', '#BBBB00', '#DDAA00'];
colorbtn.addEventListener('click', changecolor);
function changecolor () {
  const random = Math.floor(Math.random()*colors.length)
  station.style.backgroundColor = colors[random];
}

const quotes = [
    {
      name: 'Stephan King',
      quote: 'Get busy living or get busy dying.'
    },
    {
      name: 'Abraham Lincoln',
      quote: 'I am a success today because I had a friend who believed in me and I did not have the heart to let him down.'
    },
    {
      name: 'Leo Tolstoy',
      quote: 'If you want to be happy, be.'
    }
  ]
const quotebtn = document.querySelector('#quotebtn');
const author = document.querySelector('#author');
const quote = document.querySelector('#quote');
  
quotebtn.addEventListener('click', displayQuote);

function displayQuote () {
    let number = Math.floor(Math.random() * quotes.length);
    author.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}
  
function showtime () {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

let formatHours = convertFormat(hours)
  hours = checkTime(hours)
  hours = addzero(hours)
  minutes = addzero(minutes)
  seconds = addzero(seconds)

document.getElementById('clock').innerHTML = `${hours} : ${minutes} : ${seconds} ${formatHours}`

}
  
function convertFormat (time) {
      let format = 'AM';
      if (time >= 12) {
          format = 'PM';
      }
      return format
}

function checkTime (time) {
  if (time > 12) {
    time = time -12
  }
  if (time === 0) {
    time = 12;
  }
  return time
}

function addzero (time) {
      if (time < 10) {
    time = "0" + time;
      }
      return time

}

setInterval(showtime, 1000)

//weather
const notification = document.querySelector(".notification");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const locatione = document.querySelector(".location");

const weather = {};
  weather.temperature = {unit: "celsius"}
  
const kelvin = 273;
const key = "7572e531bf59872838902a83f27844d5";

function celsiustofah(temperature){
  return (temperature * 9/5) + 32;
}

temperature.addEventListener("click", function(){
  if (weather.temperature.value === undefined) return;
  if (weather.temperature.unit == "celsius"){
    let fah = celsiumtofah(weather.temperature.value);
    fah = Math.floor(fah);
    temperature.innerHTML = `${fah}°<span>F</span>`;
    weather.temperature.unit = "fah";
  }
  else{
    temperature.innerHTML = `${weather.temperature.value}°<span>C</span>`;
    weather.temperature.unit = "celsius";
  }
});

if("geolocation" in navigator){
  navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
  notification.style.display = "block";
  notification.innerHTML = "<p>Browser doesn't support Geolocation.</p>"
}

function setPosition(position){
  let lat = position.coords.latitude;
  let long = position.coords.longtitude;
  getweather(lat, long);
}

function showError(error) {
  notification.style.display = "block";
  notification.innerHTML = `<p> ${error.message}</p>`;
}



function getweather(lat, long){
  let api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`;
  fetch(api) 
  .then(function(response){
    let data = response.json();
    return data;
  })
  .then(function(data){
    weather.temperature.value = Math.floor(data.main.temp - kelvin);
    weather.description = data.weather[0].description;
    weather.city = data.name;
    weather.country = data.sys.country;
  })
  .then( function(){
    displayweather();
  });
}

function displayweather(){
  temperature.innerHTML = `${weather.temperature.value}°<span>C</span>`;
  description.innerHTML = weather.description;
  locatione.innerHTML = `${weather.city}, ${weather.country}`;
}


//jquery
$(document).ready(function(){
  $('#screenshot').hide();
  $('.container2').hide();
  $('.bold').click(function(event){
  $('#screenshot').slideToggle();
  $('.container2').slideToggle();
  $('.bold').hide();
  });

});