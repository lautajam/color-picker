
const inputColor = document.getElementById("inputColor");
const showColor = document.getElementById("showColor");
const textColor = document.getElementById("textColor");
const cardColor = document.getElementById("cardColor");
const colorList = document.getElementById("colorList");
const colorHistoryTemplate = document.getElementById("colorHistoryTemplate");

const fragment = document.createDocumentFragment();

showColor.addEventListener("click", () =>{
    console.log(`
    The color now is:
    ${inputColor.value}
    `)
    textColor.textContent = inputColor.value;
    cardColor.style.backgroundColor = inputColor.value;

    const clone = colorHistoryTemplate.content.firstElementChild.cloneNode(true);
    clone.querySelector("#colorShow").textContent = inputColor.value;
    fragment.appendChild(clone);
    colorList.appendChild(fragment);
});

