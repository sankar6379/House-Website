// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Reveal animation on scroll
const revealElements = document.querySelectorAll('.house-card, .about-content, .contact-form');

const scrollReveal = () => {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add('pop'); // animate with pop keyframe
    }
  });
};

window.addEventListener('scroll', scrollReveal);

// Button ripple effect
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', function (e) {
    const circle = document.createElement('span');
    const rect = button.getBoundingClientRect();
    circle.classList.add('ripple');
    circle.style.left = `${e.clientX - rect.left}px`;
    circle.style.top = `${e.clientY - rect.top}px`;
    this.appendChild(circle);

    setTimeout(() => circle.remove(), 600);
  });
});

// Optional: Form input validation (basic)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    const name = this.querySelector('input[name="name"]');
    const email = this.querySelector('input[name="email"]');
    const message = this.querySelector('textarea[name="message"]');

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      alert("Please fill in all fields before submitting.");
      e.preventDefault();
    }
  });
}

// Optional: View Details functionality (basic placeholder)
document.querySelectorAll('.details-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    alert("This will open more details in future. Coming soon!");
  });
});

// Ripple animation CSS (auto-injected if needed)
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
.ripple {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.6);
  transform: scale(0);
  animation: rippleEffect 0.6s linear;
  pointer-events: none;
  z-index: 1;
  width: 100px;
  height: 100px;
}
@keyframes rippleEffect {
  to {
    transform: scale(4);
    opacity: 0;
  }
}`;
document.head.appendChild(rippleStyle);
