const params = new URLSearchParams(window.location.search);

document.getElementById("results").innerHTML = `
    <p><strong>First Name:</strong> ${params.get("firstName") || ""}</p>

    <p><strong>Last Name:</strong> ${params.get("lastName") || ""}</p>

    <p><strong>Email:</strong> ${params.get("email") || ""}</p>

    <p><strong>Mobile Number:</strong> ${params.get("phone") || ""}</p>

    <p><strong>Business Name:</strong> ${params.get("business") || ""}</p>

    <p><strong>Date Submitted:</strong> ${params.get("timestamp") || ""}</p>
`;

document.getElementById("year").textContent =
    new Date().getFullYear();

document.getElementById("lastModified").textContent =
    document.lastModified;