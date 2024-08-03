"use strict";

const hideMenu = document.querySelector(".menu");
const openMenu = document.querySelector(".iconClick");

const openInfo = document.querySelector(".modalInfo");
const clickInfo = document.querySelector(".iconClik");

openMenu.onclick = () => {
  hideMenu.classList.toggle("menu");
};

clickInfo.onclick = () => {
  openInfo.classList.toggle("openInfo");
};

// console.log(openMenu);
