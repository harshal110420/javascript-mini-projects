// script.js
const nav = () => {
  let icon = document.getElementById("icon");
  let navbar = document.getElementById("navbar");

  if (icon.classList.contains("fa-bars")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
    navbar.style.left = "0";
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
    navbar.style.left = "-100%";
  }
};
