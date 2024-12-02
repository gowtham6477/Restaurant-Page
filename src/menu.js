export default function loadMenu() {
    const content = document.querySelector("#content");
    content.innerHTML = ""; // Clear the previous content

    const menu = document.createElement("div");
    menu.innerHTML = `
        <h1>Menu</h1>
        <ul>
            <li>Pizza</li>
            <li>Burger</li>
            <li>Pasta</li>
        </ul>
    `;

    content.appendChild(menu);
}
