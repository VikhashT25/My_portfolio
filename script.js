// --- Contact Form Handling ---
const messageBox = document.getElementById('formMessage');

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
// mail send
const btn = document.getElementById('su');

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  btn.value = 'Sending...';

  const serviceID = 'default_service';
  const templateID = 'template_7xxtkei';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});


// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Select all anchor links inside nav that start with #
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default jump

      const targetId = link.getAttribute("href").substring(1); // Get ID (without #)
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        // Smooth scroll to section
        window.scrollTo({
          top: targetSection.offsetTop - 70, // Adjust if you have fixed header
          behavior: "smooth"
        });
      }
    });
  });
});








  
