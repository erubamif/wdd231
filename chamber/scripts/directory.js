const container = document.getElementById("members-container");
const gridBtn = document.getElementById("gridBtn");
const listBtn = document.getElementById("listBtn");

let membersData = [];

// Fetch JSON data
async function getMembers() {
  const response = await fetch("data/members.json");
  membersData = await response.json();
  displayMembers(membersData);
}

// Display cards
function displayMembers(data) {
  container.innerHTML = "";

  data.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}">
      <h3>${member.name}</h3>
      <p>${member.description}</p>
      <p><strong>Address:</strong> ${member.address}</p>
      <p><strong>Phone:</strong> ${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
    `;

    container.appendChild(card);
  });
}

// Toggle Grid
gridBtn.addEventListener("click", () => {
  container.classList.add("grid");
  container.classList.remove("list");
});

// Toggle List
listBtn.addEventListener("click", () => {
  container.classList.add("list");
  container.classList.remove("grid");
});

// Footer Dates
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Load data
getMembers();