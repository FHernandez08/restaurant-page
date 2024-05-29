// tab-switching logic
import { homePage } from "./home";
import { aboutSection } from "./about";
import { menuSection } from "./menu";
import { contactSection } from "./contact";

document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const homeBtn = document.querySelector('#home');
    const aboutBtn = document.querySelector('#about');
    const menuBtn = document.querySelector('#menu');
    const contactBtn = document.querySelector('#contact');

    homeBtn.addEventListener('click', () => {
        content.innerHTML = '';
        content.appendChild(homePage());
    });

    aboutBtn.addEventListener('click', () => {
        content.innerHTML = '';
        content.appendChild(aboutSection());
    });

    menuBtn.addEventListener('click', () => {
        content.innerHTML = '';
        content.appendChild(menuSection());
    });

    contactBtn.addEventListener('click', () => {
        content.innerHTML = '';
        content.appendChild(contactSection());
    });

    content.appendChild(homePage());
});