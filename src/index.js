import loadHomePage from "./home-page";
import loadMenuPage from "./menu-page";
import loadContactPage from "./contact-page";

loadHomePage();

const listItems = document.querySelectorAll("li");

function loadContent(e) {
    const clickedOption = e.target.textContent;
    switch (clickedOption) {
        case "Menu":
            loadMenuPage();
            break;
        case "Contact":
            loadContactPage();
            break;
        default:
            loadHomePage();
    }
}

listItems.forEach(item => {
    item.addEventListener("click", loadContent);
});