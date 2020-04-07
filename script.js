//NAVBAR
let nav = document.querySelector('nav');
let items = document.querySelectorAll('nav ul li a');
let body = document.querySelector('body');
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 0) {
    nav.style.backgroundImage = 'linear-gradient(rgba(255,255,255,1),rgba(255,255,255,0.7))';
    body.style.setProperty('--item-color', 'black');
  } else {
    nav.style.backgroundImage = 'var(--nav-grad)';
    body.style.setProperty('--item-color', 'white');
  }
});

/*// let cursor = document.createElement('div');
// cursor.classList.add('cursor');
// document.body.appendChild(cursor);

// // let cursor = document.getElementById('cursor');

// window.addEventListener('mousemove', function (e) {
//   cursor.style.top = e.y - cursor.offsetHeight/2 + 'px';
//   cursor.style.left = e.x - cursor.offsetWidth/2 + 'px';
// });*/


//ABOUT SECTION SLIDER
let frame = document.querySelector('.frame');
let slideDeck = document.querySelector('.slide-deck');
let slideCardWidth = document.querySelector('.slide-card').getBoundingClientRect().width;
window.addEventListener('resize', function () {
	slideCardWidth = document.querySelector('.slide-card').getBoundingClientRect().width;
  slideDeck.style.left = -slideCardWidth * counter + 'px';
});
let slider = document.getElementById('slide');
let counter = 0;
let interval = 7000;
//let firstCard = document.getElementById('first-card');


function slideFunction (e) {
  counter++;
  if (counter < 4) {
		slideCardWidth = document.querySelector('.slide-card').getBoundingClientRect().width;
    slideDeck.style.left = -slideCardWidth * counter + 'px';
  } else {
    slideDeck.style.left = 0 + 'px';
    counter = 0;
  }
}

var slideInterval = setInterval(slideFunction, interval);

/*slider arrows*/
let leftArrow = document.querySelector('.arrows .left-arrow');
let rightArrow = document.querySelector('.arrows .right-arrow');

rightArrow.addEventListener('click', function () {
  if (counter < 3) {
    counter++;
    slideDeck.style.left = -slideCardWidth * counter + 'px';
    clearInterval(slideInterval);
    slideInterval = setInterval(slideFunction, interval);
  }
});

leftArrow.addEventListener('click', function () {
  if (counter > 0) {
    counter--;
    slideDeck.style.left = -slideCardWidth * counter + 'px';
    clearInterval(slideInterval);
    slideInterval = setInterval(slideFunction, interval);
  }
});