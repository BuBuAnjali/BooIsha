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

document.addEventListener("DOMContentLoaded", () => {
  const warp = document.querySelector(".warp");
  const weft = document.querySelector(".weft");

  if (warp && weft) {
    for (let i = 0; i < 12; i++) {
      warp.appendChild(document.createElement("div"));
      weft.appendChild(document.createElement("div"));
    }
  }
});

// Mobile dropdown toggle for nav (≤800px)
// Mobile-only dropdown (≤800px): tap to toggle; desktop remains hover-based
function setupMobileOnlyDropdown() {
  const dropdown = document.querySelector(".nav-dropdown");
  const trigger = dropdown ? dropdown.querySelector(":scope > a") : null;
  if (!dropdown || !trigger) return;

  const mq = window.matchMedia("(max-width: 800px)");
  let attached = false;

  const onClick = (e) => {
    // Intercept only on mobile widths
    if (!mq.matches) return;
    e.preventDefault();
    const isOpen = dropdown.classList.toggle("open");
    trigger.setAttribute("aria-expanded", String(isOpen));
  };

  const apply = () => {
    if (mq.matches && !attached) {
      trigger.addEventListener("click", onClick);
      trigger.setAttribute("aria-haspopup", "true");
      trigger.setAttribute("aria-expanded", "false");
      attached = true;
    } else if (!mq.matches && attached) {
      trigger.removeEventListener("click", onClick);
      dropdown.classList.remove("open");
      trigger.removeAttribute("aria-expanded");
      trigger.removeAttribute("aria-haspopup");
      attached = false;
    }
  };

  mq.addEventListener("change", apply);
  apply();

  // Close on outside click on mobile
  document.addEventListener("click", (e) => {
    if (!mq.matches) return;
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("open");
      trigger.setAttribute("aria-expanded", "false");
    }
  });

  // Close on Escape on mobile
  document.addEventListener("keydown", (e) => {
    if (!mq.matches) return;
    if (e.key === "Escape") {
      dropdown.classList.remove("open");
      trigger.setAttribute("aria-expanded", "false");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupMobileOnlyDropdown();
});

// index.js

// =========================
// CONFIG
// =========================
const MEDIA_DIR = "/Videos/videoCard/"; // trailing slash required
const MANIFEST_URL = MEDIA_DIR + "manifest.json"; // optional but preferred
const IMAGE_DURATION = 5000; // ms per image
const VIDEO_MAX_DURATION = 60000; // safety cap per video (ms)

// =========================
// DROPPING CARDS CONFIG
// =========================

const DROPPING_IMAGES_DIR = "/Images/droppingImages/";
const DROPPING_MANIFEST_URL = DROPPING_IMAGES_DIR + "manifest.json";

// Recognized file types
const VIDEO_RE = /\.(mp4|webm|ogg|mov)$/i;
const IMAGE_RE = /\.(png|jpe?g|gif|webp|avif|svg)$/i;

async function discoverDroppingImages() {
  // 1) Prefer manifest.json (array of strings). Items may be relative or absolute.
  const manifest = await fetchJSON(DROPPING_MANIFEST_URL);
  if (Array.isArray(manifest) && manifest.length) {
    const normalized = manifest.map((item) =>
      item.startsWith("/") ? item : DROPPING_IMAGES_DIR + item
    );
    const list = normalizeList(normalized);
    if (list.length) return list;
  }

  // 2) Fallback to directory listing parsing
  const fromIndex = await fetchDirectoryIndex(DROPPING_IMAGES_DIR);
  if (fromIndex.length) return normalizeList(fromIndex);

  // 3) Nothing found
  return [];
}

// Updated initializeDroppingCards function for single card
async function initializeDroppingCards() {
  console.log("Initializing single flowing card...");

  const card = document.querySelector(".image-placeholder");
  console.log("Found card:", card ? 1 : 0);

  if (!card) return;

  const images = await discoverDroppingImages();
  console.log("Found images:", images);

  if (!images.length) {
    console.warn(`No images found in ${DROPPING_IMAGES_DIR}`);
    return;
  }

  let currentImageIndex = 0;

  function updateCard() {
    // Get the current image
    const newImage = images[currentImageIndex % images.length];
    currentImageIndex++;

    const img = document.createElement("img");
    img.src = newImage;
    img.alt = `Product Image`;
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "cover";
    img.style.borderRadius = "15px";
    img.style.opacity = "0";
    img.style.transition = "opacity 1.5s ease-in-out";

    console.log(`Card now showing:`, newImage);

    // If there's an existing image, fade it out
    const existingImg = card.querySelector("img");
    if (existingImg) {
      existingImg.style.opacity = "0";
      setTimeout(() => {
        if (existingImg.parentNode) {
          existingImg.remove();
        }
      }, 1500);
    } else {
      // Remove "Coming Soon" text if it exists
      const comingSoon = card.querySelector(".coming-soon");
      if (comingSoon) {
        comingSoon.remove();
      }
    }

    // Add new image and fade it in
    card.appendChild(img);

    // Trigger fade in after a brief delay
    setTimeout(() => {
      img.style.opacity = "1";
    }, 100);
  }

  // Initialize with first image
  updateCard();

  // Change image every 6 seconds (matching the flag wave animation)
  setInterval(() => {
    updateCard();
  }, 6000);
}

// =========================
// HELPERS
// =========================
async function fetchJSON(url) {
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

async function fetchDirectoryIndex(url) {
  // Works only if your host exposes a browsable index page (e.g., Apache/NGINX listing).
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return [];
    const html = await res.text();
    const doc = new DOMParser().parseFromString(html, "text/html");
    const anchors = Array.from(doc.querySelectorAll("a[href]"));
    return anchors
      .map((a) => a.getAttribute("href"))
      .filter((href) => !!href && href !== "../")
      .map((href) =>
        href.startsWith("http") ? href : MEDIA_DIR + href.replace(/^\.?\//, "")
      );
  } catch {
    return [];
  }
}

function normalizeList(list) {
  // Keep only images/videos, sort by name, dedupe
  const media = (list || [])
    .filter(Boolean)
    .filter((src) => VIDEO_RE.test(src) || IMAGE_RE.test(src))
    .sort((a, b) => a.localeCompare(b));
  return [...new Set(media)];
}

async function discoverMedia() {
  // 1) Prefer manifest.json (array of strings). Items may be relative or absolute.
  const manifest = await fetchJSON(MANIFEST_URL);
  if (Array.isArray(manifest) && manifest.length) {
    const normalized = manifest.map((item) =>
      item.startsWith("/") ? item : MEDIA_DIR + item
    );
    const list = normalizeList(normalized);
    if (list.length) return list;
  }

  // 2) Fallback to directory listing parsing
  const fromIndex = await fetchDirectoryIndex(MEDIA_DIR);
  if (fromIndex.length) return normalizeList(fromIndex);

  // 3) Nothing found
  return [];
}

const REDUCED_MOTION = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

function applyBaseStyles(el) {
  el.style.position = "absolute";
  el.style.inset = "0";
  el.style.willChange = "opacity";
  el.style.borderRadius = "16px";
}

function crossfadeSwap(container, nextEl, duration = 800) {
  const prevEl = container.lastElementChild || null;

  // Prepare NEXT
  nextEl.style.position = "absolute";
  nextEl.style.inset = "0";
  nextEl.style.opacity = "0"; // start hidden
  nextEl.style.transition = `opacity ${duration}ms ease`;
  nextEl.style.borderRadius = "16px";
  nextEl.style.zIndex = "2"; // above previous

  // Prepare PREV (if present)
  if (prevEl) {
    // ensure it has an initial opacity to transition from
    const cur = getComputedStyle(prevEl).opacity || "1";
    prevEl.style.opacity = cur;
    prevEl.style.transition = `opacity ${duration}ms ease`;
    prevEl.style.zIndex = "1";
  }

  // IMPORTANT: never clear container here — we need prev to exist during the fade
  container.appendChild(nextEl);

  // Force a reflow so the browser registers the starting opacity=0
  // (this guarantees the transition will fire)
  void nextEl.getBoundingClientRect();

  // Start the crossfade
  nextEl.style.opacity = "1";
  if (prevEl) {
    prevEl.style.opacity = "0";
    prevEl.addEventListener(
      "transitionend",
      () => {
        if (prevEl.parentNode === container) container.removeChild(prevEl);
      },
      { once: true }
    );
  }
}

function preload(src) {
  return new Promise((resolve) => {
    const isVideo = VIDEO_RE.test(src);
    const el = isVideo
      ? document.createElement("video")
      : document.createElement("img");

    if (isVideo) {
      el.muted = true; // necessary for autoplay on most mobile browsers
      el.playsInline = true;
      el.autoplay = false;
      el.loop = false;
      el.controls = false;
      el.preload = "auto";
      el.src = src;

      const onLoaded = () => resolve(el);
      const onError = () => resolve(null);

      el.addEventListener("loadeddata", onLoaded, { once: true });
      el.addEventListener("error", onError, { once: true });
    } else {
      el.decoding = "async";
      el.loading = "eager";
      el.alt = "";
      el.src = src;

      const onLoaded = () => resolve(el);
      const onError = () => resolve(null);

      el.addEventListener("load", onLoaded, { once: true });
      el.addEventListener("error", onError, { once: true });
    }
  });
}

// =========================
// SLIDESHOW
// =========================
function createSlideshow(container, items) {
  let idx = 0;
  let timer = null;

  async function step() {
    if (!items.length) return;

    const src = items[idx % items.length];
    idx++;

    const el = await preload(src);
    if (!el) {
      // Skip broken entries and keep going
      return step();
    }

    requestAnimationFrame(() => crossfadeSwap(container, el, 2800));
    clearTimeout(timer);

    if (VIDEO_RE.test(src)) {
      // Try to play; if autoplay blocked, we still advance via timeout
      el.play().catch(() => {
        /* ignored */
      });

      const onEnded = () => {
        el.removeEventListener("ended", onEnded);
        step();
      };
      el.addEventListener("ended", onEnded, { once: true });

      timer = setTimeout(() => {
        el.removeEventListener("ended", onEnded);
        step();
      }, VIDEO_MAX_DURATION);
    } else {
      // Image: hold for fixed duration
      timer = setTimeout(step, IMAGE_DURATION);
    }
  }

  step();
}

// =========================
// INIT
// =========================
document.addEventListener("DOMContentLoaded", async () => {
  const container = document.querySelector(".story-video");
  if (!container) {
    console.warn("Missing .story-video container");
    return;
  }

  const items = await discoverMedia();

  if (!items.length) {
    console.warn(
      `No media found in ${MEDIA_DIR}. Add a build step to generate manifest.json or enable directory listing.`
    );
    return;
  }

  createSlideshow(container, items);
});

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

  // Initialize dropping cards with images
  initializeDroppingCards();

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

document.addEventListener("DOMContentLoaded", () => {
  const watermark = document.querySelector(".watermark");
  const storySection = document.querySelector("#story");

  if (!watermark || !storySection) return;

  function handleWatermarkPosition() {
    const top = storySection.getBoundingClientRect().top;

    if (top <= 0) {
      watermark.classList.add("sticky");
    } else {
      watermark.classList.remove("sticky");
    }
  }

  window.addEventListener("scroll", handleWatermarkPosition);
  handleWatermarkPosition(); // run on load
});

// =================== CHAT WIDGET JAVASCRIPT ===================
// =================== CLEAN CHAT WIDGET ===================
let chatOpen = false;
let welcomeMode = true;

function openWhatsApp() {
  const phoneNumber = "61478257409";
  const message =
    "Hello! I'm interested in BooIsha's premium textiles and fabrics. Can you help me with more information?";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  window.open(whatsappURL, "_blank");
}

function toggleChat(event) {
  if (event) {
    event.stopPropagation();
  }

  const chatWindow = document.getElementById("chat-window");
  const chatToggle = document.querySelector(".chat-toggle");

  chatOpen = !chatOpen;

  if (chatOpen) {
    chatWindow.classList.add("open");
    chatToggle.classList.add("active");
  } else {
    chatWindow.classList.remove("open");
    chatToggle.classList.remove("active");
    welcomeMode = true;
    chatWindow.classList.remove("chat-mode");
    chatWindow.classList.add("welcome-mode");
  }
}

function startConversation() {
  const chatWindow = document.getElementById("chat-window");
  welcomeMode = false;
  chatWindow.classList.remove("welcome-mode");
  chatWindow.classList.add("chat-mode");

  setTimeout(() => {
    const input = document.getElementById("chat-input");
    if (input) input.focus();
  }, 300);
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
}

function sendMessage() {
  const input = document.getElementById("chat-input");
  const message = input.value.trim();
  if (message === "") return;

  addMessage(message, "user");
  input.value = "";

  setTimeout(() => {
    addMessage(
      "Thank you for your message! Our team will get back to you shortly. You can also contact us directly via WhatsApp for faster response.",
      "bot"
    );
  }, 1000);
}

function sendQuickMessage(message) {
  const input = document.getElementById("chat-input");
  input.value = message;
  sendMessage();
}

function addMessage(content, sender) {
  const messagesContainer = document.getElementById("chat-messages");
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${sender}`;
  messageDiv.innerHTML = `<div class="message-content">${content}</div>`;
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Functions for real notifications only
function showNotificationBadge(count = 1) {
  const badge = document.getElementById("notification-badge");
  if (badge) {
    badge.textContent = count;
    badge.classList.add("show");
  }
}

function hideNotificationBadge() {
  const badge = document.getElementById("notification-badge");
  if (badge) {
    badge.classList.remove("show");
    badge.textContent = "";
  }
}

// Initialize chat - notification badge starts hidden
document.addEventListener("DOMContentLoaded", () => {
  const badge = document.getElementById("notification-badge");
  if (badge) {
    badge.classList.remove("show");
    badge.textContent = ""; // Clear any initial content
  }

  // Example: If you implement real messaging, you would call:
  // showNotificationBadge(2); // Shows "2" unread messages
});
// =================== END CHAT WIDGET JAVASCRIPT ===================

// Ensure first card row tucks under header blur consistently across sizes
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".image-grid");
  const contact = document.querySelector(".contact-bar");
  const nav = document.querySelector("nav");
  if (!grid || !nav) return;

  const adjustGridTuck = () => {
    // Measure visual gap between nav bottom and grid top
    const navRect = nav.getBoundingClientRect();
    const gridRect = grid.getBoundingClientRect();
    const contactRect = contact ? contact.getBoundingClientRect() : null;

    // Visual bottom of stacked header (contact + nav)
    const headerBottom = Math.max(
      navRect.bottom,
      contactRect ? contactRect.bottom : 0
    );
    const gap = Math.round(gridRect.top - headerBottom);

    // Desired overlap to hide the header shadow edge
    const overlap = window.innerWidth <= 1024 ? 10 : 8; // px

    // If there's a gap, tuck by gap + overlap; otherwise ensure a minimal tuck
    const tuck = gap > 0 ? -(gap + overlap) : -overlap;
    grid.style.marginTop = `${tuck}px`;
  };

  adjustGridTuck();
  window.addEventListener("resize", adjustGridTuck);
  window.addEventListener("load", adjustGridTuck);
});
// Dionic-style header blur: no extra strip; remove any legacy strip if present
document.addEventListener("DOMContentLoaded", () => {
  const strip = document.querySelector(".dynamic-top-blur");
  if (strip && strip.parentElement) {
    strip.parentElement.removeChild(strip);
  }
});
