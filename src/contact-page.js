import basicLayout from "./basiclayout";

basicLayout();

function loadContactPage() {
    const mainSection = document.querySelector("main");
    mainSection.replaceChildren();
    const heading1 = document.createElement("h1");
    heading1.textContent = "Contact Us";
    mainSection.appendChild(heading1);
}

export default loadContactPage;