/*  =========================  toggle icon navbar ============================*/

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*  =========================  scroll sections active links ============================*/

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a ");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /*  =========================  sticky navbar ============================*/

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  /*  ======= remove toggle icon and  navbar  when click navbar icon (scroll) =========*/

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/*  =========================  typed js ============================*/

const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Electrician", "Aeronautical Assembler"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

/*  =========================  anime js ============================*/
// Wrap every letter in a span
var textWrapper = document.querySelector(".extensiones");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".extensiones .letter",
    translateY: [100, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 300 + 30 * i,
  })
  .add({
    targets: ".extensiones .letter",
    translateY: [0, -100],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 1200,
    delay: (el, i) => 100 + 30 * i,
  });
// ________________________________________________________________

// Wrap every letter in a span
var textWrapper1 = document.querySelector(".extensiones1");
textWrapper1.innerHTML = textWrapper1.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".extensiones1 .letter",
    translateY: [100, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 300 + 30 * i,
  })
  .add({
    targets: ".extensiones1 .letter",
    translateY: [0, -100],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 1200,
    delay: (el, i) => 100 + 30 * i,
  });

// ________________________________________________________________

// Wrap every letter in a span
var textWrapper = document.querySelector(".repositorios");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".repositorios .letter",
    translateY: [100, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 300 + 30 * i,
  })
  .add({
    targets: ".repositorios .letter",
    translateY: [0, -100],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 1200,
    delay: (el, i) => 100 + 30 * i,
  });

// ________________________________________________________________

var textWrapper = document.querySelector(".repositorios1");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter1'>$&</span>"
);

anime({
  targets: ".repositorios1",
  translateX: 250,
  direction: "alternate",
  loop: true,
  easing: "linear",
});

// ________________________________________________________________

// Wrap every letter in a span
var textWrapper = document.querySelector(".librerias");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".librerias .letter",
    translateY: [100, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 300 + 30 * i,
  })
  .add({
    targets: ".librerias .letter",
    translateY: [0, -100],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 1200,
    delay: (el, i) => 100 + 30 * i,
  });

/*  =========================  scroll reveal ============================*/

ScrollReveal({
  reset: true,
  distance: "180px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".Development ", { origin: "left" });
ScrollReveal().reveal(".Electrician ", { origin: "right" });
ScrollReveal().reveal(".portafolio-box ", { origin: "bottom" });
ScrollReveal().reveal(".Aeronautical", { origin: "bottom" });
