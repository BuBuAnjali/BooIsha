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

async function initializeDroppingCards() {
  console.log("Initializing dropping cards...");

  const cards = document.querySelectorAll(".image-placeholder");
  console.log("Found cards:", cards.length);

  if (!cards.length) return;

  const images = await discoverDroppingImages();
  console.log("Found images:", images);

  if (!images.length) {
    console.warn(`No images found in ${DROPPING_IMAGES_DIR}`);
    return;
  }

  // Track current images for each card
  const cardImages = new Array(cards.length).fill(null);

  function getUniqueImage(excludeIndices = []) {
    const available = images.filter(
      (_, index) => !excludeIndices.includes(index)
    );
    if (available.length === 0)
      return images[Math.floor(Math.random() * images.length)];
    return available[Math.floor(Math.random() * available.length)];
  }

  function updateCard(cardIndex) {
    const card = cards[cardIndex];

    // Get currently used image indices (excluding this card)
    const usedIndices = cardImages
      .map((img, idx) => (idx !== cardIndex ? images.indexOf(img) : -1))
      .filter((idx) => idx !== -1);

    // Get a unique image
    const newImage = getUniqueImage(usedIndices);
    cardImages[cardIndex] = newImage;

    const img = document.createElement("img");
    img.src = newImage;
    img.alt = `Product ${cardIndex + 1}`;
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "cover";
    img.style.borderRadius = "15px";

    console.log(`Card ${cardIndex} now showing:`, newImage);

    card.innerHTML = "";
    card.appendChild(img);
  }

  // Initialize each card with unique images
  cards.forEach((_, index) => {
    updateCard(index);
  });

  // Set up image changes to sync with CSS animation cycles
  // Animation duration is 9.6s, with different delays for each card
  const animationDuration = 9600; // 9.6 seconds in milliseconds

  cards.forEach((_, index) => {
    // Each card has different animation delay from CSS
    const delays = [0, 2400, 4800, 7200]; // milliseconds (0s, 2.4s, 4.8s, 7.2s)
    const cardDelay = delays[index] || 0;

    // Change image at the start of each new animation cycle
    setInterval(() => {
      updateCard(index);
    }, animationDuration);
  });
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
let chatOpen = false;
let welcomeMode = true;

// WhatsApp integration
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
  const badge = document.getElementById("notification-badge");

  chatOpen = !chatOpen;

  if (chatOpen) {
    chatWindow.classList.add("open");
    chatToggle.classList.add("active");
    badge.classList.remove("show");
  } else {
    chatWindow.classList.remove("open");
    chatToggle.classList.remove("active");
    // Reset to welcome mode when closed
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

  // Focus on input
  setTimeout(() => {
    document.getElementById("chat-input").focus();
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

  // Simple bot response
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

  messageDiv.innerHTML = `
                <div class="message-content">
                    ${content}
                </div>
            `;

  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Show notification after 3 seconds
setTimeout(() => {
  if (!chatOpen) {
    document.getElementById("notification-badge").classList.add("show");
  }
}, 3000);

// =================== END CHAT WIDGET JAVASCRIPT ===================
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".contact-bar"); // sticky top bar
  const contentRows = document.querySelectorAll(".product-card"); // or any scrollable rows/items

  const applyBlurOnScroll = () => {
    const headerBottom = header.getBoundingClientRect().bottom;

    contentRows.forEach((row) => {
      const rowTop = row.getBoundingClientRect().top;
      if (rowTop < headerBottom) {
        row.classList.add("blurred");
      } else {
        row.classList.remove("blurred");
      }
    });
  };

  window.addEventListener("scroll", applyBlurOnScroll);
  applyBlurOnScroll(); // run on initial load
});
