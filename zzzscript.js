// Sidebar Toggle
document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.getElementById("sidebarToggle");

  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener("click", () => {
      sidebar.classList.toggle("open"); // match this with CSS class "open"
    });
  }

  // Slideshow Logic
  const slides = document.querySelectorAll(".slide");
  let slideIndex = 0;

  function showSlides() {
    slides.forEach((slide, i) => {
      slide.style.display = i === slideIndex ? "block" : "none";
    });

    slideIndex = (slideIndex + 1) % slides.length;
    setTimeout(showSlides, 3000); // 3-second interval
  }

  if (slides.length > 0) {
    showSlides();
  }
});
