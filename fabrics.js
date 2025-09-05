// Textiles Page JavaScript

// Handle Enquire Now button clicks
document.addEventListener("DOMContentLoaded", function () {
  // Get all enquire buttons
  const enquireButtons = document.querySelectorAll(".enquire-btn");

  enquireButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Get product name from the card
      const productCard = this.closest(".product-card");
      const productName = productCard.querySelector("h3").textContent;

      // Redirect to main page enquiry form with product name
      window.location.href = `index.html#enquiry-form?product=${encodeURIComponent(
        productName
      )}`;
    });
  });

  // Handle filter changes
  const filterSelects = document.querySelectorAll(".filter-select");

  filterSelects.forEach((select) => {
    select.addEventListener("change", function () {
      // This is where you would implement actual filtering logic
      console.log("Filter changed:", this.value);
      // For now, just show a simple message
      filterProducts();
    });
  });
});

// Simple filter function (can be expanded later)
function filterProducts() {
  const categorySelect = document.querySelector(".filter-select");
  const sortSelect = document.querySelectorAll(".filter-select")[1];

  const category = categorySelect ? categorySelect.value : "All Categories";
  const sortBy = sortSelect ? sortSelect.value : "Featured";

  console.log(`Filtering by category: ${category}, sorting by: ${sortBy}`);

  // You can implement actual filtering logic here
  // For now, all products remain visible
  const productCards = document.querySelectorAll(".product-card");

  // Show all cards (placeholder for actual filter logic)
  productCards.forEach((card) => {
    card.style.display = "block";
  });

  // Update results count
  updateResultsCount(productCards.length);
}

// Update the results count display
function updateResultsCount(count) {
  const resultsCount = document.querySelector(".results-count strong");
  if (resultsCount) {
    resultsCount.textContent = count;
  }
}

// Add smooth scroll behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add loading animation for images when they're added later
function lazyLoadImages() {
  const imageElements = document.querySelectorAll(".product-image img");

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.classList.add("loaded");
          observer.unobserve(img);
        }
      }
    });
  });

  imageElements.forEach((img) => imageObserver.observe(img));
}

// Initialize on page load
window.addEventListener("load", () => {
  // Check if we came from a specific product enquiry
  const urlParams = new URLSearchParams(window.location.search);
  const product = urlParams.get("product");

  if (product) {
    console.log("Enquiry for product:", product);
  }
});
