// =====================================
// Employer Dashboard JavaScript
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // Notification Button
    // ==========================

    const notificationBtn = document.querySelector(".notification-btn");

    if (notificationBtn) {
        notificationBtn.addEventListener("click", () => {
            alert("You have 5 new notifications.");
        });
    }

    // ==========================
    // Post Job Button
    // ==========================

    const postJobBtn = document.querySelector(".post-job-btn");

    if (postJobBtn) {
        postJobBtn.addEventListener("click", () => {
            alert("Redirecting to Post Job page...");
            // window.location.href = "post-job.html";
        });
    }

    // ==========================
    // Navbar Active Link
    // ==========================

    const navLinks = document.querySelectorAll(".navbar-menu a");

    navLinks.forEach(link => {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            navLinks.forEach(item => {
                item.classList.remove("active");
            });

            this.classList.add("active");

        });

    });

    // ==========================
    // Quick Action Cards
    // ==========================

    const actionCards = document.querySelectorAll(".action-card");

    actionCards.forEach(card => {

        card.addEventListener("click", () => {

            const title = card.querySelector("h3").innerText;

            alert(title + " clicked.");

        });

    });

    // ==========================
    // Job Card Buttons
    // ==========================

    const jobButtons = document.querySelectorAll(".job-card button");

    jobButtons.forEach(button => {

        button.addEventListener("click", function () {

            const jobTitle =
                this.parentElement.querySelector("h3").innerText;

            alert("Opening details for: " + jobTitle);

        });

    });

    // ==========================
    // Applicant View Buttons
    // ==========================

    const applicantButtons =
        document.querySelectorAll(".applicant-section button");

    applicantButtons.forEach(button => {

        button.addEventListener("click", function () {

            const row = this.parentElement.parentElement;

            const candidateName =
                row.children[0].innerText;

            alert("Viewing profile of " + candidateName);

        });

    });

    // ==========================
    // Statistics Card Animation
    // ==========================

    const statCards = document.querySelectorAll(".stat-card");

    statCards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-10px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0)";

        });

    });

    // ==========================
    // Pipeline Cards
    // ==========================

    const candidateCards =
        document.querySelectorAll(".candidate-box");

    candidateCards.forEach(card => {

        card.addEventListener("click", () => {

            alert("Candidate: " + card.innerText);

        });

    });

    // ==========================
    // Analytics Cards
    // ==========================

    const analyticsCards =
        document.querySelectorAll(".analytics-card");

    analyticsCards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "scale(1.04)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "scale(1)";

        });

    });

    // ==========================
    // Dashboard Welcome Message
    // ==========================

    console.log("Employer Dashboard Loaded Successfully");

});