const menu = document.getElementById("menu");
const scrollBtn = document.getElementById("scroll-btn");
const nav = document.getElementById("mobile-nav");

const linkList = document.querySelectorAll("#nav-link");

menu.addEventListener("click", function (e) {
  nav.classList.toggle("hidden");
});

linkList.forEach((item) => {
  item.addEventListener("click", function (e) {
    nav.classList.add("hidden");
  });
});

//scroll to top
scrollBtn.addEventListener("click", function (e) {
  window.scrollTo(0, 0);
});

window.addEventListener("scroll", function (e) {
  if (this.window.scrollY < 1000) {
    scrollBtn.classList.add("hidden");
  } else {
    scrollBtn.classList.remove("hidden");
  }
});
