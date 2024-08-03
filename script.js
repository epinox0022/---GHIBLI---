"use strict";

const hideMenu = document.querySelector(".iconMenu");
const openMenu = document.querySelector(".iconClick");

const openInfo = document.querySelector(".modalInfo");
const clickInfo = document.querySelector(".iconClik");

openMenu.onclick = () => {
  hideMenu.classList.toggle("menu");

  if (hideMenu.classList.contains("menu")) {
    openInfo.classList.add("openInfo");
  }
};

clickInfo.onclick = () => {
  openInfo.classList.toggle("openInfo");
};
