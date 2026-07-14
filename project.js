const menu = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// ==========================
// Complete Profile Button
// ==========================

console.log("JS Loaded");

const btn = document.querySelector(".profile-btn");

console.log(btn);

btn.addEventListener("click", () => {
    alert("Working");
});


// ==========================
// Job Search
// ==========================

const searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("click", () => {

    const jobTitle = document.querySelector(
        '.job-search-section input[placeholder="Job Title"]'
    ).value;

    const location = document.querySelector(
        '.job-search-section input[placeholder="Location"]'
    ).value;

    const experience = document.querySelectorAll(
        ".job-search-section select"
    )[0].value;

    const jobType = document.querySelectorAll(
        ".job-search-section select"
    )[1].value;

    console.log("Search Data");
    console.log("Job Title :", jobTitle);
    console.log("Location :", location);
    console.log("Experience :", experience);
    console.log("Job Type :", jobType);

    alert("Search functionality will be connected to the backend.");
});


// ==========================
// View Details Button
// ==========================

const viewButtons = document.querySelectorAll(".recommended-job-card button");

viewButtons.forEach((button) => {

    button.addEventListener("click", function () {

        const jobTitle = this.parentElement.querySelector("h3").innerText;

        alert(`Opening details for ${jobTitle}`);

    });

});


// ==========================
// Navbar Active Link
// ==========================

const navLinks = document.querySelectorAll(".candidate-nav-menu a");

navLinks.forEach((link) => {

    link.addEventListener("click", function () {

        navLinks.forEach((item) => {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});


// ==========================
// Progress Bar Animation
// ==========================

const progressBar = document.querySelector(".progress-fill");

let progress = 0;
const target = 85;

const interval = setInterval(() => {

    if (progress >= target) {
        clearInterval(interval);
    } else {
        progress++;
        progressBar.style.width = progress + "%";
    }

}, 20);


// ==========================
// Stats Card Hover
// ==========================

const statCards = document.querySelectorAll(".stats-card");

statCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-8px)";
        card.style.transition = "0.3s";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });

});