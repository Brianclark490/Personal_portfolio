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

function openLightbox(src) {
  const lightbox = document.getElementById("lightbox-modal");
  const img = document.getElementById("lightbox-image");
  img.src = src;
  lightbox.classList.add("show");
  document.body.classList.add("lightbox-open");
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox-modal");
  lightbox.classList.remove("show");
  document.body.classList.remove("lightbox-open");

  setTimeout(() => {
    document.getElementById("lightbox-image").src = "";
  }, 300);
}

// Image click
document.querySelectorAll(".projects-list img").forEach((img) => {
  img.addEventListener("click", () => openLightbox(img.src));
});

// Esc key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});

// Click outside content
document.getElementById("lightbox-modal").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) closeLightbox();
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (name === "") {
    showError("name", "Name is required");
    isValid = false;
  } else {
    clearError("name");
  }

  if (email === "") {
    showError("email", "Email is required");
    isValid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    showError("email", "Enter a valid email address");
    isValid = false;
  } else {
    clearError("email");
  }

  if (message === "") {
    showError("message", "Message is required");
    isValid = false;
  } else {
    clearError("message");
  }

  if (isValid) {
    alert("Form submitted successfully!");
    form.reset();
  }
});

["name", "email", "message"].forEach((field) => {
  form[field].addEventListener("input", () => clearError(field));
});

function showError(field, message) {
  const error = document.getElementById(`${field}-error`);
  error.textContent = message;
}

function clearError(field) {
  const error = document.getElementById(`${field}-error`);
  error.textContent = "";
}
