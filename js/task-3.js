const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const fooInput = () => {
    const valueInput = nameInput.value.trim();
    console.log(valueInput);
    if (valueInput === "") {
         nameOutput.textContent = "Anonymous";
    } else {
         nameOutput.textContent = valueInput;
    }
};

nameInput.addEventListener("input", fooInput);

