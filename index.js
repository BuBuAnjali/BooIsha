// Add debug logging
console.log("JavaScript file loaded");

// Theme toggle functionality
function toggleThemeMenu() {
  const menu = document.getElementById("themeMenu");
  const arrow = document.querySelector(".arrow-toggle");
  menu.classList.toggle("show");
  arrow.classList.toggle("active");
}

function toggleTheme() {
  const body = document.body;
  const themeBtn = document.querySelector(".theme-btn");

  body.classList.toggle("dark-theme");

  if (body.classList.contains("dark-theme")) {
    themeBtn.setAttribute("data-tooltip", "Switch to Light Mode");
    localStorage.setItem("theme", "dark");
  } else {
    themeBtn.setAttribute("data-tooltip", "Switch to Dark Mode");
    localStorage.setItem("theme", "light");
  }

  toggleThemeMenu();
}

// Load saved theme on page load and set up form handler
document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme");
  const themeBtn = document.querySelector(".theme-btn");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    themeBtn.setAttribute("data-tooltip", "Switch to Light Mode");
  } else {
    themeBtn.setAttribute("data-tooltip", "Switch to Dark Mode");
  }
  console.log("DOM loaded");
  // Form submission handler
  const form = document.getElementById("enquiry-form-submit");
  console.log("Form found:", form);

  if (form) {
    form.addEventListener("submit", handleFormSubmission);
    console.log("Form event listener added");
  } else {
    console.log("ERROR: Form not found!");
  }
});

// Close menu when clicking outside
document.addEventListener("click", function (event) {
  const container = document.querySelector(".theme-toggle-container");
  if (!container.contains(event.target)) {
    document.getElementById("themeMenu").classList.remove("show");
    document.querySelector(".arrow-toggle").classList.remove("active");
  }
});

// Handle form submission with AJAX
async function handleFormSubmission(event) {
  console.log("Form submission intercepted!");
  event.preventDefault(); // Prevent default form submission

  const form = event.target;
  const submitButton = form.querySelector(".submit-enquiry-btn");
  const successMessage = document.getElementById("success-message");

  // Disable submit button and show loading
  submitButton.disabled = true;
  submitButton.textContent = "Submitting...";

  try {
    // Create FormData from the form
    const formData = new FormData(form);

    console.log("Sending form data...");

    // Submit form data
    const response = await fetch("/api/submit-form", {
      method: "POST",
      body: formData,
    });

    console.log("Response status:", response.status);

    if (response.ok) {
      console.log("Form submitted successfully");
      // Success - show success message and hide form
      showSuccessMessage();
    } else {
      throw new Error(`Server responded with status: ${response.status}`);
    }
  } catch (error) {
    console.error("Form submission error:", error);
    alert(
      "Sorry, there was an error submitting your form. Please try again or email us directly at info@booshiv.com"
    );
  } finally {
    // Re-enable submit button
    submitButton.disabled = false;
    submitButton.textContent = "Submit Enquiry";
  }
}

function showSuccessMessage() {
  console.log("Showing success message");

  const form = document.getElementById("enquiry-form-submit");
  const successMessage = document.getElementById("success-message");
  const countdownElement = document.getElementById("countdown");

  // Hide form and show success message
  form.classList.add("form-hidden");
  successMessage.style.display = "block";

  // Reset form
  form.reset();

  // Start countdown
  let countdown = 30;
  countdownElement.textContent = countdown;

  const timer = setInterval(() => {
    countdown--;
    countdownElement.textContent = countdown;

    if (countdown <= 0) {
      clearInterval(timer);
      console.log("Hiding success message and showing form");
      // Hide success message and show form again
      successMessage.style.display = "none";
      form.classList.remove("form-hidden");
    }
  }, 1000);
}
