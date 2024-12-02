import loadHome from './home';
import loadMenu from './menu';
import loadAbout from './about'; // Create a similar module for 'About'

const buttons = document.querySelectorAll("nav button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.id === "home") loadHome();
        if (button.id === "menu") loadMenu();
        if (button.id === "about") loadAbout();
    });
});
