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

function scrollToTop() {
  function smoothScroll() {
    var currentScroll =
      document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScroll > 0) {
      window.requestAnimationFrame(smoothScroll);
      window.scrollTo(0, currentScroll - currentScroll / 16);
    }
  }

  smoothScroll();
}

window.onscroll = function () {
  var mybutton = document.getElementById("scrollToTopBtn");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const body = document.body;

  darkModeToggle.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");
  });
});

