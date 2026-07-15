const roles = document.querySelectorAll(".role-card");

const continueBtn = document.getElementById("continue-btn");


let selectedRole = "candidate";


// Role Selection

roles.forEach(role => {


    role.addEventListener("click", () => {


        roles.forEach(item => {

            item.classList.remove("active");

        });


        role.classList.add("active");


        selectedRole = role.dataset.role;


    });


});



// Continue Button

continueBtn.addEventListener("click", () => {


    if (selectedRole === "candidate") {


        window.location.href = "project.html";


    }

    else if (selectedRole === "employer") {


        window.location.href = "employee.html";


    }


});