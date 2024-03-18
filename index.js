const theme = document.querySelector(".theme");
const body = document.querySelector("body");
const photo = document.querySelector(".photo");

theme.addEventListener("click", () => {
  body.classList.toggle("dark")
  photo.classList.toggle("dark2")
})