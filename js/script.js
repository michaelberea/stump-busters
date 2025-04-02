// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('open');
});

// Form Submission (Hero Form)
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your request! We’ll contact you soon.');
    this.reset();
});

// Form Submission (Secondary Contact Form)
document.getElementById('contact-form-secondary').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your request! We’ll contact you soon.');
    this.reset();
});