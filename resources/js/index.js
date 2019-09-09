alert("Hello! Welcome to my second website - the first was built with Wix.com for my design artworks.");
//DOM elements
const leftbtn = document.getElementById('leftbtn');
const rightbtn = document.getElementById('rightbtn');

let rotation = 0;

function rotatecat(event){
    const cat = document.getElementById('pic');
    rotate(cat, event);
}

function rotate(element, event){
    if(event.target.id == 'leftbtn'){
        rotation = rotation - 15;
    }else{
        rotation = rotation + 15;
    }
    element.style.transform = 'rotate('+rotation+'deg)';
}

leftbtn.onclick = rotatecat;
rightbtn.onclick = rotatecat;

