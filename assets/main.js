// ====== Example Projects Data ======
// You can replace this with real data from a JSON or backend later
const projects = [
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio with glassmorphic effects.",
    link: "#"
  },
  {
    title: "School Platform",
    description: "A platform for students to connect, learn, and share projects.",
    link: "#"
  },
  {
    title: "Library System",
    description: "A Flutter app connected with Node.js and PostgreSQL for library management.",
    link: "#"
  },
  {
    title: "Falcon-X Glider",
    description: "A glider design project for a competition, Falcon-X powered.",
    link: "#"
  },
];

// ====== Render Projects ======
const projectsContainer = document.getElementById("all-projects");

projects.forEach(project => {
  const card = document.createElement("div");
  card.classList.add("project-card", "glass");

  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.link}" class="project-link">View Project →</a>
  `;

  projectsContainer.appendChild(card);
});

// ====== Reveal on Scroll ======
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const revealPoint = 150; // Adjust trigger point

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ====== Burger Menu Toggle ======
const burger = document.querySelector(".burger");
const nav = document.querySelector(".topbar .nav");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
});
