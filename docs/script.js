const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];


// booking site open when i click the button
function navigateToPage() {
    window.location.href = "booking.html";
}

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
})