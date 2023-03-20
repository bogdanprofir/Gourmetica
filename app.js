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
const navLinks = document.querySelectorAll('.navBar ul a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const section = document.querySelector(link.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Nav bar end