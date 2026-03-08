const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 140) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});




document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();

  if (
    event.key === "F12" ||
    (event.ctrlKey && event.shiftKey && ["i", "j", "c"].includes(key)) ||
    (event.ctrlKey && ["u", "s"].includes(key))
  ) {
    event.preventDefault();
  }
});





const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu && navbar) {
  navToggle.addEventListener("click", () => {
    navbar.classList.toggle("nav--open");

    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("nav--open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}
