'use strict';

/**
 * element toggle function
 */
const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }

/**
 * navbar toggle
 */
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

/**
 * close navbar when click on any navbar link
 */
for (let i = 0; i < navbarLinks.length; i++) { navElemArr.push(navbarLinks[i]); }

/**
 * add event on all elements for toggling navbar
 */
for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
}

/**
 * header active state
 */
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 400 ? header.classList.add("active")
    : header.classList.remove("active");
});

document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll for the contact link
  const contactLink = document.querySelector('[data-nav-link][href="#contact"]');
  if (contactLink) {
    contactLink.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default anchor behavior
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});



/**
 * Smooth scrolling to contact section
 */
document.addEventListener('DOMContentLoaded', function() {
  const enquiryButton = document.getElementById('enquiryButton');
  if (enquiryButton) {
    enquiryButton.addEventListener('click', function() {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});

