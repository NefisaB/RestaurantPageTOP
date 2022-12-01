import basicLayout from "./basiclayout";
import './style.css';

basicLayout();

function loadMenuPage() {
    const mainSection = document.querySelector("main");
    mainSection.replaceChildren();
    const heading1 = document.createElement("h1");
    heading1.textContent = "Menu";
    mainSection.appendChild(heading1);
}

export default loadMenuPage;