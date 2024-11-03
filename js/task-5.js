
const btn = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");
const bodyColor = document.querySelector("body");

btn.addEventListener("click", handleClick);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function handleClick() {
  const totalColor = getRandomHexColor();
  bodyColor.style.backgroundColor = totalColor;
  spanColor.textContent = totalColor;
  
  return;
}
