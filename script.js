function toggleMenu(hamburgerSelector, navMenuSelector) {
  const hamburger = document.querySelector(hamburgerSelector);
  const navMenu = document.querySelector(navMenuSelector);

  if (!hamburger || !navMenu) return;

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("visible");
  });
}

// Example usage:
toggleMenu(".hamburger", ".nav-menu");

// Smooth scrolling for internal navigation links
document.querySelectorAll('.nav-menu a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});
function toggleDropdown() {
  const dropdown = document.querySelector(".dropdown-menu");
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";
}

function filterProjects(category) {
  const projects = document.querySelectorAll(".projects-list article");

  projects.forEach((project) => {
    const projectCategory = project.getAttribute("data-category");

    if (category === "all" || projectCategory === category) {
      project.style.display = "block"; // Show matching projects
    } else {
      project.style.display = "none"; // Hide non-matching projects
    }
  });

  // Close the dropdown after selecting a filter
  const dropdown = document.querySelector(".dropdown-menu");
  dropdown.style.display = "none";
}
