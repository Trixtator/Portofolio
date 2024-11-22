// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");

mobileMenuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    navLinks.classList.remove("active");

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Header Scroll Effect
let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    header.style.transform = "translateY(0)";
    return;
  }

  if (currentScroll > lastScroll && !navLinks.classList.contains("active")) {
    // Scrolling down
    header.style.transform = "translateY(-100%)";
  } else {
    // Scrolling up
    header.style.transform = "translateY(0)";
    header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
  }

  lastScroll = currentScroll;
});

// Skills Progress Animation
const skillsSection = document.querySelector(".skills");
const progressBars = document.querySelectorAll(".progress");

function showProgress() {
  progressBars.forEach((progressBar) => {
    const value = progressBar.dataset.value;
    progressBar.style.opacity = 1;
    progressBar.style.width = `${value}%`;
  });
}

function hideProgress() {
  progressBars.forEach((p) => {
    p.style.opacity = 0;
    p.style.width = 0;
  });
}

window.addEventListener("scroll", () => {
  const sectionPos = skillsSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 2;

  if (sectionPos < screenPos) {
    showProgress();
  } else {
    hideProgress();
  }
});

// Form Submission
const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Here you would typically send the form data to a server
  alert("Thank you for your message! I will get back to you soon.");
  form.reset();
});
