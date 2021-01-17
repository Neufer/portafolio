const header = document.querySelector(".header");
const homebg = document.querySelector(".home_bg");
const menu = document.querySelector(".navmenu");
const links = document.querySelector(".menu_links");
const sections = document.querySelectorAll("section");
const config = {
  rootMargin: "0px",
  threshold: [0.6, 0.9],
};

function handleLlinks() {
  if (window.innerWidth <= 991) {
    links.classList.toggle("visible");
  }
}

menu.addEventListener("click", handleLlinks);
links.addEventListener("click", handleLlinks);

window.addEventListener("scroll", function () {
  window.scrollY > 100 && (header.style.background = `rgba(0,0,0,0.9)`);
  window.scrollY < 100 && (header.style.background = `transparent`);
});

let observer = new IntersectionObserver(function (entries, self) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      intersectionHandler(entry);
    }
  });
}, config);

sections.forEach((section) => {
  observer.observe(section);
});

function intersectionHandler(entry) {
  const id = entry.target.id;
  const currentlyActive = document.querySelector(".menu_links  .active");
  const shouldBeActive = document.querySelector(".menu_links [data-ref=" + id + "]");

  if (currentlyActive) {
    currentlyActive.classList.remove("active");
  }
  if (shouldBeActive) {
    shouldBeActive.classList.add("active");
  }
}


ScrollReveal().reveal(".header", { delay: 250 });
ScrollReveal().reveal(".description", { delay: 350 });
ScrollReveal().reveal(".picture", { delay: 350 });
ScrollReveal().reveal(".about_description", { delay: 350 });
ScrollReveal().reveal(".about_skills", { delay: 450 });
ScrollReveal().reveal(".button--cta", { delay: 550 });
ScrollReveal().reveal(".title", { delay: 450 });
ScrollReveal().reveal(".skill_item", { delay: 450 });
ScrollReveal().reveal(".services_item", { delay: 450 });
ScrollReveal().reveal(".proyect_item", { delay: 450 });
ScrollReveal().reveal(".contact__item", { delay: 450 });
ScrollReveal().reveal(".footer", { delay: 450 });