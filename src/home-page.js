import basicLayout from "./basiclayout";
import './style.css';
import micka from "./images/micka.png";
import entei from "./images/entei.png";

basicLayout();

function loadHomePage() {
    const mainSection = document.querySelector("main");
    mainSection.replaceChildren();
    const headingDiv = document.createElement("div");
    headingDiv.classList.add("heading-div");
    const heading1 = document.createElement("h1");
    heading1.textContent = "Cat Biscuit House";
    headingDiv.appendChild(heading1);
    mainSection.appendChild(headingDiv);

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("info-div");

    const welcome = document.createElement("div");
    welcome.classList.add("welcome-description");
    const heading2 = document.createElement("h2");
    heading2.textContent = "Welcome";
    const welcomeInfo = document.createElement("p");
    welcomeInfo.innerHTML = "Welcome to our Cat Biscuit House. Where biscuits are made with love and paws. Enjoy our specialities made by our very own paws, with a milk aside and a cat in your lap.Enjoy your milk and try not to purr! <br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis mauris et justo dignissim laoreet. Donec tempor augue sit amet metus rhoncus porta eu in mauris. Nam a lectus in lacus tempor mollis sit amet ut sem. Maecenas neque sem, aliquam non lacus et, feugiat finibus risus. Suspendisse tempus ex in ligula pretium maximus. Fusce nunc eros, convallis vitae luctus vitae, scelerisque in nibh. Nullam volutpat condimentum rutrum. Sed rhoncus ante ac nunc ultrices aliquam. Vivamus ornare nibh a nibh vulputate volutpat. Cras eget dui ut turpis vulputate laoreet quis in metus. Quisque ut urna elementum, aliquet quam a, gravida erat. Cras auctor vitae neque vitae rhoncus. Nunc condimentum in tortor vel porta. ";
    welcome.appendChild(heading2);
    welcome.appendChild(welcomeInfo);
    infoDiv.appendChild(welcome);

    const chefs = document.createElement("div");
    chefs.classList.add("chefs");
    const heading3 = document.createElement("h3");
    heading3.textContent = "Our chefs:";
    chefs.appendChild(heading3);

    const card1 = document.createElement("div");
    card1.classList.add("card");
    const image1 = document.createElement("img");
    image1.src = entei;
    card1.appendChild(image1);
    const chefInfo1 = document.createElement("div");
    const chefName1 = document.createElement("h4");
    chefName1.textContent = "Entei";
    const aboutChef1 = document.createElement("p");
    aboutChef1.textContent = "Our oldest and most experienced chef. His specialty is everything."
    chefInfo1.appendChild(chefName1);
    chefInfo1.appendChild(aboutChef1);
    card1.appendChild(chefInfo1);
    chefs.appendChild(card1);

    const card2 = document.createElement("div");
    card2.classList.add("card");
    const image2 = document.createElement("img");
    image2.src = micka;
    card2.appendChild(image2);
    const chefInfo2 = document.createElement("div");
    const chefName2 = document.createElement("h4");
    chefName2.textContent = "Micka";
    const aboutChef2 = document.createElement("p");
    aboutChef2.textContent = "Newest member of our team. Her specialty is purring."
    chefInfo2.appendChild(chefName2);
    chefInfo2.appendChild(aboutChef2);
    card2.appendChild(chefInfo2);
    chefs.appendChild(card2);

    infoDiv.appendChild(chefs);

    mainSection.appendChild(infoDiv);
}

export default loadHomePage;