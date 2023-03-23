// intro effect
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".logo", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".secondSection", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
// intro effect end

// highlight box 
const elements = document.querySelectorAll('.element');

elements.forEach(element => {
  element.addEventListener('mouseover', () => {
    element.style.boxShadow = '0 0 10px #fff';
    element.style.transform = 'scale(1.1)';
  });

  element.addEventListener('mouseout', () => {
    element.style.boxShadow = 'none';
    element.style.transform = 'scale(1)';
  });
});
// highlight box end

// Nav Bar
const navLinks = document.querySelectorAll('.navBar ul');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const section = document.querySelector(link.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});
// Nav bar end

// recipe section

// recipe section

// contact form

function sendEmail () {
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "gourmetica.ro@gmail.com",
    Password : "8E5A71F6B82D838EED24F1CB0C6AA998651D",
    To : 'gourmetica.ro@gmail.com',
    From :'gourmetica.ro@gmail.com',
    Subject : "New Enquiry",
    Body : "Name: " + document.getElementById("name").value
    + "<br> Email: " + document.getElementById("email").value
    + "<br> Phone: " + document.getElementById("phone").value
    + "<br> Message: " + document.getElementById("message").value
}).then(
  message => alert(message)
);
}
// contact form end
// scroll to top button
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// scroll to top button end

// contact form
const openFormBtn = document.getElementById("open-form");
const contactForm = document.getElementById("contact-form");

openFormBtn.addEventListener("click", function() {
  contactForm.classList.toggle("hide");
});
// contact form end