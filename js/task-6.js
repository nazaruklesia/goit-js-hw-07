const input = document.querySelector(`input[type="number"]`);
const create = document.querySelector(`button[data-create]`);
const destroy = document.querySelector(`button[data-destroy]`);
const box = document.querySelector("#boxes");


create.addEventListener("click", handleCreate);
destroy.addEventListener("click", handleDestroy);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let sizes = 30;

function handleCreate() {
  if (Number(input.value) < 1 || Number(input.value) > 100) {
    return;
  }
  createBoxes(Number(input.value));
}

function createBoxes(amount) {
  box.innerHTML = "";
  sizes = 30;
  const arr = [];

  for(let i = 0; i < amount; i++) {
    const myBox = document.createElement("div");
    myBox.style.width = `${sizes}px`;
    myBox.style.height = `${sizes}px`;
    myBox.style.backgroundColor = getRandomHexColor();
    arr.push(myBox);
    sizes += 10;
  }
  box.append(...arr);
}

function handleDestroy() {
  box.innerHTML = "";
  input.value = "";
  sizes = 30;
}
