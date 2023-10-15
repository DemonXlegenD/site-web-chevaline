"use strict";

/*NAVBAR TOGGLE*/

const toggle = document.querySelector(".navbar-toggle");
const navbarMenu = document.querySelector(".list-links");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  navbarMenu.classList.toggle("active");
});

/*CARROUSEL*/

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const slides = document.querySelectorAll(".carousel-slide");
let currendIndex = 0;
let timeoutId;
checkboxes.forEach((checkbox, index) => {
  checkbox.addEventListener("change", () => changeCheck(checkbox, index));
});

function changeCheck(actualCheckbox, index) {
    for(const checkbox of checkboxes){
        checkbox.checked = false; 
    }
    checkboxes[index].checked = true;
    currendIndex = index;
    showSlide(index);
}

function showSlide(index) {
  for (const slide of slides) {
    if (slide.classList.contains("active")) {
      slide.classList.remove("active");
    }
  }
  slides[index].classList.add("active");
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(() => {
    currendIndex = (index + 1) % slides.length;
    changeCheck(checkboxes[currendIndex], currendIndex)
  }, 5000);
}
// Afficher la première diapositive au chargement de la page

checkboxes[currendIndex].checked = true;
showSlide(currendIndex);
