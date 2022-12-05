import basicLayout from "./basiclayout";
import './style.css';
import images from "./images";

basicLayout();

function loadMenuPage() {
    const mainSection = document.querySelector("main");
    mainSection.replaceChildren();
    const heading1 = document.createElement("h1");
    heading1.textContent = "Menu";
    mainSection.appendChild(heading1);

    const menuList = document.createElement("div");
    menuList.classList.add("menu-list");
    for (let image of images) {
        const card = document.createElement("div");
        card.classList.add("image-card");
        const imageEl = document.createElement("img");
        imageEl.src = image.url;
        imageEl.setAttribute("title", `Created by ${image.author} on Unsplah`);
        const title = document.createElement("h3");
        title.textContent = image.title;
        card.appendChild(imageEl);
        card.appendChild(title);
        menuList.appendChild(card);
    }

    mainSection.appendChild(menuList);

}

export default loadMenuPage;