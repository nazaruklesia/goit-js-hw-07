const amountEl = document.querySelectorAll("#categories");
const itemEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${itemEl.length}`);

itemEl.forEach(item => {
    const titleEl = item.querySelector("h2");
    const textTitle = titleEl.textContent;

    const itemAmount = item.querySelectorAll("li").length;

    console.log(`Catrgory: ${ textTitle }`);
    console.log(`Elements: ${itemAmount}`);
})