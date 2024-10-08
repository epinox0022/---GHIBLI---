"use strict";

function rover() {
  document.getElementById("headered").classList.add("hover");
}

function closerover() {
  document.getElementById("headered").classList.remove("hover");
}

function over1() {
  document.getElementById("header1").classList.add("hover");
}

function closeover1() {
  document.getElementById("header1").classList.remove("hover");
}

function over2() {
  document.getElementById("header2").classList.add("hover");
}

function closeover2() {
  document.getElementById("header2").classList.remove("hover");
}

function over3() {
  document.getElementById("header3").classList.add("hover");
}

function closeover3() {
  document.getElementById("header3").classList.remove("hover");
}

//
//
//
//
//
// Single Colored Letter Change on Scoll

const textElement = document.getElementById("text");

const startColor = {
  r: 4,
  g: 44,
  b: 29,
};

const endColor = {
  r: 244,
  g: 253,
  b: 255,
};

const maxScrollValue = 400;
console.log(maxScrollValue);

const updateTextColor = () => {
  const scrollPosition = Math.min(window.scrollY, maxScrollValue);

  const red = Math.round(
    startColor.r +
      (endColor.r - startColor.r) * (scrollPosition / maxScrollValue)
  );
  const green = Math.round(
    startColor.g +
      (endColor.g - startColor.g) * (scrollPosition / maxScrollValue)
  );
  const blue = Math.round(
    startColor.b +
      (endColor.b - startColor.b) * (scrollPosition / maxScrollValue)
  );

  textElement.style.color = `rgb(${red}, ${green}, ${blue})`;
};

window.addEventListener("scroll", updateTextColor);

//
//
//
//
//
// CARD FLIPPED AREA

// const card = document.getElementById("flipCard");

// card.addEventListener("click", () => {
//   card.classList.toggle("flipped");
// });
