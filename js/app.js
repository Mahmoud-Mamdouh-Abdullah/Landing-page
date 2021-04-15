/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sectionList = document.getElementsByTagName('section');
const uList = document.getElementById('navbar__list');
const fragment = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function isInViewport(section) {
  const rect = section.getBoundingClientRect();
  const isInViewport = rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth);

    return isInViewport;
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function addSectionsToNav() {
  for (let i = 0; i < sectionList.length; i++) {
    const element = sectionList[i];
    const secName = element.getAttribute('data-nav');
    const secId = element.getAttribute('id');
    const liElement = document.createElement('li');
    liElement.innerHTML = `<a class='menu__link' data-sec=${secId}>${secName}</a>`;
    fragment.appendChild(liElement);
  }
  uList.appendChild(fragment);
}

// Add class 'active' to section when near top of viewport
function setActive() {
  for (let i = 0; i < sectionList.length; i++) {
    const element = sectionList[i];
    if(isInViewport(element)) {
      element.classList.add('your-active-class');
    } else {
      element.classList.remove('your-active-class');
    }
  }
}

// Scroll to anchor ID using scrollTO event
function scrollTo(event) {
  const aElement = event.target;
  if (aElement.nodeName === 'A') {
    const id = aElement.getAttribute('data-sec');
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }
}

/**
 * End Main Functions
 * Begin Events
 * 
*/
uList.addEventListener('click', function(event) {
  scrollTo(event);
});

document.addEventListener('scroll', function(event) {
  setActive();
});

// Build menu 
addSectionsToNav();

// Scroll to section on link click

// Set sections as active


