'use strict';

const hideMenu = document.querySelector('.menu');
const openMenu = document.querySelector('.iconClick');

openMenu.onclick = () => {
hideMenu.classList.toggle('menu');
  }

console.log(openMenu);  