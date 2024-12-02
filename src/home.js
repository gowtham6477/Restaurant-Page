export default function loadhome() {
    // Select the content div
    const content = document.querySelector("#content");
    
    // Clear previous content
    content.innerHTML = "";

    // Create a new div to hold the home page content
    const homeDiv = document.createElement("div");

    // Add an ID to the new div for styling or reference
    homeDiv.id = "home";

    // Add content to the new div
    homeDiv.innerHTML = `
        <h1>Welcome to our Restaurant</h1>
        <p>Our restaurant is a place where you can enjoy a variety of delicious food and drinks.</p>
    `;

    // Append the new content to the content div
    content.appendChild(homeDiv);
}
