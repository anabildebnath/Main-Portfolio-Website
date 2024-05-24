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
  window.open("mailto:anabildebnath16@gmail.com");
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

//Theme mode
document.addEventListener("DOMContentLoaded", function () {
  //Taking two variables for id of the theme button and body
  const darkModeToggle = document.getElementById("darkModeToggle");
  const body = document.body;

  //Now listening to the click, once clicked the body variable is passed in toggleMode function
  darkModeToggle.addEventListener("click", function () {
    toggleMode(body);
  });

  // Function to toggle the mode, every click will invoke the alternative theme
  function toggleMode(bodyElement) {
    bodyElement.classList.toggle("light-mode");
    bodyElement.classList.toggle("dark-mode");

    // Storing the current mode in local storage, so that after reload the theme remains the same
    const mode = bodyElement.classList.contains("light-mode")
      ? "light"
      : "dark";
    localStorage.setItem("themeMode", mode);
  }

  // Checking local storage for theme mode
  const savedMode = localStorage.getItem("themeMode");
  if (savedMode) {
    // Removing existing mode classes to prevent both classes from being applied
    body.classList.remove("light-mode", "dark-mode");

    // Applying the saved mode class to the body
    body.classList.add(savedMode + "-mode");
  }
});

function isInViewport(element) {
  var bounding = element.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleAnimation() {
  var animationElement = document.querySelector(".animationTrigger");

  if (isInViewport(animationElement)) {
    animationElement.classList.add("animate");
  }
}

window.addEventListener("scroll", handleAnimation);
window.addEventListener("load", handleAnimation);
