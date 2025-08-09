// --- Contact Form Handling ---
const form = document.getElementById('contactForm');
const messageBox = document.getElementById('formMessage');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  form.reset();
  messageBox.textContent = "Thank you for reaching out! I'll be in touch soon.";
});

// --- Skills Tooltip Handling ---
const skills = document.querySelectorAll(".skill-item");
const tooltip = document.getElementById("skill-tooltip");

skills.forEach(item => {
  item.addEventListener("mouseenter", (e) => {
    tooltip.textContent = item.getAttribute("data-name");
    tooltip.style.opacity = 1;
  });
  item.addEventListener("mouseleave", (e) => {
    tooltip.style.opacity = 0;
  });
  item.addEventListener("mousemove", (e) => {
    // If the event is on the image (not the div), correct the offset
    const mouseX = e.pageX;
    const mouseY = e.pageY;
    tooltip.style.left = (mouseX - 40) + "px";
    tooltip.style.top = (mouseY - 44) + "px";
  });
});

// Scroll Animation using Intersection Observer
document.addEventListener("DOMContentLoaded", function () {
  const animatedEls = document.querySelectorAll(".scroll-hidden");
  const observer = new window.IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("scroll-visible");
          observer.unobserve(entry.target); // Animate once
        }
      });
    },
    { threshold: 0.30 }
  );

  animatedEls.forEach(el => observer.observe(el));
});






  
