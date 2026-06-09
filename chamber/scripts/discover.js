import { places } from "../data/places.mjs";

const grid = document.getElementById("discover-grid");

places.forEach((place, index) => {
    const card = document.createElement("article");

    card.className = `discover-card card${index + 1}`;

    card.innerHTML = `
        <h2>${place.name}</h2>

        <figure>
            <img src="images/${place.image}"
                 alt="${place.name}"
                 width="300"
                 height="200"
                 loading="lazy">
        </figure>

        <address>${place.address}</address>

        <p>${place.description}</p>

       <button type="button">Learn More</button>
    `;

    grid.appendChild(card);
});

// Local Storage Visit Message
const visitMessage = document.getElementById("visit-message");

const lastVisit = Number(localStorage.getItem("lastVisit"));
const now = Date.now();

if (!lastVisit) {
    visitMessage.textContent =
        "Welcome! Let us know if you have any questions.";
} else {
    const days = Math.floor((now - lastVisit) / 86400000);

    if (days < 1) {
        visitMessage.textContent =
            "Back so soon! Awesome!";
    } else if (days === 1) {
        visitMessage.textContent =
            "You last visited 1 day ago.";
    } else {
        visitMessage.textContent =
            `You last visited ${days} days ago.`;
    }
}

localStorage.setItem("lastVisit", now);

// Footer
document.getElementById("year").textContent =
    new Date().getFullYear();

document.getElementById("lastModified").textContent =
    document.lastModified;

