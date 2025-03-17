// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

// scroll section activelink
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

// scroll reveal
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container, .projects-box, .contact form ', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

// Typed Js
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Developer', 'Full Stack Developer'],
    typeSpeed: 100,        // Typing speed in milliseconds
    backSpeed: 50,         // Backspacing speed in milliseconds
    backDelay: 1000,       // Delay before starting to erase after completing a string
    loop: true,
});





// EmailJS Initialization
window.onload = function () {
    emailjs.init("NYnvIuq3acCm4ChI4"); // Replace with your public key
};

// Form submission event listener
document.getElementById("contactform").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page refresh

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const ph = document.getElementById("ph").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const templateParams = {
        name: name,
        email: email,
        ph: ph,
        subject: subject,
        message: message,
    };

    // Send email using EmailJS
emailjs
      .send("service_3d5y8vo","template_0wut8hz", templateParams)
      .then(function (response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("Sent successfully!");
      })
      .catch(function (error) {
        console.error("FAILED...", error);
        alert("Failed to send.Please try again.");
      });
});
