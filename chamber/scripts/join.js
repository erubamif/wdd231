document.getElementById("timestamp").value =
    new Date().toISOString();

document.getElementById("year").textContent =
    new Date().getFullYear();

document.getElementById("lastModified").textContent =
    document.lastModified;