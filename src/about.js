export default function loadAbout() {
    const content = document.querySelector("#content");
    content.innerHTML = ""; // Clear the previous content

    const about = document.createElement("div");
    about.innerHTML = `
        <h1>About</h1>
        <h1>Another about</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    `;

    content.appendChild(about);
}
