import basicLayout from "./basiclayout";
import './style.css';

basicLayout();

function loadContactPage() {
    const mainSection = document.querySelector("main");
    mainSection.replaceChildren();
    const heading1 = document.createElement("h1");
    heading1.textContent = "Contact Us";
    mainSection.appendChild(heading1);

    const form = document.createElement("form");



    const fieldsetName = document.createElement("fieldset");
    const labelName = document.createElement("label");
    labelName.textContent = "Enter your name;";
    const inputName = document.createElement("input");
    inputName.setAttribute("type", "text");
    fieldsetName.appendChild(labelName);
    fieldsetName.appendChild(inputName);
    form.appendChild(fieldsetName);

    const fieldsetEmail = document.createElement("fieldset");
    const labelEmail = document.createElement("label");
    labelEmail.textContent = "Enter your email:";
    const inputEmail = document.createElement("input");
    inputEmail.setAttribute("type", "email");
    fieldsetEmail.appendChild(labelEmail);
    fieldsetEmail.appendChild(inputEmail);
    form.appendChild(fieldsetEmail);

    const fieldsetMessage = document.createElement("fieldset");
    const labeMessage = document.createElement("label");
    labeMessage.textContent = "Enter your message:";
    const inputMessage = document.createElement("textarea");
    inputMessage.setAttribute("rows", "7");
    fieldsetMessage.appendChild(labeMessage);
    fieldsetMessage.appendChild(inputMessage);
    form.appendChild(fieldsetMessage);

    const formButton = document.createElement("button");
    formButton.textContent = "Send";
    form.appendChild(formButton);

    mainSection.appendChild(form);
}

export default loadContactPage;