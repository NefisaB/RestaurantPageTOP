import './style.css';
const content = document.querySelector("#content");

function basicLayout() {
    const navElement = document.createElement("div");
    navElement.classList.add("navBar");
    const list = document.createElement("ul");
    const array = ["Home", "Menu", "Contact"];
    for (let i = 0; i < 3; i++) {
        const li = document.createElement("li");
        li.textContent = array[i];
        li.classList.add("navbar-li");
        list.appendChild(li);
    }
    navElement.appendChild(list);
    content.appendChild(navElement);
    const main = document.createElement("main");
    content.appendChild(main);
}

export default basicLayout;