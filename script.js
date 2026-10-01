const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

const revealObserver = new IntersectionObserver(
  entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = "80ms";
      entry.target.classList.add("reveal");
      revealObserver.unobserve(entry.target);
    }
  }),
  { threshold: 0.08 }
);

document.querySelectorAll(".section, .project-card, .skill-card, .timeline-item, .edu-item").forEach(el => {
  el.classList.remove("reveal");
  revealObserver.observe(el);
});
