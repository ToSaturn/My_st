let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');
let pageHeader = document.querySelector('.page-header');
let imgLabel = document.querySelector('.image-label');
let count = 1;
let two = document.querySelector('.two');


themeButton.onclick = function() {

  page.classList.toggle('dark-theme');

}

function myEndFunction() {
  men.style.display = 'none';
};
men.addEventListener("animationend", myEndFunction);
