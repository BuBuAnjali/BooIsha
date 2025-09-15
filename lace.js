// Complete Lace Product Database - Exhaustive collection of lace types

// Lace Product Database
const laceProducts = [
  // Chantilly Lace (30 products)
  {
    name: "French Chantilly Lace - White",
    category: "Chantilly",
    description: "Classic French Chantilly with delicate floral patterns and scalloped edges",
    specs: ["100% Silk", 'Width: 48"', "GSM: 70", "Scalloped Edge"],
    badges: ["premium", "handmade"],
    availability: "Available for Bulk Orders",
    image: "/Images/Laces/cerulean/cerulean lace.jpg"
  },
  {
    name: "French Chantilly Lace - Ivory",
    category: "Chantilly",
    description: "Elegant ivory Chantilly with traditional rose motifs",
    specs: ["100% Silk", 'Width: 48"', "GSM: 75", "Rose Motif"],
    badges: ["premium", "bridal"],
    availability: "Limited Quantity",
    image: "/Images/Laces/pink/pink lace.jpg"
  },
  {
    name: "French Chantilly Lace - Black",
    category: "Chantilly",
    description: "Sophisticated black Chantilly perfect for evening wear",
    specs: ["100% Silk", 'Width: 48"', "GSM: 80", "Evening Suitable"],
    badges: ["premium", "elegant"],
    availability: "Available for Bulk Orders",
    image: "/Images/Laces/cerulean/cerulean lace.jpg"
  },
  {
    name: "French Chantilly Lace - Champagne",
    category: "Chantilly",
    description: "Luxurious champagne colored Chantilly with intricate details",
    specs: ["100% Silk", 'Width: 48"', "GSM: 70", "Champagne Color"],
    badges: ["premium", "luxury"],
    availability: "Limited Quantity",
    image: "/Images/Laces/gold/gold lace.jpg"
  },
  {
    name: "English Chantilly Lace - White",
    category: "Chantilly",
    description: "Traditional English Chantilly with bobbin lace techniques",
    specs: ["Cotton Silk Blend", 'Width: 44"', "GSM: 65", "Bobbin Made"],
    badges: ["traditional", "handcrafted"],
    availability: "Available for Bulk Orders",
    image: "/Images/Laces/cerulean/cerulean lace.jpg"
  },
  {
    name: "English Chantilly Lace - Cream",
    category: "Chantilly",
    description: "Soft cream English Chantilly with vine patterns",
    specs: ["Cotton Silk Blend", 'Width: 44"', "GSM: 68", "Vine Pattern"],
    badges: ["traditional", "natural"],
    availability: "Available for Bulk Orders",
    image: "/Images/Laces/pink/gradient lace.jpg"
  },
  {
    name: "Silk Chantilly Lace - Rose Gold",
    category: "Chantilly",
    description: "Modern rose gold silk Chantilly with metallic threads",
    specs: ["Silk with Metallic", 'Width: 50"', "GSM: 85", "Metallic Thread"],
    badges: ["modern", "metallic"],
    availability: "Limited Quantity",
    image: "/Images/Laces/gold/gold lace.jpg"
  },
  {
    name: "Silk Chantilly Lace - Navy",
    category: "Chantilly",
    description: "Deep navy silk Chantilly with geometric accents",
    specs: ["100% Silk", 'Width: 48"', "GSM: 78", "Geometric Pattern"],
    badges: ["premium", "modern"],
    availability: "Available for Bulk Orders",
    image: "/Images/Laces/cerulean/cerulean lace.jpg"
  },
  {
    name: "Cotton Chantilly Lace - White",
    category: "Chantilly",
    description: "Pure cotton Chantilly perfect for casual applications",
    specs: ["100% Cotton", 'Width: 42"', "GSM: 55", "Casual Wear"],
    badges: ["natural", "breathable"],
    availability: "Available for Bulk Orders",
    image: "/Images/Laces/cerulean/cerulean lace.jpg"
  },
  {
    name: "Cotton Chantilly Lace - Blush",
    category: "Chantilly",
    description: "Romantic blush cotton Chantilly with heart motifs",
    specs: ["100% Cotton", 'Width: 42"', "GSM: 58", "Heart Motif"],
    badges: ["romantic", "soft"],
    availability: "Limited Quantity",
    image: "/Images/Laces/pink/pink lace.jpg"
  },

  // Venetian Lace (16 products)
  {
    name: "Burano Needle Lace - White",
    category: "Venetian",
    description: "Authentic Burano needle lace with raised floral motifs",
    specs: ["100% Linen", 'Width: 12"', "Handmade", "Raised Relief"],
    badges: ["authentic", "handmade", "heritage"],
    availability: "Very Limited",
    image: "/Images/Laces/cerulean/cerulean lace.jpg"
  },
  {
    name: "Burano Needle Lace - Ivory",
    category: "Venetian",
    description: "Traditional ivory Burano with centuries-old techniques",
    specs: ["100% Linen", 'Width: 12"', "Handmade", "Traditional"],
    badges: ["authentic", "heritage", "museum quality"],
    availability: "Very Limited",
    image: "/Images/Laces/pink/gradient lace.jpg"
  },
  {
    name: "Point de Venise - White",
    category: "Venetian",
    description: "Classic Point de Venise with baroque scrollwork",
    specs: ["Cotton Linen Blend", 'Width: 6"', "Baroque Style", "Scrollwork"],
    badges: ["classic", "baroque"],
    availability: "Limited Quantity",
    image: "/Images/Laces/cerulean/cerulean lace.jpg"
  },
  {
    name: "Point de Venise - Gold",
    category: "Venetian",
    description: "Luxurious gold Point de Venise with metallic accents",
    specs: ["Cotton with Metallic", 'Width: 6"', "Gold Thread", "Luxury"],
    badges: ["luxury", "metallic"],
    availability: "Very Limited",
    image: "/Images/Laces/gold/gold lace.jpg"
  },
  {
    name: "Rose Point Lace - White",
    category: "Venetian",
    description: "Delicate Rose Point with three-dimensional flowers",
    specs: ["100% Cotton", 'Width: 8"', "3D Flowers", "Fine Detail"],
    badges: ["delicate", "3d"],
    availability: "Limited Quantity",
    image: "/Images/Laces/cerulean/cerulean lace.jpg"
  },
  {
    name: "Rose Point Lace - Antique White",
    category: "Venetian",
    description: "Vintage-style antique white Rose Point lace",
    specs: ["100% Cotton", 'Width: 8"', "Vintage Style", "Aged Look"],
    badges: ["vintage", "antique"],
    availability: "Available for Bulk Orders",
    image: "/Images/Laces/pink/gradient lace.jpg"
  },

  // Guipure Lace (33 products)
  {
    name: "Heavy Guipure Lace - White",
    category: "Guipure",
    description: "Substantial white Guipure with bold floral patterns",
    specs: ["Cotton Polyester", 'Width: 54"', "GSM: 180", "Bold Pattern"],
    badges: ["heavy", "bold"],
    availability: "Available for Bulk Orders",
    image: "/Images/Laces/cerulean/cerulean lace.jpg"
  },
  {
    name: "Heavy Guipure Lace - Black",
    category: "Guipure",
    description: "Dramatic black Guipure perfect for formal wear",
    specs: ["Cotton Polyester", 'Width: 54"', "GSM: 185", "Formal Wear"],
    badges: ["dramatic", "formal"],
    availability: "Available for Bulk Orders",
    image: "/Images/Laces/cerulean/cerulean lace.jpg"
  },
  {
    name: "Floral Guipure Lace - Pink",
    category: "Guipure",
    description: "Romantic pink Guipure with large rose motifs",
    specs: ["Cotton Blend", 'Width: 50"', "GSM: 150", "Rose Motif"],
    badges: ["romantic", "floral"],
    availability: "Limited Quantity",
    image: "/Images/Laces/pink/pink lace.jpg"
  },
  {
    name: "Floral Guipure Lace - Red",
    category: "Guipure",
    description: "Bold red Guipure with passionate floral designs",
    specs: ["Cotton Blend", 'Width: 50"', "GSM: 155", "Passionate Design"],
    badges: ["bold", "passionate"],
    availability: "Limited Quantity",
    image: "/Images/Laces/coral/coral pink lace.jpg"
  },
  {
    name: "Geometric Guipure Lace - White",
    category: "Guipure",
    description: "Modern geometric Guipure with clean lines",
    specs: ["Polyester Cotton", 'Width: 48"', "GSM: 140", "Modern Design"],
    badges: ["modern", "geometric"],
    availability: "Available for Bulk Orders",
    image: "/Images/Laces/cerulean/cerulean lace.jpg"
  },
  {
    name: "Geometric Guipure Lace - Navy",
    category: "Guipure",
    description: "Sophisticated navy geometric Guipure",
    specs: ["Polyester Cotton", 'Width: 48"', "GSM: 142", "Sophisticated"],
    badges: ["sophisticated", "modern"],
    availability: "Available for Bulk Orders",
    image: "/Images/Laces/cerulean/cerulean lace.jpg"
  },

  // Alençon Lace (10 products)
  {
    name: "Traditional Alençon Lace - White",
    category: "Alençon",
    description: "Authentic French Alençon with cordonnet outline",
    specs: ["100% Cotton", 'Width: 36"', "Cordonnet Edge", "French Made"],
    badges: ["authentic", "french", "traditional"],
    availability: "Very Limited",
    image: "/Images/Laces/cerulean/cerulean lace.jpg"
  },
  {
    name: "Traditional Alençon Lace - Ivory",
    category: "Alençon",
    description: "Classic ivory Alençon with mesh ground",
    specs: ["100% Cotton", 'Width: 36"', "Mesh Ground", "Classic"],
    badges: ["classic", "traditional"],
    availability: "Very Limited",
    image: "/Images/Laces/pink/gradient lace.jpg"
  },
  {
    name: "Modern Alençon Lace - White",
    category: "Alençon",
    description: "Contemporary interpretation of classic Alençon",
    specs: ["Cotton Blend", 'Width: 40"', "Modern Style", "Accessible"],
    badges: ["modern", "contemporary"],
    availability: "Limited Quantity",
    image: "/Images/Laces/cerulean/cerulean lace.jpg"
  },
  {
    name: "Modern Alençon Lace - Champagne",
    category: "Alençon",
    description: "Elegant champagne modern Alençon",
    specs: ["Cotton Blend", 'Width: 40"', "Elegant Style", "Champagne"],
    badges: ["elegant", "modern"],
    availability: "Limited Quantity",
    image: "/Images/Laces/gold/gold lace.jpg"
  },

  // Crochet Lace (25 products)
  {
    name: "Irish Crochet Lace - White",
    category: "Crochet",
    description: "Authentic Irish crochet with raised flowers",
    specs: ["100% Cotton Thread", 'Width: Variable"', "Handmade", "Raised Flowers"],
    badges: ["authentic", "handmade", "irish"],
    availability: "Very Limited",
    image: "/Images/Laces/cerulean/cerulean lace.jpg"
  },
  {
    name: "Irish Crochet Lace - Cream",
    category: "Crochet",
    description: "Traditional cream Irish crochet with shamrock motifs",
    specs: ["100% Cotton Thread", 'Width: Variable"', "Shamrock Motif", "Traditional"],
    badges: ["traditional", "shamrock", "handmade"],
    availability: "Very Limited",
    image: "/Images/Laces/pink/gradient lace.jpg"
  },
  {
    name: "Filet Crochet Lace - White",
    category: "Crochet",
    description: "Classic filet crochet with geometric patterns",
    specs: ["Cotton Thread", 'Width: 24"', "Geometric", "Grid Base"],
    badges: ["classic", "geometric"],
    availability: "Available for Bulk Orders",
    image: "/Images/Laces/cerulean/cerulean lace.jpg"
  },
  {
    name: "Filet Crochet Lace - Ecru",
    category: "Crochet",
    description: "Natural ecru filet crochet with floral motifs",
    specs: ["Cotton Thread", 'Width: 24"', "Floral Motif", "Natural Color"],
    badges: ["natural", "floral"],
    availability: "Available for Bulk Orders",
    image: "/Images/Laces/pink/gradient lace.jpg"
  },
  {
    name: "Bruges Crochet Lace - White",
    category: "Crochet",
    description: "Elegant Bruges crochet with tape technique",
    specs: ["Fine Cotton", 'Width: 18"', "Tape Technique", "Belgian Style"],
    badges: ["elegant", "belgian", "tape"],
    availability: "Limited Quantity",
    image: "/Images/Laces/cerulean/cerulean lace.jpg"
  },

  // Embroidered Lace (30 products)
  {
    name: "Eyelet Embroidered Lace - White",
    category: "Embroidered",
    description: "Classic white eyelet with scalloped border",
    specs: ["100% Cotton", 'Width: 45"', "Eyelet Design", "Scalloped"],
    badges: ["classic", "cotton", "scalloped"],
    availability: "Available for Bulk Orders",
    image: "/Images/Laces/cerulean/cerulean lace.jpg"
  },
  {
    name: "Eyelet Embroidered Lace - Pink",
    category: "Embroidered",
    description: "Sweet pink eyelet perfect for children's wear",
    specs: ["100% Cotton", 'Width: 45"', "Children Suitable", "Sweet Design"],
    badges: ["children", "sweet", "cotton"],
    availability: "Available for Bulk Orders",
    image: "/Images/Laces/pink/pink lace.jpg"
  },
  {
    name: "Cutwork Embroidered Lace - White",
    category: "Embroidered",
    description: "Intricate cutwork with hand-embroidered details",
    specs: ["Linen Cotton", 'Width: 36"', "Hand Embroidered", "Cutwork"],
    badges: ["intricate", "hand embroidered"],
    availability: "Limited Quantity",
    image: "/Images/Laces/cerulean/cerulean lace.jpg"
  },
  {
    name: "Cutwork Embroidered Lace - Ivory",
    category: "Embroidered",
    description: "Elegant ivory cutwork with floral patterns",
    specs: ["Linen Cotton", 'Width: 36"', "Floral Pattern", "Elegant"],
    badges: ["elegant", "floral"],
    availability: "Limited Quantity",
    image: "/Images/Laces/pink/gradient lace.jpg"
  },
  {
    name: "Battenberg Lace - White",
    category: "Embroidered",
    description: "Traditional Battenberg with tape and bars",
    specs: ["Cotton Tape", 'Width: 12"', "Tape & Bars", "Traditional"],
    badges: ["traditional", "tape"],
    availability: "Available for Bulk Orders",
    image: "/Images/Laces/cerulean/cerulean lace.jpg"
  },

  // Stretch Lace (12 products)
  {
    name: "Lycra Stretch Lace - White",
    category: "Stretch",
    description: "Comfortable white stretch lace with 4-way stretch",
    specs: ["Nylon Lycra", 'Width: 60"', "4-Way Stretch", "Comfortable"],
    badges: ["stretch", "comfortable"],
    availability: "Available for Bulk Orders",
    image: "/Images/Laces/cerulean/cerulean lace.jpg"
  },
  {
    name: "Lycra Stretch Lace - Black",
    category: "Stretch",
    description: "Versatile black stretch lace for lingerie",
    specs: ["Nylon Lycra", 'Width: 60"', "Lingerie Suitable", "Versatile"],
    badges: ["versatile", "lingerie"],
    availability: "Available for Bulk Orders",
    image: "/Images/Laces/cerulean/cerulean lace.jpg"
  },
  {
    name: "Spandex Stretch Lace - Red",
    category: "Stretch",
    description: "Bold red spandex lace with excellent recovery",
    specs: ["Polyester Spandex", 'Width: 58"', "Excellent Recovery", "Bold"],
    badges: ["bold", "recovery"],
    availability: "Limited Quantity",
    image: "/Images/Laces/coral/coral pink lace.jpg"
  },
  {
    name: "Spandex Stretch Lace - Pink",
    category: "Stretch",
    description: "Soft pink spandex lace with floral motifs",
    specs: ["Polyester Spandex", 'Width: 58"', "Floral Motif", "Soft"],
    badges: ["soft", "floral"],
    availability: "Available for Bulk Orders",
    image: "/Images/Laces/pink/pink lace.jpg"
  },
  {
    name: "Power Mesh Lace - White",
    category: "Stretch",
    description: "High-performance power mesh with lace overlay",
    specs: ["Nylon Spandex", 'Width: 62"', "High Performance", "Mesh Base"],
    badges: ["performance", "mesh"],
    availability: "Available for Bulk Orders",
    image: "/Images/Laces/cerulean/cerulean lace.jpg"
  },
  {
    name: "Power Mesh Lace - Black",
    category: "Stretch",
    description: "Professional black power mesh for activewear",
    specs: ["Nylon Spandex", 'Width: 62"', "Activewear", "Professional"],
    badges: ["activewear", "professional"],
    availability: "Available for Bulk Orders",
    image: "/Images/Laces/cerulean/cerulean lace.jpg"
  },

  // Additional Specialty Laces
  {
    name: "Corded Lace - Gold",
    category: "Specialty",
    description: "Luxurious gold corded lace with raised cording",
    specs: ["Polyester with Cord", 'Width: 52"', "Raised Cord", "Luxury"],
    badges: ["luxury", "corded"],
    availability: "Limited Quantity",
    image: "/Images/Laces/gold/gold lace.jpg"
  },
  {
    name: "Corded Lace - Silver",
    category: "Specialty",
    description: "Elegant silver corded lace with metallic shine",
    specs: ["Polyester with Cord", 'Width: 52"', "Metallic Shine", "Elegant"],
    badges: ["elegant", "metallic"],
    availability: "Limited Quantity",
    image: "/Images/Laces/silver/silver lace.jpg"
  },
  {
    name: "Beaded Lace - White Pearl",
    category: "Specialty",
    description: "Exquisite white lace with pearl bead embellishments",
    specs: ["Silk with Pearls", 'Width: 44"', "Pearl Beads", "Exquisite"],
    badges: ["exquisite", "beaded", "pearl"],
    availability: "Very Limited",
    image: "/Images/Laces/cerulean/cerulean lace.jpg"
  },
  {
    name: "Sequined Lace - Champagne",
    category: "Specialty",
    description: "Glamorous champagne lace with sequin details",
    specs: ["Polyester with Sequins", 'Width: 50"', "Sequin Details", "Glamorous"],
    badges: ["glamorous", "sequined"],
    availability: "Limited Quantity",
    image: "/Images/Laces/gold/gold lace.jpg"
  },
  {
    name: "Metallic Thread Lace - Rose Gold",
    category: "Specialty",
    description: "Modern rose gold lace with metallic threading",
    specs: ["Cotton with Metallic", 'Width: 46"', "Metallic Thread", "Modern"],
    badges: ["modern", "metallic"],
    availability: "Limited Quantity",
    image: "/Images/Laces/gold/gold lace.jpg"
  }
];

// Search filters and state
let currentLaceProducts = laceProducts;
let currentPage = 1;
const productsPerPage = 12;
let activeSearchFilters = {};

// Initialize lace page
function initializeLacePage() {
  console.log("Initializing lace page with", laceProducts.length, "products");
  renderCurrentPage();
  applyCategoryBackgrounds();
}

// Render products for current page
function renderCurrentPage() {
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const productsToShow = currentLaceProducts.slice(startIndex, endIndex);

  renderLaceProducts(productsToShow);
  updatePagination();
  updateResultsDisplay();
}

// Render lace products in grid
function renderLaceProducts(products) {
  const productsGrid = document.querySelector('.products-grid');
  if (!productsGrid) return;

  productsGrid.innerHTML = products.map(product => `
    <div class="product-card" data-category="${product.category}">
      <div class="product-image" style="background-image: url('${product.image}')">
        <div class="product-badges">
          ${product.badges.map(badge => `<span class="badge ${badge}">${badge}</span>`).join('')}
        </div>
      </div>
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-specs">
          ${product.specs.map(spec => `<span class="spec">${spec}</span>`).join('')}
        </div>
        <div class="product-footer">
          <span class="availability ${product.availability.toLowerCase().replace(/\s+/g, '-')}">${product.availability}</span>
          <button class="enquiry-btn" onclick="openLaceEnquiry('${product.name}')">Enquire</button>
        </div>
      </div>
    </div>
  `).join('');
}

// Update pagination
function updatePagination() {
  const totalPages = Math.ceil(currentLaceProducts.length / productsPerPage);
  const existingPagination = document.querySelector('.pagination');

  if (existingPagination) {
    existingPagination.remove();
  }

  if (totalPages <= 1) return;

  const paginationHTML = `
    <div class="pagination">
      <button class="page-btn prev" onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>
        ← Previous
      </button>
      <div class="page-numbers">
        ${Array.from({length: totalPages}, (_, i) => i + 1).map(pageNum => `
          <button class="page-number ${pageNum === currentPage ? 'active' : ''}" onclick="changePage(${pageNum})">
            ${pageNum}
          </button>
        `).join('')}
      </div>
      <button class="page-btn next" onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>
        Next →
      </button>
    </div>
  `;

  const productsListing = document.querySelector('.products-listing .container');
  if (productsListing) {
    productsListing.insertAdjacentHTML('beforeend', paginationHTML);
  }
}

// Change page
function changePage(newPage) {
  const totalPages = Math.ceil(currentLaceProducts.length / productsPerPage);
  if (newPage >= 1 && newPage <= totalPages) {
    currentPage = newPage;
    renderCurrentPage();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// Update results display
function updateResultsDisplay() {
  const resultsDisplay = document.getElementById('unified-results-display');
  if (resultsDisplay) {
    const startItem = (currentPage - 1) * productsPerPage + 1;
    const endItem = Math.min(currentPage * productsPerPage, currentLaceProducts.length);
    resultsDisplay.textContent = `Showing ${startItem}-${endItem} of ${currentLaceProducts.length} lace products`;
  }
}

// Search functionality
function performLaceSearch(query) {
  query = query || document.getElementById('fabric-search-input').value.toLowerCase().trim();

  if (!query) {
    currentLaceProducts = laceProducts;
  } else {
    currentLaceProducts = laceProducts.filter(product =>
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.specs.some(spec => spec.toLowerCase().includes(query))
    );
  }

  currentPage = 1;
  renderCurrentPage();
}

// Filter by category
function filterProductsByCategory(category) {
  category = category || document.getElementById('fabric-category-filter').value;

  if (category === 'All Categories' || !category) {
    currentLaceProducts = laceProducts;
  } else {
    currentLaceProducts = laceProducts.filter(product =>
      product.category.toLowerCase().includes(category.toLowerCase()) ||
      product.name.toLowerCase().includes(category.toLowerCase()) ||
      product.description.toLowerCase().includes(category.toLowerCase())
    );
  }

  currentPage = 1;
  renderCurrentPage();
}

// Sort products
function sortSearchResults(sortBy) {
  switch (sortBy) {
    case 'name-asc':
      currentLaceProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'name-desc':
      currentLaceProducts.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case 'category':
      currentLaceProducts.sort((a, b) => a.category.localeCompare(b.category));
      break;
    case 'newest':
      // Reverse original order for "newest"
      currentLaceProducts.reverse();
      break;
    default:
      // Relevance - restore original order
      currentLaceProducts = [...laceProducts].filter(product =>
        currentLaceProducts.some(current => current.name === product.name)
      );
  }

  currentPage = 1;
  renderCurrentPage();
}

// Clear all filters
function clearAllSearchFilters() {
  document.getElementById('fabric-search-input').value = '';
  document.getElementById('fabric-category-filter').selectedIndex = 0;
  document.querySelectorAll('.filter-select').forEach(select => select.selectedIndex = 0);

  currentLaceProducts = laceProducts;
  currentPage = 1;
  renderCurrentPage();
}

// Handle search
function handleSearch() {
  performLaceSearch();
}

function handleBottomSearch() {
  const query = document.getElementById('bottom-search-input').value;
  document.getElementById('fabric-search-input').value = query;
  performLaceSearch(query);
}

// Handle category filter
function handleCategoryFilter() {
  filterProductsByCategory();
}

// Reset search
function resetSearch() {
  clearAllSearchFilters();
}

// Filter by specific fabric (from side menu)
function filterByFabric(fabricName) {
  document.getElementById('fabric-search-input').value = fabricName;
  performLaceSearch(fabricName);
  closeSideMenu();

  // Switch to all fabrics view
  if (typeof switchToAllFabrics === 'function') {
    switchToAllFabrics();
  }
}

// Open lace enquiry
function openLaceEnquiry(laceName) {
  document.getElementById('enquiryFabricName').textContent = laceName;
  document.getElementById('fabricEnquiryModal').style.display = 'flex';
}

// Close lace enquiry
function closeFabricEnquiry() {
  document.getElementById('fabricEnquiryModal').style.display = 'none';
}

// Side menu functions (inherited from fabrics.js structure)
function toggleSideMenu() {
  const menuOverlay = document.querySelector(".menu-overlay");
  const sideMenu = document.querySelector(".side-menu");

  if (!menuOverlay || !sideMenu) return;

  const isMobile = window.innerWidth <= 750;
  const menuToggle = isMobile
    ? document.querySelector(".bottom-search-row .menu-toggle")
    : document.querySelector(".desktop-menu-toggle");

  if (!menuToggle) return;

  if (isMobile) {
    sideMenu.style.position = "";
    sideMenu.style.top = "";
    sideMenu.style.left = "";
    sideMenu.style.bottom = "";
    sideMenu.style.right = "";
  } else {
    const rect = menuToggle.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    sideMenu.style.position = "absolute";
    sideMenu.style.top = rect.bottom + scrollTop + 10 + "px";
    sideMenu.style.left = rect.left + "px";
    sideMenu.style.bottom = "";
    sideMenu.style.right = "";
    sideMenu.style.transform = "";
    sideMenu.style.borderRadius = "";
  }

  menuToggle.classList.toggle("active");
  menuOverlay.classList.toggle("active");
  sideMenu.classList.toggle("active");
}

function closeSideMenu() {
  const menuOverlay = document.querySelector(".menu-overlay");
  const sideMenu = document.querySelector(".side-menu");

  const isMobile = window.innerWidth <= 750;
  const menuToggle = isMobile
    ? document.querySelector(".bottom-search-row .menu-toggle")
    : document.querySelector(".desktop-menu-toggle");

  if (sideMenu) sideMenu.classList.add("closing");
  if (menuToggle) menuToggle.classList.remove("active");
  if (menuOverlay) menuOverlay.classList.remove("active");

  setTimeout(() => {
    if (sideMenu) sideMenu.classList.remove("active", "closing");
  }, 250);
}

function toggleCategory(header) {
  const fabricList = header.nextElementSibling;
  const isActive = header.classList.contains("active");

  // Close all other categories
  document.querySelectorAll(".category-header").forEach(h => {
    h.classList.remove("active");
    h.nextElementSibling.style.display = "none";
  });

  // Toggle current category
  if (!isActive) {
    header.classList.add("active");
    fabricList.style.display = "block";
  }
}

// Category background images
function applyCategoryBackgrounds() {
  const categoryCards = document.querySelectorAll('.fabric-category-card');

  const imageMap = {
    'Chantilly': '/Images/Laces/pink/pink lace.jpg',
    'Venetian': '/Images/Laces/cerulean/cerulean lace.jpg',
    'Guipure': '/Images/Laces/green/pale green lace.jpg',
    'Alençon': '/Images/Laces/gold/gold lace.jpg',
    'Crochet': '/Images/Laces/coral/coral pink lace.jpg',
    'Embroidered': '/Images/Laces/purple/purple lace.jpg',
    'Stretch': '/Images/Laces/purple/sky blue lace.jpg'
  };

  categoryCards.forEach(card => {
    const h3Element = card.querySelector('h3');
    if (!h3Element) return;

    const categoryTitle = h3Element.textContent;

    for (const [keyword, imagePath] of Object.entries(imageMap)) {
      if (categoryTitle.includes(keyword)) {
        const categoryImage = card.querySelector('.category-image');
        if (categoryImage) {
          categoryImage.style.backgroundImage = `url('${imagePath}')`;
          categoryImage.style.backgroundSize = 'cover';
          categoryImage.style.backgroundPosition = 'center';
          categoryImage.style.backgroundRepeat = 'no-repeat';
          break;
        }
      }
    }
  });
}

// View switching functions
function switchToCategories() {
  document.getElementById("categoriesView").style.display = "block";
  document.getElementById("allFabricsView").style.display = "none";

  document.getElementById("categoryViewBtn").classList.add("active");
  document.getElementById("allFabricsBtn").classList.remove("active");

  const existingPagination = document.querySelector(".pagination");
  if (existingPagination) {
    existingPagination.remove();
  }

  const categoryCards = document.querySelectorAll(".fabric-category-card");
  const resultsDisplay = document.getElementById("unified-results-display");
  if (resultsDisplay && categoryCards.length > 0) {
    resultsDisplay.textContent = `Showing ${categoryCards.length} of ${categoryCards.length} lace categories`;
  }
}

function switchToAllFabrics() {
  document.getElementById("categoriesView").style.display = "none";
  document.getElementById("allFabricsView").style.display = "block";

  document.getElementById("categoryViewBtn").classList.remove("active");
  document.getElementById("allFabricsBtn").classList.add("active");

  renderCurrentPage();
}

// Category card clicks
function openFabricCategory(category) {
  switchToAllFabrics();

  const categoryMapping = {
    'chantilly': 'Chantilly',
    'venetian': 'Venetian',
    'guipure': 'Guipure',
    'alencon': 'Alençon',
    'crochet': 'Crochet',
    'embroidered': 'Embroidered',
    'stretch': 'Stretch'
  };

  const dropdownValue = categoryMapping[category];
  if (dropdownValue) {
    const categoryDropdown = document.getElementById('fabric-category-filter');
    if (categoryDropdown) {
      categoryDropdown.value = dropdownValue;
    }

    setTimeout(() => {
      filterProductsByCategory(dropdownValue);
    }, 100);
  }
}

// Handle URL parameters from index page
function handleUrlParameters() {
  const urlParams = new URLSearchParams(window.location.search);
  const searchQuery = urlParams.get("search");
  const categoryFilter = urlParams.get("category");

  if (searchQuery) {
    const searchInput = document.getElementById("fabric-search-input");
    if (searchInput) {
      searchInput.value = searchQuery;
    }
  }

  if (categoryFilter) {
    const categoryMapping = {
      lace: "All Categories"
    };

    const dropdownValue = categoryMapping[categoryFilter] || categoryFilter;
    const categoryDropdown = document.getElementById("fabric-category-filter");
    if (categoryDropdown) {
      categoryDropdown.value = dropdownValue;
    }
  }

  if (searchQuery || categoryFilter) {
    switchToAllFabrics();

    setTimeout(() => {
      if (searchQuery) {
        performLaceSearch(searchQuery);
      } else if (categoryFilter) {
        filterProductsByCategory(categoryFilter);
      }
    }, 500);
  } else {
    switchToCategories();
  }
}

// Side menu category filtering
function filterSideMenuByCategory() {
  const filterSelect = document.getElementById("side-category-filter");
  const selectedCategory = filterSelect.value;
  const allCategories = document.querySelectorAll(".fabric-category");

  allCategories.forEach((category) => {
    const categoryHeader = category.querySelector(".category-header h3");
    const categoryName = categoryHeader.textContent;

    if (!selectedCategory || categoryName.includes(selectedCategory)) {
      category.style.display = "block";
    } else {
      category.style.display = "none";
    }
  });

  if (selectedCategory) {
    const mainFilterSelect = document.querySelector(".filter-select");
    if (mainFilterSelect) {
      mainFilterSelect.value = selectedCategory;
      filterProductsByCategory(selectedCategory);
    }
  }
}

// Hero background cycling system
let heroImageIndex = 0;
let currentFolderIndex = 0;
const laceFolders = ['blue', 'cerulean', 'coral', 'gold', 'green', 'pink', 'purple', 'red', 'silver', 'skyBlue'];
const laceImagesByFolder = {
  'blue': [],
  'cerulean': [
    '/Images/Laces/cerulean/cerulean lace.jpg',
    '/Images/Laces/cerulean/cerulean lace(1).jpg',
    '/Images/Laces/cerulean/cerulean lace(2).jpg'
  ],
  'coral': [
    '/Images/Laces/coral/coral pink lace.jpg',
    '/Images/Laces/coral/coral pink lace(1).jpg',
    '/Images/Laces/coral/coral pink lace(2).jpg'
  ],
  'gold': [
    '/Images/Laces/gold/gold lace.jpg',
    '/Images/Laces/gold/gold lace(1).jpg',
    '/Images/Laces/gold/gold lace(2).jpg',
    '/Images/Laces/gold/goldLace.png'
  ],
  'green': [
    '/Images/Laces/green/coral green lace.jpg',
    '/Images/Laces/green/coral green lace(1).jpg',
    '/Images/Laces/green/coral green lace(2).jpg',
    '/Images/Laces/green/pale green lace.jpg',
    '/Images/Laces/green/pale green lace(1).jpg',
    '/Images/Laces/green/pale green lace(2).jpg'
  ],
  'pink': [
    '/Images/Laces/pink/gradient lace.jpg',
    '/Images/Laces/pink/pink lace.jpg',
    '/Images/Laces/pink/pink lace(1).jpg',
    '/Images/Laces/pink/pink lace(2).jpg',
    '/Images/Laces/pink/pink lace(3).jpg'
  ],
  'purple': [
    '/Images/Laces/purple/purple lace.jpg',
    '/Images/Laces/purple/purple lace(1).jpg',
    '/Images/Laces/purple/purple lace(2).jpg',
    '/Images/Laces/purple/purple lace(3).jpg',
    '/Images/Laces/purple/sky blue lace.jpg',
    '/Images/Laces/purple/sky blue lace(1).jpg',
    '/Images/Laces/purple/sky blue lace(2).jpg',
    '/Images/Laces/purple/sky blue lace(3).jpg'
  ],
  'red': [],
  'silver': [
    '/Images/Laces/silver/lace images(1).jpg',
    '/Images/Laces/silver/silver lace.jpg',
    '/Images/Laces/silver/silver lace(1).jpg',
    '/Images/Laces/silver/silver lace(2).jpg',
    '/Images/Laces/silver/silver lace(3).jpg',
    '/Images/Laces/silver/silverLace.jpeg',
    '/Images/Laces/silver/SilverLace.png'
  ],
  'skyBlue': []
};

function initializeHeroBackgroundCycling() {
  const heroElement = document.querySelector('.textiles-hero-bg');
  if (!heroElement) return;

  // Find first folder with images
  while (currentFolderIndex < laceFolders.length && laceImagesByFolder[laceFolders[currentFolderIndex]].length === 0) {
    currentFolderIndex++;
  }

  if (currentFolderIndex >= laceFolders.length) return;

  function updateHeroBackground() {
    const currentFolder = laceFolders[currentFolderIndex];
    const currentFolderImages = laceImagesByFolder[currentFolder];

    if (currentFolderImages.length === 0) {
      // Move to next folder if current has no images
      currentFolderIndex++;
      heroImageIndex = 0;

      // Find next folder with images
      while (currentFolderIndex < laceFolders.length && laceImagesByFolder[laceFolders[currentFolderIndex]].length === 0) {
        currentFolderIndex++;
      }

      if (currentFolderIndex >= laceFolders.length) {
        currentFolderIndex = 0;
        // Find first folder with images again
        while (currentFolderIndex < laceFolders.length && laceImagesByFolder[laceFolders[currentFolderIndex]].length === 0) {
          currentFolderIndex++;
        }
      }
      return;
    }

    const currentImage = currentFolderImages[heroImageIndex];
    heroElement.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${currentImage}')`;

    console.log(`Showing image ${heroImageIndex + 1}/${currentFolderImages.length} from ${currentFolder}: ${currentImage}`);

    heroImageIndex++;

    // If we've shown all images in current folder, move to next folder
    if (heroImageIndex >= currentFolderImages.length) {
      heroImageIndex = 0;
      currentFolderIndex++;

      // Reset to first folder if we've gone through all
      if (currentFolderIndex >= laceFolders.length) {
        currentFolderIndex = 0;
      }

      // Find next folder with images
      while (currentFolderIndex < laceFolders.length && laceImagesByFolder[laceFolders[currentFolderIndex]].length === 0) {
        currentFolderIndex++;
      }

      if (currentFolderIndex >= laceFolders.length) {
        currentFolderIndex = 0;
        // Find first folder with images again
        while (currentFolderIndex < laceFolders.length && laceImagesByFolder[laceFolders[currentFolderIndex]].length === 0) {
          currentFolderIndex++;
        }
      }
    }
  }

  // Set initial background
  updateHeroBackground();

  // Change background every 5 seconds
  setInterval(updateHeroBackground, 5000);
}

// Initialize when page loads
window.addEventListener("load", function() {
  console.log("Lace page loaded, initializing...");
  switchToCategories();
  applyCategoryBackgrounds();
  handleUrlParameters();
  initializeLacePage();
  initializeHeroBackgroundCycling();
});

// Export for debugging
window.laceProducts = laceProducts;
window.currentLaceProducts = currentLaceProducts;