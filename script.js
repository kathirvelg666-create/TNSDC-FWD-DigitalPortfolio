// Navbar Toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Contact Form
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for reaching out! I will get back to you soon.");
  this.reset();
});