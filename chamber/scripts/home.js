javascript
// Footer Information
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// ==========================
// WEATHER
// ==========================

const apiKey = "9c613aab123baa2566352ba5026d3dc8";

// Lagos coordinates
const lat = 6.5244;
const lon = 3.3792;

const currentWeatherURL =
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

const forecastURL =
  `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function getWeather() {
  try {
    const response = await fetch(currentWeatherURL);
    const data = await response.json();

    document.getElementById("current-temp").textContent =
      `${Math.round(data.main.temp)}°C`;

    document.getElementById("weather-desc").textContent =
      data.weather[0].description;
  } catch (error) {
    console.error(error);
  }
}

async function getForecast() {
  try {
    const response = await fetch(forecastURL);
    const data = await response.json();

    const forecastContainer = document.getElementById("forecast");

    // Select one forecast for each of the next 3 days (around noon)
    const filtered = data.list.filter(item =>
      item.dt_txt.includes("12:00:00")
    );

    forecastContainer.innerHTML = "";

    filtered.slice(0, 3).forEach(day => {
      const date = new Date(day.dt_txt);

      const forecastCard = document.createElement("p");

      forecastCard.textContent =
        `${date.toLocaleDateString("en-US", { weekday: "short" })}: ${Math.round(day.main.temp)}°C`;

      forecastContainer.appendChild(forecastCard);
    });

  } catch (error) {
    console.error(error);
  }
}

// ==========================
// SPOTLIGHTS
// ==========================

async function getSpotlights() {

  const response = await fetch("data/members.json");
  const members = await response.json();

  const qualifiedMembers = members.filter(
    member => member.membership === 2 || member.membership === 3
  );

  qualifiedMembers.sort(() => Math.random() - 0.5);

  const selectedMembers = qualifiedMembers.slice(0, 3);

  const container = document.getElementById("spotlight-container");

  container.innerHTML = "";

  selectedMembers.forEach(member => {

    const card = document.createElement("article");
    card.classList.add("card");

    const level =
      member.membership === 3 ? "Gold Member" : "Silver Member";

    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}">
      <h3>${member.name}</h3>
      <p>${level}</p>
      <p>${member.phone}</p>
      <p>${member.address}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
    `;

    container.appendChild(card);
  });
}

getWeather();
getForecast();
getSpotlights();