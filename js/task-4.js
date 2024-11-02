const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const elements = event.target.elements;

    const info = {
        email: elements.email.value,
        password: elements.password.value
    } 
 
    if (info.email === "" || info.password === "") {
        alert('All form fields must be filled in');
        return;
    }
    form.reset();
}
