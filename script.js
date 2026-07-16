// ==========================================
// MOBILE NAVIGATION MENU
// ==========================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const menuIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");
  } else {
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
  }
});

// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");

    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
  });
});

// ==========================================
// STICKY NAVBAR
// ==========================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";
  } else {
    header.style.boxShadow = "none";
  }
});

// ==========================================
// ACTIVE NAVIGATION LINK
// ==========================================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// ==========================================
// BACK TO TOP BUTTON
// ==========================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ==========================================
// SCROLL REVEAL ANIMATION
// ==========================================

const revealElements = document.querySelectorAll(
  ".hero-content, .hero-image, .about, .skills, .services, .projects, .resume, .testimonials, .contact",
);

function revealOnScroll() {
  revealElements.forEach((element) => {
    const windowHeight = window.innerHeight;
    const revealTop = element.getBoundingClientRect().top;
    const revealPoint = 120;

    if (revealTop < windowHeight - revealPoint) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
}

revealElements.forEach((element) => {
  element.style.opacity = "0";
  element.style.transform = "translateY(50px)";
  element.style.transition = "all .8s ease";
});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// ==========================================
// CONTACT FORM
// ==========================================

const form = document.querySelector(".contact-form form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    alert("Thank you! Your message has been sent successfully.");

    form.reset();
  });
}

// ==========================================
// BUTTON HOVER EFFECT
// ==========================================

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "scale(1.05)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "scale(1)";
  });
});

// ==========================================
// IMAGE HOVER EFFECT
// ==========================================

const images = document.querySelectorAll(".project-card img");

images.forEach((image) => {
  image.addEventListener("mouseenter", () => {
    image.style.filter = "brightness(90%)";
  });

  image.addEventListener("mouseleave", () => {
    image.style.filter = "brightness(100%)";
  });
});

// ==========================================
// CURRENT YEAR IN FOOTER (OPTIONAL)
// ==========================================

const copyright = document.querySelector(".copyright");

if (copyright) {
  copyright.innerHTML = `© ${new Date().getFullYear()} Faiza Imtiaz. All Rights Reserved.`;
}

// ==========================================
// PAGE LOADED
// ==========================================

window.addEventListener("load", () => {
  console.log("Portfolio Website Loaded Successfully");
});
