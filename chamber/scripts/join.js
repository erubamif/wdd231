// Set hidden timestamp field
document.getElementById("timestamp").value = new Date().toISOString();

// Footer information
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// ===============================
// Membership Dialogs
// ===============================

// Dialog elements
const npModal = document.getElementById("npModal");
const bronzeModal = document.getElementById("bronzeModal");
const silverModal = document.getElementById("silverModal");
const goldModal = document.getElementById("goldModal");

// Open dialog buttons
const openNpModal = document.getElementById("openNpModal");
const openBronzeModal = document.getElementById("openBronzeModal");
const openSilverModal = document.getElementById("openSilverModal");
const openGoldModal = document.getElementById("openGoldModal");

// Close dialog buttons
const closeNpModal = document.getElementById("closeNpModal");
const closeBronzeModal = document.getElementById("closeBronzeModal");
const closeSilverModal = document.getElementById("closeSilverModal");
const closeGoldModal = document.getElementById("closeGoldModal");

// Open dialogs
openNpModal.addEventListener("click", () => {
    npModal.showModal();
});

openBronzeModal.addEventListener("click", () => {
    bronzeModal.showModal();
});

openSilverModal.addEventListener("click", () => {
    silverModal.showModal();
});

openGoldModal.addEventListener("click", () => {
    goldModal.showModal();
});

// Close dialogs
closeNpModal.addEventListener("click", () => {
    npModal.close();
});

closeBronzeModal.addEventListener("click", () => {
    bronzeModal.close();
});

closeSilverModal.addEventListener("click", () => {
    silverModal.close();
});

closeGoldModal.addEventListener("click", () => {
    goldModal.close();
});

// Optional: Close dialogs when clicking outside them
[npModal, bronzeModal, silverModal, goldModal].forEach(dialog => {
    dialog.addEventListener("click", (event) => {
        const rect = dialog.getBoundingClientRect();

        const clickedInDialog =
            event.clientX >= rect.left &&
            event.clientX <= rect.right &&
            event.clientY >= rect.top &&
            event.clientY <= rect.bottom;

        if (!clickedInDialog) {
            dialog.close();
        }
    });
});