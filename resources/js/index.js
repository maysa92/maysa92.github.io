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
    if(event.target.id == 'leftbtn'){
        rotation = rotation - 15;
    }else{
        rotation = rotation + 15;
    }
    element.style.transform = 'rotate('+rotation+'deg)';
}

leftbtn.onclick = rotatecat;
rightbtn.onclick = rotatecat;

const colorbtn = document.querySelector('.colorbtn');
const station = document.querySelector('.banner');
const colors = ['#5555FF', '＃99DD00', '#3b5998', '#BBBB00', '#DDAA00'];

colorbtn.addEventListener('click', changecolor);

function changecolor () {
  const random = Math.floor(Math.random() * colors.length);
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
  ];
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
