function scrollToProject() {
  var targetProject = document.getElementById("targetProject");
  targetProject.scrollIntoView({ behavior: "smooth" });
}
function scrollToAbout() {
  var targetAbout = document.getElementById("targetAbout");
  targetAbout.scrollIntoView({ behavior: "smooth" });
}
function scrollToContact() {
  var targetContact = document.getElementById("targetContact");
  targetContact.scrollIntoView({ behavior: "smooth" });
}

function openMail() {
  window.open("mailto: anabildebnath16@gmail.com");
}

//This function creates a scroll point by clicking which we can get to the very top at our website
function scrollToTop() {
  function smoothScroll() {
    var currentScroll =
      document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScroll > 0) {
      window.requestAnimationFrame(smoothScroll);

      //Here we are going to 0(top at the website) and we are implementing smooth scrolling speed by taking to a new vertical position.So if we increase the denominator 16 to 32 it will pass less distance to the top compared to 8
      window.scrollTo(0, currentScroll - currentScroll / 16);
    }
  }

  smoothScroll();
}

window.onscroll = function () {
  var mybutton = document.getElementById("scrollToTopBtn");

  // Get the scroll position either from window of document for better compatibility througout different browsers
  var scrollPosition = window.scrollY || document.documentElement.scrollTop;

  // Check if the scroll position is greater than zero, this means we have scrolled at least some length from the initial top page
  if (scrollPosition > 0) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const body = document.body;

  darkModeToggle.addEventListener("click", function () {
    body.classList.toggle("light-mode");
    body.classList.toggle("dark-mode");
  });
});


function isInViewport(element) {
  var bounding = element.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleAnimation() {
  var animationElement = document.querySelector('.animationTrigger');

  if (isInViewport(animationElement)) {
    animationElement.classList.add('animate');
  }
}

window.addEventListener('scroll', handleAnimation);
window.addEventListener('load', handleAnimation);

