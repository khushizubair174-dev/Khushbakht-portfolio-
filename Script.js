const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    formMessage.textContent = "Thank you, " + name + "! Your message has been received.";
    formMessage.style.color = "green";

    contactForm.reset();
});
