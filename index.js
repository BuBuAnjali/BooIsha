// Add debug logging
console.log("JavaScript file loaded");

// Theme toggle functionality
function toggleThemeMenu() {
  const menu = document.getElementById("themeMenu");
  const arrow = document.querySelector(".arrow-toggle");
  menu.classList.toggle("show");
  arrow.classList.toggle("active");

  // Hide tooltip when clicked
  arrow.classList.add("tooltip-clicked");
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
  console.log("🔍 discoverDroppingImages called");
  console.log("📁 Manifest URL:", DROPPING_MANIFEST_URL);

  // 1) Prefer manifest.json (array of strings). Items may be relative or absolute.
  try {
    const manifest = await fetchJSON(DROPPING_MANIFEST_URL);
    console.log("📄 Loaded manifest:", manifest);

    if (Array.isArray(manifest) && manifest.length) {
      const normalized = manifest.map((item) => {
        const fullPath = item.startsWith("/")
          ? item
          : DROPPING_IMAGES_DIR + item;
        console.log(`📎 Normalizing: ${item} → ${fullPath}`);
        return fullPath;
      });
      const list = normalizeList(normalized);
      console.log(`✅ Discovered ${list.length} images from manifest:`, list);
      if (list.length) return list;
    }
  } catch (error) {
    console.error("❌ Failed to load manifest:", error);
  }

  // 2) Fallback to directory listing parsing
  console.log("🔄 Falling back to directory listing...");
  try {
    const fromIndex = await fetchDirectoryIndex(DROPPING_IMAGES_DIR);
    if (fromIndex.length) {
      const list = normalizeList(fromIndex);
      console.log(`✅ Discovered ${list.length} images from directory:`, list);
      return list;
    }
  } catch (error) {
    console.error("❌ Failed to load from directory:", error);
  }

  // 3) Nothing found
  console.warn("⚠️ No images found in any method");
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

  // Initialize product card backgrounds
  initializeProductCardBackgrounds();

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
      "Sorry, there was an error submitting your form. Please try again or email us directly at info@booisha.com"
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

async function openWhatsApp() {
  try {
    // Get user's location and country code
    const userLocation = await getUserLocation();
    const userCountryCode = userLocation.countryCode;
    const userCountry = userLocation.country;

    // Default BooIsha number
    const phoneNumber = "61478257409";

    // Create personalized message with location info
    const message = `Hello! I'm interested in BooIsha's premium textiles and fabrics. I'm contacting you from ${userCountry} (${userCountryCode}). Can you help me with more information?`;

    // Show user their detected location and give them option to use local format
    showWhatsAppModal(phoneNumber, message, userCountryCode, userCountry);
  } catch (error) {
    console.log("Location detection failed, using default WhatsApp link");
    // Fallback to original functionality
    const phoneNumber = "61478257409";
    const message =
      "Hello! I'm interested in BooIsha's premium textiles and fabrics. Can you help me with more information?";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  }
}

async function getUserLocation() {
  // Try to get country from IP geolocation API
  try {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();

    return {
      country: data.country_name,
      countryCode: data.country_calling_code,
      regionCode: data.country_code,
    };
  } catch (error) {
    console.log("IP geolocation failed, trying alternative method");

    // Fallback: try different API
    try {
      const response = await fetch("https://api.country.is/");
      const data = await response.json();

      // Get country code from country name lookup
      const countryCode = getCountryCallingCode(data.country);

      return {
        country: getCountryName(data.country),
        countryCode: countryCode,
        regionCode: data.country,
      };
    } catch (fallbackError) {
      throw new Error("All location detection methods failed");
    }
  }
}

function getCountryCallingCode(countryCode) {
  const countryCodes = {
    US: "+1",
    CA: "+1",
    GB: "+44",
    AU: "+61",
    DE: "+49",
    FR: "+33",
    IT: "+39",
    ES: "+34",
    NL: "+31",
    BE: "+32",
    CH: "+41",
    AT: "+43",
    SE: "+46",
    NO: "+47",
    DK: "+45",
    FI: "+358",
    IE: "+353",
    PT: "+351",
    GR: "+30",
    JP: "+81",
    KR: "+82",
    CN: "+86",
    IN: "+91",
    SG: "+65",
    MY: "+60",
    TH: "+66",
    ID: "+62",
    PH: "+63",
    VN: "+84",
    TW: "+886",
    HK: "+852",
    MO: "+853",
    NZ: "+64",
    ZA: "+27",
    EG: "+20",
    SA: "+966",
    AE: "+971",
    TR: "+90",
    RU: "+7",
    UA: "+380",
    PL: "+48",
    CZ: "+420",
    SK: "+421",
    HU: "+36",
    RO: "+40",
    BG: "+359",
    HR: "+385",
    SI: "+386",
    LT: "+370",
    LV: "+371",
    EE: "+372",
    IS: "+354",
    MT: "+356",
    CY: "+357",
    LU: "+352",
    MX: "+52",
    BR: "+55",
    AR: "+54",
    CL: "+56",
    CO: "+57",
    PE: "+51",
    VE: "+58",
    UY: "+598",
    PY: "+595",
    BO: "+591",
    EC: "+593",
    GY: "+592",
    SR: "+597",
    GF: "+594",
  };

  return countryCodes[countryCode] || "+1";
}

function getCountryName(countryCode) {
  const countryNames = {
    US: "United States",
    CA: "Canada",
    GB: "United Kingdom",
    AU: "Australia",
    DE: "Germany",
    FR: "France",
    IT: "Italy",
    ES: "Spain",
    NL: "Netherlands",
    BE: "Belgium",
    CH: "Switzerland",
    AT: "Austria",
    SE: "Sweden",
    NO: "Norway",
    DK: "Denmark",
    FI: "Finland",
    IE: "Ireland",
    PT: "Portugal",
    GR: "Greece",
    JP: "Japan",
    KR: "South Korea",
    CN: "China",
    IN: "India",
    SG: "Singapore",
    MY: "Malaysia",
    TH: "Thailand",
    ID: "Indonesia",
    PH: "Philippines",
    VN: "Vietnam",
    TW: "Taiwan",
    HK: "Hong Kong",
    NZ: "New Zealand",
    ZA: "South Africa",
    MX: "Mexico",
    BR: "Brazil",
    AR: "Argentina",
  };

  return countryNames[countryCode] || countryCode;
}

function showWhatsAppModal(phoneNumber, message, userCountryCode, userCountry) {
  // Create modal HTML
  const modalHTML = `
    <div class="whatsapp-modal-overlay" id="whatsappModal">
      <div class="whatsapp-modal">
        <div class="whatsapp-modal-header">
          <h3>WhatsApp Contact</h3>
          <button class="modal-close" id="modalCloseBtn">×</button>
        </div>
        <div class="whatsapp-modal-content">
          <p><strong>We detected you're in:</strong> ${userCountry} (${userCountryCode})</p>
          <p>You can contact us on WhatsApp using:</p>

          <div class="whatsapp-options">
            <button class="whatsapp-option primary" id="whatsappBtn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
              </svg>
              Chat Now (+61 478 257 409)
            </button>
          </div>

          <div class="local-suggestion">
            <p><small>💡 <strong>Tip:</strong> When calling from ${userCountry}, you would dial: <strong>${
    userCountryCode === "+61" ? "0478 257 409" : "011 61 478 257 409"
  }</strong></small></p>
          </div>
        </div>
      </div>
    </div>
  `;

  // Add modal to page
  document.body.insertAdjacentHTML("beforeend", modalHTML);

  // Add event listeners
  const whatsappBtn = document.getElementById("whatsappBtn");
  const closeBtn = document.getElementById("modalCloseBtn");
  const overlay = document.getElementById("whatsappModal");

  if (whatsappBtn) {
    whatsappBtn.addEventListener("click", function () {
      console.log("WhatsApp button clicked");
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;
      console.log("Opening WhatsApp URL:", whatsappURL);
      window.open(whatsappURL, "_blank");
      closeWhatsAppModal();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", closeWhatsAppModal);
  }

  // Close on overlay click
  if (overlay) {
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) {
        closeWhatsAppModal();
      }
    });
  }
}

function closeWhatsAppModal() {
  const modal = document.getElementById("whatsappModal");
  if (modal) {
    modal.remove();
  }
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

// =================== CONTACT PANEL FUNCTIONALITY ===================
function openContactPanel() {
  const panel = document.getElementById("contactPanel");
  const overlay = document.getElementById("contactPanelOverlay");

  if (panel && overlay) {
    panel.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent background scrolling
    document.body.classList.add("contact-panel-open"); // Hide main chat widget
  }
}

function closeContactPanel() {
  const panel = document.getElementById("contactPanel");
  const overlay = document.getElementById("contactPanelOverlay");
  const form = document.getElementById("contactPanelForm");
  const chatInterface = document.getElementById("panelChatInterface");

  if (panel && overlay) {
    panel.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = ""; // Restore background scrolling
    document.body.classList.remove("contact-panel-open"); // Show main chat widget

    // Close form if it's open
    if (form && form.classList.contains("active")) {
      form.classList.remove("active");
    }

    // Close inline chat if it's open
    if (chatInterface && chatInterface.classList.contains("active")) {
      chatInterface.classList.remove("active");
    }
  }
}

function toggleContactForm() {
  const form = document.getElementById("contactPanelForm");
  const panel = document.getElementById("contactPanel");

  if (form) {
    form.classList.toggle("active");

    // If opening the form, ensure it's fully visible
    if (form.classList.contains("active")) {
      // Wait for the form animation to start
      setTimeout(() => {
        // Scroll the panel to show the form
        const formRect = form.getBoundingClientRect();
        const panelRect = panel.getBoundingClientRect();

        // If form extends beyond panel bottom, scroll panel to show form
        if (formRect.bottom > panelRect.bottom - 20) {
          panel.scrollTo({
            top: panel.scrollTop + (formRect.bottom - panelRect.bottom + 40),
            behavior: "smooth",
          });
        }

        // Focus on first input for better UX
        const firstInput = form.querySelector(
          'input[type="text"], input[type="email"]'
        );
        if (firstInput) {
          firstInput.focus();
        }
      }, 300); // Wait for animation to progress
    }
  }
}

// Initialize contact panel event listeners
document.addEventListener("DOMContentLoaded", () => {
  const contactTrigger = document.querySelector(".contact-left a");
  const closeButton = document.getElementById("contactPanelClose");
  const overlay = document.getElementById("contactPanelOverlay");

  // Open panel when clicking "Contact us" in top bar
  if (contactTrigger) {
    contactTrigger.addEventListener("click", (e) => {
      e.preventDefault();
      openContactPanel();
    });
  }

  // Close panel when clicking close button
  if (closeButton) {
    closeButton.addEventListener("click", closeContactPanel);
  }

  // Close panel when clicking overlay
  if (overlay) {
    overlay.addEventListener("click", closeContactPanel);
  }

  // Close panel when pressing Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeContactPanel();
    }
  });

  // Handle panel form submission
  const panelForm = document.getElementById("contactPanelFormSubmit");
  if (panelForm) {
    panelForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const submitBtn = panelForm.querySelector(".form-submit-btn");
      const originalText = submitBtn.textContent;

      // Show loading state
      submitBtn.disabled = true;
      submitBtn.textContent = "Submitting...";

      try {
        const formData = new FormData(panelForm);
        const response = await fetch("/api/submit-form", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          // Success - show brief message and close panel
          submitBtn.textContent = "Sent!";
          submitBtn.style.background =
            "linear-gradient(135deg, #4CAF50 0%, #45a049 100%)";

          setTimeout(() => {
            panelForm.reset();
            closeContactPanel();

            // Reset button
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
            submitBtn.style.background = "";
          }, 1500);
        } else {
          throw new Error("Network response was not ok");
        }
      } catch (error) {
        console.error("Form submission error:", error);
        alert(
          "Sorry, there was an error submitting your form. Please try again or email us directly."
        );

        // Reset button
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    });
  }
});

// =================== PANEL CHAT FUNCTIONALITY ===================
function togglePanelChat() {
  const chatInterface = document.getElementById("panelChatInterface");
  const panel = document.getElementById("contactPanel");

  if (chatInterface) {
    chatInterface.classList.toggle("active");

    // If opening the chat, ensure it's visible and focus input
    if (chatInterface.classList.contains("active")) {
      setTimeout(() => {
        // Scroll to show the chat interface
        const chatRect = chatInterface.getBoundingClientRect();
        const panelRect = panel.getBoundingClientRect();

        if (chatRect.bottom > panelRect.bottom - 20) {
          panel.scrollTo({
            top: panel.scrollTop + (chatRect.bottom - panelRect.bottom + 40),
            behavior: "smooth",
          });
        }

        // Focus on input
        const input = document.getElementById("panelChatInput");
        if (input) {
          input.focus();
        }
      }, 300);
    }
  }
}

function sendPanelMessage() {
  const input = document.getElementById("panelChatInput");
  const message = input.value.trim();

  if (message === "") return;

  addPanelMessage(message, "user");
  input.value = "";

  // Auto-reply after a delay
  setTimeout(() => {
    addPanelMessage(
      "Thank you for your message! Our team will get back to you shortly. You can also contact us directly via WhatsApp for faster response.",
      "bot"
    );
  }, 1000);
}

function sendPanelQuickMessage(message) {
  addPanelMessage(message, "user");

  // Auto-reply based on quick action
  setTimeout(() => {
    let reply = "";
    if (message.includes("Product")) {
      reply =
        "We offer premium Indian spices, textiles, and fashion items. Would you like specific information about any category?";
    } else if (message.includes("Pricing")) {
      reply =
        "Our pricing varies by product. Please let us know which items you're interested in and we'll provide detailed pricing information.";
    } else if (message.includes("Shipping")) {
      reply =
        "We ship throughout Australia. Delivery times are typically 3-7 business days. Would you like more details about shipping costs?";
    } else {
      reply =
        "Thank you for your inquiry! Our team will get back to you shortly with detailed information.";
    }
    addPanelMessage(reply, "bot");
  }, 1000);
}

function addPanelMessage(content, sender) {
  const messagesContainer = document.getElementById("panelChatMessages");
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${sender}`;
  messageDiv.innerHTML = `<div class="message-content"><p>${content}</p></div>`;
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function handlePanelChatKeyPress(event) {
  if (event.key === "Enter") {
    sendPanelMessage();
  }
}
// =================== END PANEL CHAT FUNCTIONALITY ===================

// =================== PREMIUM SEARCH FUNCTIONALITY ===================
const premiumCollectionsDatabase = [
  {
    title: "Premium Silk Collection",
    category: "silk",
    description:
      "Luxurious silk fabrics with rich textures, perfect for high-end fashion and elegant draping",
  },
  {
    title: "Organic Cotton Essentials",
    category: "cotton",
    description:
      "Sustainable organic cotton fabrics, soft and breathable for comfortable wear",
  },
  {
    title: "Chantilly Lace Elegance",
    category: "lace",
    description:
      "Delicate lace with intricate floral patterns, ideal for bridal wear and luxury garments",
  },
  {
    title: "Georgette Lace Collection",
    category: "lace",
    description:
      "Lightweight georgette lace with fine embroidery details and graceful drape",
  },
  {
    title: "Heritage Silk Weaves",
    category: "silk",
    description:
      "Traditional silk weaving with contemporary appeal, showcasing timeless craftsmanship",
  },
  {
    title: "Premium Cotton Blends",
    category: "cotton",
    description:
      "High-quality cotton blends offering durability and comfort for everyday luxury",
  },
  {
    title: "Venetian Lace Artistry",
    category: "lace",
    description:
      "Handcrafted venetian lace featuring traditional bobbin lace techniques and intricate patterns",
  },
  {
    title: "Handloom Cotton Heritage",
    category: "fabrics",
    description:
      "Authentic handloom cotton with traditional weaving patterns and cultural significance",
  },
  {
    title: "Luxury Fabric Blends",
    category: "fabrics",
    description:
      "Premium fabric combinations offering unique textures and exceptional quality",
  },
  {
    title: "Artisan Silk Collection",
    category: "fabrics",
    description:
      "Specially curated silk fabrics showcasing master artisan techniques and heritage methods",
  },
];

function performAdvancedSearch() {
  const searchInput = document.getElementById("mainSearchInput");

  if (!searchInput) {
    console.error("❌ Search input not found");
    return;
  }

  const query = searchInput.value.toLowerCase().trim();

  // Only redirect if there's a search query typed in
  if (query.length > 0) {
    const activeChip = document.querySelector(".category-chip.active");
    const activeCategory = activeChip ? activeChip.dataset.category : "all";

    console.log(`🔍 Query: "${query}", Category: "${activeCategory}"`);

    // Check if query contains lace-related terms
    const laceTerms = [
      "lace",
      "chantilly",
      "venetian",
      "guipure",
      "alençon",
      "alencon",
      "crochet",
      "embroidered",
      "eyelet",
      "cutwork",
      "battenberg",
    ];
    const isLaceQuery = laceTerms.some((term) => query.includes(term));

    // Determine target page based on query content or active category
    let targetUrl;
    const params = new URLSearchParams();

    if (isLaceQuery || activeCategory === "lace") {
      targetUrl = "Lace.html";
      console.log(`🔍 Detected lace query, redirecting to Lace.html`);
    } else {
      targetUrl = "Fabrics.html";
      console.log(`🔍 Regular query, redirecting to Fabrics.html`);
    }

    params.append("search", query);

    if (activeCategory && activeCategory !== "all") {
      params.append("category", activeCategory);
    }

    targetUrl += "?" + params.toString();

    console.log(`🔍 Redirecting to: ${targetUrl}`);
    window.location.href = targetUrl;
  } else {
    console.log("🔍 No search query - not redirecting");
  }
}

function displayAdvancedSearchResults(results, query) {
  const resultsContainer = document.getElementById("advancedSearchResults");
  const resultsGrid = document.getElementById("resultsGrid");

  if (results.length === 0) {
    resultsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; color: #7f8c8d; padding: 2rem;">
        <p>No results found for "${query}". Try different keywords or collections.</p>
      </div>
    `;
  } else {
    resultsGrid.innerHTML = results
      .map(
        (item) => `
      <div class="result-card">
        <div class="result-card-category">${item.category}</div>
        <div class="result-card-title">${highlightAdvancedMatch(
          item.title,
          query
        )}</div>
        <div class="result-card-description">${highlightAdvancedMatch(
          item.description,
          query
        )}</div>
      </div>
    `
      )
      .join("");
  }

  resultsContainer.classList.add("show");
}

function highlightAdvancedMatch(text, query) {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, "gi");
  return text.replace(
    regex,
    '<span style="background: linear-gradient(135deg, #FF6B6B, #e74c3c); color: white; padding: 3px 6px; border-radius: 6px; font-weight: 600;">$1</span>'
  );
}

function hideAdvancedSearchResults() {
  const resultsContainer = document.getElementById("advancedSearchResults");
  resultsContainer.classList.remove("show");
}

function setActiveCategoryChip(category) {
  console.log("🏷️ Setting active category:", category);

  // If category is 'all', redirect to fabrics page without category filter
  if (category === "all") {
    console.log(`🏷️ Redirecting to fabrics page with all products`);
    window.location.href = "Fabrics.html";
    return;
  }

  // For specific categories, redirect to appropriate page
  console.log(`🏷️ Redirecting with category: ${category}`);

  let targetUrl;
  const params = new URLSearchParams();

  // Map category names to their respective pages
  const categoryMapping = {
    linen: { page: "Fabrics.html", param: "linen" },
    lace: { page: "Lace.html", param: "lace" },
    silk: { page: "Fabrics.html", param: "silk" },
    cotton: { page: "Fabrics.html", param: "cotton" },
  };

  if (categoryMapping[category]) {
    targetUrl = categoryMapping[category].page;
    params.append("category", categoryMapping[category].param);
    targetUrl += "?" + params.toString();
  } else {
    targetUrl = "Fabrics.html";
  }

  console.log(`🏷️ Redirecting to: ${targetUrl}`);
  window.location.href = targetUrl;
}

// Initialize search functionality
function initializeSearchFunctionality() {
  console.log("🚀 Initializing search functionality...");

  // Add click handlers to category chips
  const categoryChips = document.querySelectorAll(".category-chip");
  console.log("🏷️ Found", categoryChips.length, "category chips");

  categoryChips.forEach((chip, index) => {
    console.log(`Setting up chip ${index + 1}:`, chip.dataset.category);
    chip.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("🏷️ Chip clicked:", chip.dataset.category);
      setActiveCategoryChip(chip.dataset.category);
    });
  });

  // Add search input handlers
  const searchInput = document.getElementById("mainSearchInput");
  if (searchInput) {
    console.log("✅ Adding search input handlers");

    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        performAdvancedSearch();
      }
    });

    // Removed auto-redirect on typing - user should press Enter or click search button
    console.log(
      "✅ Search input ready - press Enter or click search button to search"
    );
  }
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  // Wait a bit for everything to load
  setTimeout(initializeSearchFunctionality, 500);

  // Add backup event listener for search button
  setTimeout(() => {
    const searchBtn = document.querySelector(".search-icon-btn");
    if (searchBtn) {
      console.log("✅ Adding backup event listener to search button");
      searchBtn.addEventListener("click", function (e) {
        e.preventDefault();
        console.log("🔍 Backup search button clicked");
        expandSearchInterface();
      });
    } else {
      console.error("❌ Search button not found for backup listener");
    }
  }, 1000);

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".premium-search-container")) {
      hideAdvancedSearchResults();
    }
  });
});

// =================== SEARCH BACKGROUND FUNCTIONALITY ===================
let searchBackgroundImages = [];
let currentSearchImageIndex = 0;
let searchImageInterval = null;

async function initializeSearchBackground() {
  console.log("Initializing search background...");

  const backgroundLayer = document.getElementById("searchBackgroundLayer");
  if (!backgroundLayer) return;

  // Use the same image discovery function as the dropping cards
  const images = await discoverDroppingImages();
  console.log("Found search background images:", images);

  if (!images.length) {
    console.warn(
      `No images found in ${DROPPING_IMAGES_DIR} for search background`
    );
    return;
  }

  searchBackgroundImages = images;

  // Start the background image rotation
  startSearchBackgroundRotation();
}

function startSearchBackgroundRotation() {
  if (!searchBackgroundImages.length) return;

  const backgroundLayer = document.getElementById("searchBackgroundLayer");
  if (!backgroundLayer) return;

  // Load all images into the flex container for continuous flow
  loadAllSearchImages();
}

function loadAllSearchImages() {
  const backgroundLayer = document.getElementById("searchBackgroundLayer");
  if (!backgroundLayer) {
    console.error("❌ searchBackgroundLayer not found");
    return;
  }

  if (!searchBackgroundImages.length) {
    console.error("❌ No background images available");
    return;
  }

  // Clear existing content
  backgroundLayer.innerHTML = "";

  console.log(
    `🖼️ Loading all search images. Total images found: ${searchBackgroundImages.length}`
  );
  console.log("📋 Image list:", searchBackgroundImages);

  // Create a continuous strip by doubling images for seamless loop
  const imagesToLoad = [...searchBackgroundImages, ...searchBackgroundImages];

  console.log(
    `📦 Total images to load (with triplication): ${imagesToLoad.length}`
  );

  let loadedCount = 0;
  let failedCount = 0;

  imagesToLoad.forEach((imageSrc, index) => {
    const img = document.createElement("img");
    img.src = imageSrc;
    img.alt = `Background Image ${index + 1}`;

    img.onload = () => {
      loadedCount++;
      console.log(
        `✅ Loaded image ${loadedCount}/${imagesToLoad.length}: ${imageSrc}`
      );
    };

    img.onerror = () => {
      failedCount++;
      console.error(
        `❌ Failed to load image ${index + 1}/${
          imagesToLoad.length
        }: ${imageSrc}`
      );
      // Try to fix the path if it's not working
      const alternativePath = imageSrc.replace(
        "/Images/droppingImages/",
        "./Images/droppingImages/"
      );
      console.log(`🔄 Trying alternative path: ${alternativePath}`);
      img.src = alternativePath;
    };

    backgroundLayer.appendChild(img);
  });

  // Report loading status after a delay
  setTimeout(() => {
    console.log(
      `📊 Loading complete: ${loadedCount} loaded, ${failedCount} failed out of ${imagesToLoad.length} total`
    );
  }, 3000);
}

// Manual trigger function for testing
window.testImageLoading = async function () {
  console.log("🧪 Manual test triggered");
  await initializeSearchBackground();
};

// Initialize search background when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  console.log("🎬 DOM loaded, initializing search background...");
  // Wait a bit for other initializations to complete
  setTimeout(() => {
    initializeSearchBackground();
  }, 1000);

  // Also try again after longer delay in case of slow loading
  setTimeout(() => {
    console.log("🔄 Secondary initialization attempt...");
    initializeSearchBackground();
  }, 3000);
});

// =================== END SEARCH BACKGROUND FUNCTIONALITY ===================

// =================== PRODUCT CARD BACKGROUND FUNCTIONALITY ===================
const CARD_BACKGROUNDS_URL = "/Images/cardImages/card-backgrounds.json";
const LACE_IMAGES_URL = "/Images/Laces/lace-images.json";

let cardBackgroundImages = {};
let laceImages = {};

async function loadCardBackgroundImages() {
  console.log("🖼️ Loading card background images...");

  try {
    // Load card backgrounds from cardImages
    const cardRes = await fetch(CARD_BACKGROUNDS_URL);
    if (cardRes.ok) {
      const cardData = await cardRes.json();
      cardBackgroundImages = cardData.cardBackgrounds || {};
      console.log("✅ Loaded card background images:", cardBackgroundImages);
    }

    // Load lace images for the Premium Lace Collection card
    const laceRes = await fetch(LACE_IMAGES_URL);
    if (laceRes.ok) {
      const laceData = await laceRes.json();
      laceImages = laceData.laceColors || {};
      console.log("✅ Loaded lace images:", Object.keys(laceImages));
    }
  } catch (error) {
    console.error("❌ Failed to load background images:", error);
  }
}

function getRandomImage(imageArray) {
  if (!imageArray || imageArray.length === 0) return null;
  return imageArray[Math.floor(Math.random() * imageArray.length)];
}

function getRandomLaceImage() {
  // Get all lace images from all color folders
  const allLaceImages = [];
  Object.keys(laceImages).forEach((color) => {
    const colorImages = laceImages[color];
    colorImages.forEach((image) => {
      allLaceImages.push(`/Images/Laces/${color}/${image}`);
    });
  });
  return getRandomImage(allLaceImages);
}

// Analyze image brightness and return appropriate text color
async function getContrastingTextColor(imageSrc) {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "anonymous";

    img.onload = function () {
      try {
        // Create canvas to analyze image
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        // Use a smaller canvas for performance
        const sampleSize = 50;
        canvas.width = sampleSize;
        canvas.height = sampleSize;

        // Draw and sample the image
        ctx.drawImage(img, 0, 0, sampleSize, sampleSize);
        const imageData = ctx.getImageData(0, 0, sampleSize, sampleSize);
        const data = imageData.data;

        let totalBrightness = 0;
        let pixelCount = 0;

        // Calculate average brightness
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];

          // Calculate perceived brightness using luminance formula
          const brightness = 0.299 * r + 0.587 * g + 0.114 * b;
          totalBrightness += brightness;
          pixelCount++;
        }

        const averageBrightness = totalBrightness / pixelCount;

        // Return contrasting color based on brightness
        // If image is bright (> 128), use dark text; if dark, use light text
        const textColor = averageBrightness > 128 ? "#1a1a1a" : "#ffffff";
        const textShadow =
          averageBrightness > 128
            ? "1px 1px 2px rgba(255,255,255,0.8), 0 0 8px rgba(255,255,255,0.3)"
            : "1px 1px 2px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.3)";

        resolve({ color: textColor, shadow: textShadow });
      } catch (error) {
        console.warn(
          "Could not analyze image brightness, using default colors:",
          error
        );
        // Default to white text with dark shadow
        resolve({
          color: "#ffffff",
          shadow: "1px 1px 2px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.3)",
        });
      }
    };

    img.onerror = function () {
      console.warn(
        "Could not load image for brightness analysis, using default colors"
      );
      // Default to white text with dark shadow
      resolve({
        color: "#ffffff",
        shadow: "1px 1px 2px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.3)",
      });
    };

    img.src = imageSrc;
  });
}

// Apply dynamic text styling to card content
function applyDynamicTextStyling(
  card,
  textColor,
  textShadow,
  isLaceCard = false
) {
  // Style text elements (excluding links/buttons)
  const textElements = card.querySelectorAll("h3, p, li, .product-icon");

  // Check if this is specifically the middle card (second product card)
  const allProductCards = document.querySelectorAll(".product-card");
  const isMiddleCard = Array.from(allProductCards).indexOf(card) === 1;

  textElements.forEach((element) => {
    if (isLaceCard && isMiddleCard) {
      // For middle card only, style text without background and black color
      element.style.color = "#000000";
      element.style.fontWeight = "bold";
      element.style.textShadow = "none";
      element.style.background = "none";
      element.style.padding = "0";
      element.style.borderRadius = "0";
      element.style.display = "";
      element.style.transition = "all 0.3s ease";
    } else if (isLaceCard) {
      // For other lace cards, use original styling with background
      element.style.color = "#ffffff";
      element.style.textShadow = "1px 1px 2px rgba(0,0,0,0.8)";
      element.style.background = "rgba(0, 0, 0, 0.5)";
      element.style.padding = "2px 6px";
      element.style.borderRadius = "3px";
      element.style.display = "inline-block";
      element.style.transition = "all 0.3s ease";
    } else {
      // For other cards, use dynamic contrast without background
      element.style.color = textColor;
      element.style.textShadow = textShadow;
      element.style.background = "none";
      element.style.padding = "";
      element.style.borderRadius = "";
      element.style.display = "";
      element.style.transition = "color 0.3s ease, text-shadow 0.3s ease";
    }
  });

  // Handle links/buttons separately - keep original styling, only change text color
  const links = card.querySelectorAll("a");
  links.forEach((link) => {
    if (isLaceCard) {
      // For lace card links, only change text color, keep original button styling
      link.style.color = "#ffffff";
      link.style.textShadow = "1px 1px 2px rgba(0,0,0,0.8)";
      // Don't modify button background, padding, etc. - keep original styling
    } else {
      // For other cards, use dynamic contrast
      link.style.color = textColor;
      link.style.textShadow = textShadow;

      // Standard hover effects
      const isLightText = textColor === "#ffffff";
      const hoverColor = isLightText ? "#e0e0e0" : "#333333";

      link.addEventListener("mouseenter", () => {
        link.style.color = hoverColor;
      });

      link.addEventListener("mouseleave", () => {
        link.style.color = textColor;
      });
    }
  });
}

function addComingSoonBadge(card) {
  // Check if badge already exists to prevent duplicates
  if (card.querySelector(".coming-soon-badge")) {
    return;
  }

  // Ensure the card is positioned relative for absolute positioning of badge
  card.style.position = "relative";

  // Create coming soon badge
  const comingSoonBadge = document.createElement("div");
  comingSoonBadge.className = "coming-soon-badge";
  comingSoonBadge.style.cssText = `
    position: absolute;
    top: 15px;
    right: 15px;
    background: linear-gradient(135deg, #FF6B6B 0%, #e74c3c 100%);
    color: white;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);
    z-index: 10;
    animation: pulse 2s ease-in-out infinite;
  `;
  comingSoonBadge.textContent = "Coming Soon";
  comingSoonBadge.classList.add("coming-soon-badge");

  // Add CSS animation for pulse effect
  const style = document.createElement("style");
  style.textContent = `
    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.05); opacity: 0.9; }
    }
    .coming-soon-badge:hover {
      transform: scale(1.1) !important;
      transition: transform 0.2s ease;
    }
  `;

  // Add style only once
  if (!document.querySelector("#coming-soon-styles")) {
    style.id = "coming-soon-styles";
    document.head.appendChild(style);
  }

  card.appendChild(comingSoonBadge);
  console.log(`✅ Added "Coming Soon" badge to Fashion Atelier card`);
}

function applyCardBackgroundImages() {
  console.log("🎨 Applying dynamic card background images...");

  const productCards = document.querySelectorAll(".product-card");

  if (productCards.length === 0) {
    console.warn("⚠️ No product cards found");
    return;
  }

  productCards.forEach((card, index) => {
    const cardTitle =
      card.querySelector("h3")?.textContent?.toLowerCase() || "";
    let backgroundImage = null;

    // Initialize card with transition layers if not already done
    if (!card.dataset.initialized) {
      card.style.position = "relative";
      card.style.overflow = "hidden";

      // Create two background layers for smooth transition
      const layer1 = document.createElement("div");
      layer1.className = "card-bg-layer card-bg-layer-1";
      layer1.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        transition: opacity 1.2s ease-in-out;
        z-index: 1;
      `;

      const layer2 = document.createElement("div");
      layer2.className = "card-bg-layer card-bg-layer-2";
      layer2.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        transition: opacity 1.2s ease-in-out;
        opacity: 0;
        z-index: 1;
      `;

      card.insertBefore(layer1, card.firstChild);
      card.insertBefore(layer2, card.firstChild);

      // Ensure card content is above background layers
      Array.from(card.children).forEach((child) => {
        if (!child.classList.contains("card-bg-layer")) {
          child.style.position = "relative";
          child.style.zIndex = "2";
        }
      });

      card.dataset.initialized = "true";
      card.dataset.activeLayer = "1";
    }

    // Determine which type of background image to use
    if (cardTitle.includes("fabric")) {
      // Fabrics card - use fabric images from cardImages
      const fabricImage = getRandomImage(cardBackgroundImages.fabricCard);
      if (fabricImage) {
        backgroundImage = `/Images/cardImages/${fabricImage}`;
      }
    } else if (cardTitle.includes("lace")) {
      // Lace card - use curated lace images
      const laceImage = getRandomImage(cardBackgroundImages.laceCard);
      if (laceImage) {
        // Check if the image path already includes directory structure
        if (laceImage.startsWith("Laces/")) {
          backgroundImage = `/Images/${laceImage}`;
        } else {
          backgroundImage = `/Images/cardImages/${laceImage}`;
        }
      }
    } else if (cardTitle.includes("atelier") || cardTitle.includes("fashion")) {
      // Fashion Atelier card - no background image, add coming soon badge
      addComingSoonBadge(card);
      return; // Skip adding background image
    } else {
      // Other cards - use general images if needed
      const fashionImage = getRandomImage(cardBackgroundImages.fashionCard);
      if (fashionImage) {
        backgroundImage = `/Images/cardImages/${fashionImage}`;
      }
    }

    // Apply smooth crossfade transition
    if (backgroundImage) {
      const layer1 = card.querySelector(".card-bg-layer-1");
      const layer2 = card.querySelector(".card-bg-layer-2");
      const activeLayer = card.dataset.activeLayer;

      if (activeLayer === "1") {
        // Set new image on layer 2 and fade it in
        layer2.style.backgroundImage = `url('${backgroundImage}')`;
        layer2.style.opacity = "1";
        layer1.style.opacity = "0";
        card.dataset.activeLayer = "2";
      } else {
        // Set new image on layer 1 and fade it in
        layer1.style.backgroundImage = `url('${backgroundImage}')`;
        layer1.style.opacity = "1";
        layer2.style.opacity = "0";
        card.dataset.activeLayer = "1";
      }
      card.style.position = "relative";

      // Determine if this is a lace card
      const isLaceCard = cardTitle.includes("lace");

      // Analyze image and apply appropriate text styling
      if (isLaceCard) {
        // For lace cards, always use text backgrounds regardless of image brightness
        applyDynamicTextStyling(
          card,
          "#ffffff",
          "1px 1px 2px rgba(0,0,0,0.8)",
          true
        );
        console.log(
          `✅ Applied background and lace text styling to ${cardTitle}: ${backgroundImage}`
        );
      } else {
        // For other cards, use dynamic contrast analysis
        getContrastingTextColor(backgroundImage)
          .then(({ color, shadow }) => {
            applyDynamicTextStyling(card, color, shadow, false);
            console.log(
              `✅ Applied background and dynamic text styling to ${cardTitle}: ${backgroundImage} (text: ${color})`
            );
          })
          .catch((error) => {
            console.warn("Failed to apply dynamic text styling:", error);
            // Apply default styling
            applyDynamicTextStyling(
              card,
              "#ffffff",
              "1px 1px 2px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.3)",
              false
            );
          });
      }
    } else {
      console.warn(`⚠️ No background image found for card: ${cardTitle}`);
    }
  });
}

async function initializeProductCardBackgrounds() {
  console.log("🚀 Initializing product card backgrounds...");

  await loadCardBackgroundImages();

  // Wait for DOM to be ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      applyCardBackgroundImages();
      // Start auto-rotation every 8 seconds
      setInterval(applyCardBackgroundImages, 8000);
    });
  } else {
    applyCardBackgroundImages();
    // Start auto-rotation every 8 seconds
    setInterval(applyCardBackgroundImages, 8000);
  }
}

// =================== END PRODUCT CARD BACKGROUND FUNCTIONALITY ===================

// =================== SEARCH EXPANSION FUNCTIONALITY ===================
function expandSearchInterface() {
  console.log("🚀 expandSearchInterface called");

  const iconContainer = document.getElementById("searchIconContainer");
  const expandedInterface = document.getElementById("expandedSearchInterface");

  console.log("iconContainer:", iconContainer);
  console.log("expandedInterface:", expandedInterface);

  if (!iconContainer) {
    console.error("❌ searchIconContainer not found");
    alert("Error: Search icon container not found");
    return;
  }

  if (!expandedInterface) {
    console.error("❌ expandedSearchInterface not found");
    alert("Error: Expanded interface not found");
    return;
  }

  console.log("✅ Found search elements, expanding interface");

  // Hide the search icon
  iconContainer.style.display = "none";
  console.log("✅ Hidden search icon container");

  // Force show the expanded interface with important styles and scrollbar
  expandedInterface.style.cssText = `
    display: block !important;
    opacity: 1 !important;
    visibility: visible !important;
    transform: translateY(0) !important;
    position: relative !important;
    z-index: 1000 !important;
    width: 100% !important;
    height: 400px !important;
    max-height: 400px !important;
    overflow-y: auto !important;
    overflow-x: hidden !important;
    background: rgba(0,0,0,0.1) !important;
    border: 2px solid #4ECDC4 !important;
    border-radius: 10px !important;
    padding: 20px !important;
    box-sizing: border-box !important;
  `;

  setTimeout(() => {
    expandedInterface.classList.add("show");
    console.log("✅ Added show class to expanded interface");
    console.log("Expanded interface styles:", expandedInterface.style.cssText);
  }, 50);

  // Ensure we have a default active category chip
  const activeChip = document.querySelector(".category-chip.active");
  if (!activeChip) {
    const firstChip = document.querySelector(".category-chip");
    if (firstChip) {
      firstChip.classList.add("active");
      console.log("✅ Set first chip as active:", firstChip.dataset.category);
    }
  }

  // Focus on the search input
  setTimeout(() => {
    const searchInput = document.getElementById("mainSearchInput");
    if (searchInput) {
      searchInput.focus();
      console.log("✅ Search input focused");
    }
  }, 300);
}

// =================== END SEARCH EXPANSION FUNCTIONALITY ===================

// =================== END PREMIUM SEARCH FUNCTIONALITY ===================

// =================== CONTACT PANEL NAVIGATION FUNCTIONALITY ===================

// Function to go back to previous page
function goBack() {
  window.history.back();
}

// Function to go to home page
function goHome() {
  window.location.href = '/';
}

// Function to go back with fallback to home
function goBackWithFallback() {
  // Check if there's history to go back to
  if (window.history.length > 1 && document.referrer !== '') {
    window.history.back();
  } else {
    // If no history or came directly to this page, go to home
    window.location.href = '/';
  }
}

// Show navigation buttons on small screens
function showContactPanelNavigation() {
  const backBtn = document.getElementById('contactPanelBack');
  const homeBtn = document.getElementById('contactPanelHome');

  // Show buttons only on screens 650px and below
  if (window.innerWidth <= 650) {
    if (backBtn) backBtn.style.display = 'inline';  // Changed to inline for span element
    if (homeBtn) homeBtn.style.display = 'flex';
  } else {
    if (backBtn) backBtn.style.display = 'none';
    if (homeBtn) homeBtn.style.display = 'none';
  }
}

// Update navigation visibility on resize
window.addEventListener('resize', showContactPanelNavigation);

// Initialize navigation visibility on page load
document.addEventListener('DOMContentLoaded', showContactPanelNavigation);

// =================== END CONTACT PANEL FUNCTIONALITY ===================

// =================== STORY VIDEO HEIGHT MATCHING FUNCTIONALITY ===================

function matchStoryVideoHeight() {
  const storyText = document.querySelector(".story-text");
  const storyVideo = document.querySelector(".story-video");

  if (!storyText || !storyVideo) return;

  // Only apply on larger screens where they're side by side
  const mediaQuery = window.matchMedia("(min-width: 769px)");

  function updateVideoHeight() {
    if (mediaQuery.matches) {
      // Get the title and paragraphs
      const title = storyText.querySelector("h2");
      const paragraphs = storyText.querySelectorAll("p");

      if (paragraphs.length > 0 && title) {
        // Calculate total height of all paragraphs only
        let totalParagraphHeight = 0;
        paragraphs.forEach((p) => {
          totalParagraphHeight += p.offsetHeight;
        });

        // Get the title height to use as top margin
        const titleHeight = title.offsetHeight;

        // Set the video container to match paragraph height and align with paragraphs
        storyVideo.style.height = `${totalParagraphHeight}px`;
        storyVideo.style.marginTop = `${titleHeight}px`;

        console.log(
          `Story video height: ${totalParagraphHeight}px, top margin: ${titleHeight}px`
        );
      }
    } else {
      // Reset to default for smaller screens
      storyVideo.style.height = "";
      storyVideo.style.marginTop = "";
    }
  }

  // Initial update
  updateVideoHeight();

  // Update on resize
  mediaQuery.addListener(updateVideoHeight);
  window.addEventListener("resize", updateVideoHeight);

  // Update after fonts and images load
  window.addEventListener("load", updateVideoHeight);
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", matchStoryVideoHeight);

// Also run after a short delay to ensure all content is loaded
setTimeout(matchStoryVideoHeight, 1000);

// =================== END STORY VIDEO HEIGHT MATCHING FUNCTIONALITY ===================

// =================== WATERMARK LOGO SCROLL FUNCTIONALITY ===================
function initWatermarkScroll() {
  const watermark = document.getElementById("watermarkLogo");
  const storySection = document.querySelector(".story-section");

  if (!watermark || !storySection) {
    console.warn("Watermark or story section not found");
    return;
  }

  function handleScroll() {
    const storyRect = storySection.getBoundingClientRect();
    const storyBottom = storyRect.bottom;

    // Show watermark when story section has scrolled past the viewport
    if (storyBottom <= 0) {
      watermark.classList.add("visible");
    } else {
      watermark.classList.remove("visible");
    }
  }

  // Listen for scroll events
  window.addEventListener("scroll", handleScroll);

  // Initial check
  handleScroll();
}

// Initialize watermark scroll functionality
document.addEventListener("DOMContentLoaded", initWatermarkScroll);
