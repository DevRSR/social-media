const toggle = document.querySelector(".toggle");
const select = document.querySelector(".select");
const body = document.querySelector("body");
const mode = document.querySelector(".select-mode");

toggle.onclick = () => {
  body.classList.toggle('light');
  select.classList.toggle('right');
  if(select.classList.contains('right')){
    mode.innerHTML = "Light mode"
  } else mode.innerHTML = "Dark mode"
}