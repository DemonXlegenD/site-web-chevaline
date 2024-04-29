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
const carouselInfo = document.querySelectorAll(".carousel-information");
const carouselTitle = document.querySelectorAll(".carousel-title");
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
  for (let i = 0; i < slides.length; i++) {
    if (slides[i].classList.contains("active")) {
      slides[i].classList.remove("active");
      carouselInfo[i].classList.remove("active");
      carouselTitle[i].classList.remove("active");
    }
  }
  slides[index].classList.add("active");
  carouselInfo[index].classList.add("active");
  carouselTitle[index].classList.add("active");
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


/*SMOOTH NAVBAR*/
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
          window.scrollTo({
              top: targetSection.offsetTop,
              behavior: 'smooth'
          });
      }
  });
});

const scrollButton = document.getElementById('scrollUp');

/*SCROLL UP BUTTON*/
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    scrollButton.style.display = 'block';
  } else {
    scrollButton.style.display = 'none';
  }
});

scrollButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
});
})