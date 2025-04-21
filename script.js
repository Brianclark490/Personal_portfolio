document.addEventListener("click", function (event) {
  const navMenu = document.querySelector(".nav-menu");
  const navButton = document.querySelector(".nav-dropdown .hamburger");
  const filterMenu = document.querySelector(".dropdown-menu");
  const filterButton = document.querySelector(".filter-dropdown .hamburger");

  const clickedNav =
    navMenu?.contains(event.target) || navButton?.contains(event.target);
  const clickedFilter =
    filterMenu?.contains(event.target) || filterButton?.contains(event.target);

  if (!clickedNav && navMenu) {
    navMenu.classList.remove("visible");
  }

  if (!clickedFilter && filterMenu) {
    filterMenu.style.display = "none";
  }
});

document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.querySelector(".nav-menu");
    if (menu) menu.classList.remove("visible");
  });
});

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

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      const yOffset = -100; // height of your fixed header
      const y =
        target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
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

// Open the lightbox with the selected image
function openLightbox(src) {
  const lightboxModal = document.getElementById("lightbox-modal");
  const lightboxImage = document.getElementById("lightbox-image");

  lightboxImage.src = src;
  lightboxModal.style.display = "flex";
}

// Close the lightbox
function closeLightbox() {
  const lightboxModal = document.getElementById("lightbox-modal");
  lightboxModal.style.display = "none";
}

// Add click event listeners to all project images
document.querySelectorAll(".projects-list img").forEach((img) => {
  img.addEventListener("click", function () {
    openLightbox(this.src);
  });
});

// Close lightbox if the user clicks outside the image
document
  .getElementById("lightbox-modal")
  .addEventListener("click", function (event) {
    if (event.target === this) {
      closeLightbox();
    }
  });
