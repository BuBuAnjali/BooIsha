const specialityCollections = [
  {
    id: "furniture-upholstery",
    label: "Furniture Upholstery",
    description: "Durable, performance-tested textiles developed for everyday seating and hospitality fixtures.",
    items: [
      {
        label: "Velvet",
        summary: "Luxe pile fabrics engineered for plush residential and hospitality seating.",
        children: [
          {
            label: "Cotton Velvet",
            summary: "Breathable natural pile with a soft matte finish for refined sofas and chairs.",
          },
          {
            label: "Polyester Velvet",
            summary: "Hard-wearing velvet with vibrant colour retention for busy lounge areas.",
          },
          {
            label: "Performance Velvet",
            summary: "Stain-resistant velvet crafted for family living and contract projects.",
          },
        ],
      },
      {
        label: "Chenille",
        summary: "Soft yarn pile constructions prized for their dimensional texture and comfort.",
        children: [
          {
            label: "Pile Fabric",
            summary: "Classic chenille pile delivering plush hand-feel for cushions and seating.",
          },
          {
            label: "Polyester Chenille",
            summary: "Durable synthetic chenille with easy-care performance.",
          },
          {
            label: "Cotton Blend Chenille",
            summary: "Balanced natural-synthetic blend for breathable, resilient upholstery.",
          },
        ],
      },
      {
        label: "Jacquard",
        summary: "Ornate woven patterns for statement upholstery and heirloom pieces.",
        children: [
          {
            label: "Woven Decorative Upholstery Fabric",
            summary: "Intricate jacquard motifs engineered for long-lasting visual impact.",
          },
        ],
      },
      {
        label: "Tweed",
        summary: "Heritage-inspired textures delivering warmth and depth to upholstery silhouettes.",
        children: [
          {
            label: "Wool Tweed",
            summary: "Traditional wool tweed bringing natural insulation and classic style.",
          },
          {
            label: "Wool-Blend Textured Weave",
            summary: "Blended tweed construction balancing softness with durability.",
          },
        ],
      },
      {
        label: "Bouclé (looped yarn textured fabric)",
        summary: "Signature looped yarn surface ideal for sculptural seating statements.",
      },
      {
        label: "Linen Blend Upholstery Fabric (Blended)",
        summary: "Cooling linen-rich blends refined for relaxed yet tailored upholstery.",
      },
      {
        label: "Canvas / Duck Cloth",
        summary: "Dense plain-weave cloth delivering rugged protection for daily-use furniture.",
        children: [
          {
            label: "Cotton Canvas",
            summary: "Natural fibre canvas offering breathable durability.",
          },
          {
            label: "Heavy-Duty Weave",
            summary: "Reinforced duck cloth engineered for high-traffic wear.",
          },
        ],
      },
      {
        label: "Microfiber Suede (Microsuede)",
        summary: "Supple faux suede surfaces designed for effortless maintenance.",
        children: [
          {
            label: "Polyester Microsuede",
            summary: "Velvety polyester microfibre with excellent colourfastness.",
          },
          {
            label: "Stain-Resistant Microsuede",
            summary: "Protective finish repels spills for family-friendly upholstery.",
          },
        ],
      },
      {
        label: "Crypton Fabric",
        summary: "High-performance upholstery engineered with integrated stain and moisture barriers.",
        children: [
          {
            label: "Performance Upholstery Fabric",
            summary: "Crypton-treated textile delivering superior cleanability and durability.",
          },
        ],
      },
      {
        label: "Olefin",
        summary: "Solution-dyed fibres resisting fading, mildew, and moisture for indoor-outdoor versatility.",
      },
      {
        label: "Polypropylene Upholstery Fabric",
        summary: "Lightweight, resilient fibres crafted for active living spaces and contract seating.",
      },
    ],
  },
  {
    id: "interior-furnishings",
    label: "Interior Furnishings",
    description: "Elevated fabrications for drapery, soft furnishings, cushions, and bespoke interior accents.",
    items: [
      {
        label: "Sheer Fabrics",
        summary: "Airy, light-filtering sheers lending softness and movement to window treatments.",
        children: [
          {
            label: "Voile (cotton/poly)",
            summary: "Fine plain-weave voile blending cotton breathability with polyester resilience.",
          },
          {
            label: "Organza (silk/polyester)",
            summary: "Crisp organza delivering structured translucency for layered drapery.",
          },
          {
            label: "Chiffon (silk/polyester)",
            summary: "Fluid chiffon introducing graceful flow to luxe interior treatments.",
          },
        ],
      },
      {
        label: "Linen",
        summary: "Natural fibres celebrated for their organic texture and relaxed drape.",
        children: [
          {
            label: "Pure Linen",
            summary: "100% linen offering breathable elegance with subtle slub character.",
          },
          {
            label: "Linen Blends (cotton/linen, poly/linen)",
            summary: "Blended linens balancing resilience with effortless drape.",
          },
        ],
      },
      {
        label: "Cotton Drapery Fabric",
        summary: "Versatile cotton constructions suitable for custom drapery and light upholstery accents.",
        children: [
          {
            label: "Printed Cotton",
            summary: "Designer prints on cotton grounds for statement windows.",
          },
          {
            label: "Plain-Weave Cotton",
            summary: "Classic plain-weave cotton ideal for tailored treatments.",
          },
          {
            label: "Sateen Finish",
            summary: "Smooth sateen-weave cotton adding lustre to drapery panels.",
          },
        ],
      },
      {
        label: "Silk",
        summary: "Luxurious silk cloths delivering luminous drape and refined hand-feel.",
        children: [
          {
            label: "Silk Taffeta",
            summary: "Crisp taffeta for formal drapes with sculpted volume.",
          },
          {
            label: "Silk Dupioni",
            summary: "Textural dupioni showcasing natural strié for bespoke interiors.",
          },
          {
            label: "Silk Satin",
            summary: "High-sheen satin weave enhancing opulent settings.",
          },
        ],
      },
      {
        label: "Polyester & Poly-Cotton Blends",
        summary: "High-performance blends balancing durability, drape, and easy care.",
        children: [
          {
            label: "Plain Weave",
            summary: "Smooth plain-weave construction for everyday drapery.",
          },
          {
            label: "Jacquard Weave",
            summary: "Patterned jacquard blends offering depth without added weight.",
          },
          {
            label: "Satin Finish",
            summary: "Satin-surfaced blends delivering subtle sheen and fluidity.",
          },
        ],
      },
      {
        label: "Blackout Fabrics",
        summary: "Light-control textiles engineered for bedrooms, cinemas, and hospitality suites.",
        children: [
          {
            label: "Triple-Weave Polyester",
            summary: "Densely woven blackout achieving substantial light blocking without coatings.",
          },
          {
            label: "Foam-Backed Polyester",
            summary: "Foam backing adds insulation and enhanced blackout performance.",
          },
          {
            label: "Coated Textiles",
            summary: "Acrylic-coated substrates delivering near-total light exclusion.",
          },
        ],
      },
      {
        label: "Velvet (Drapery Weight)",
        summary: "Sumptuous velvets tailored to hang with graceful fullness at the window.",
        children: [
          {
            label: "Cotton Velvet",
            summary: "Soft matte cotton velvet with premium drape.",
          },
          {
            label: "Polyester Velvet",
            summary: "Colourfast polyester velvet for vibrant statement treatments.",
          },
          {
            label: "Silk Velvet",
            summary: "Silk-rich velvet exuding luminous depth and movement.",
          },
        ],
      },
      {
        label: "Damask",
        summary: "Reversible damask weaves elevating interiors with timeless motifs.",
        children: [
          {
            label: "Woven Jacquard Pattern",
            summary: "Traditional damask patterning woven on jacquard looms.",
          },
          {
            label: "Cotton Damask",
            summary: "Matte cotton damask suited to classic dressing.",
          },
          {
            label: "Poly Damask",
            summary: "Durable polyester damask for high-use spaces.",
          },
        ],
      },
      {
        label: "Brocade",
        summary: "Richly embellished brocades bringing couture drama to interiors.",
        children: [
          {
            label: "Silk Brocade",
            summary: "Heritage silk brocade with opulent raised motifs.",
          },
          {
            label: "Polyester Brocade",
            summary: "Accessible brocade styling with easy-care fibres.",
          },
          {
            label: "Metallic-Thread Brocade",
            summary: "Luminous brocade interwoven with metallic yarns.",
          },
        ],
      },
      {
        label: "Tapestry Fabrics",
        summary: "Decorative tapestry constructions featuring narrative jacquard art.",
        children: [
          {
            label: "Jacquard Woven",
            summary: "Classic jacquard tapestry depicting ornate scenes.",
          },
          {
            label: "Cotton Blend",
            summary: "Cotton-rich tapestry balancing softness with structure.",
          },
          {
            label: "Polyester Blend",
            summary: "Durable polyester-blend tapestry suited to lively spaces.",
          },
        ],
      },
      {
        label: "Decorative Upholstery-Weight Blends",
        summary: "Statement textiles combining textured weaves with resilient fibre mixes.",
        children: [
          {
            label: "Mixed Fibers",
            summary: "Multi-fibre blends engineered for balanced drape and endurance.",
          },
          {
            label: "Pattern Weaves",
            summary: "Architectural weaves adding depth to feature upholstery.",
          },
          {
            label: "Stain-Resistant Finishes",
            summary: "Protective finishes safeguarding decorative textiles in daily use.",
          },
        ],
      },
    ],
  },
  {
    id: "costume-theatrical",
    label: "Costume & Theatrical",
    description: "Textiles curated for stagecraft, couture costuming, and dramatic visual storytelling.",
    items: [
      {
        label: "Silk",
        summary: "Rich silk textiles delivering lustre and drama to costume silhouettes.",
        children: [
          {
            label: "Satin",
            summary: "Glossy silk satin for fluid gowns and stage-ready drape.",
          },
          {
            label: "Taffeta",
            summary: "Crisp silk taffeta lending sculptural volume to couture shapes.",
          },
          {
            label: "Dupioni",
            summary: "Slubbed silk dupioni offering textured elegance for period costuming.",
          },
        ],
      },
      {
        label: "Satin",
        summary: "Satin weaves spanning fibre types for a spectrum of sheen and stretch.",
        children: [
          {
            label: "Polyester Satin",
            summary: "Durable polyester satin ideal for large productions.",
          },
          {
            label: "Silk Satin",
            summary: "Premium silk satin with luminous surface for high-end costumes.",
          },
          {
            label: "Stretch Satin",
            summary: "Elastane-infused satin granting flexibility for dance and performance wear.",
          },
        ],
      },
      {
        label: "Velvet",
        summary: "Pile fabrics delivering opulent depth and stage presence.",
        children: [
          {
            label: "Cotton Velvet",
            summary: "Natural velvet with rich matte pile.",
          },
          {
            label: "Rayon Velvet",
            summary: "Viscose-rich velvet with luminous sheen.",
          },
          {
            label: "Stretch Velvet",
            summary: "Velvet blended with spandex for movement-friendly costumes.",
          },
        ],
      },
      {
        label: "Brocade",
        summary: "Intricately woven brocades suited to regal and period ensembles.",
        children: [
          {
            label: "Silk Brocade",
            summary: "Heritage silk brocade with ornate motifs.",
          },
          {
            label: "Polyester Brocade",
            summary: "Durable polyester brocade balancing cost and opulence.",
          },
          {
            label: "Metallic-Thread Brocade",
            summary: "Brocade accented with sparkling metallic yarns for stage impact.",
          },
        ],
      },
      {
        label: "Organza",
        summary: "Structured sheer organza for ethereal layering and dramatic silhouettes.",
        children: [
          {
            label: "Silk Organza",
            summary: "Delicate silk organza delivering crisp, weightless volume.",
          },
          {
            label: "Polyester Organza",
            summary: "Resilient organza ideal for high-use productions.",
          },
          {
            label: "Crystal Organza",
            summary: "High-shine organza producing shimmering highlights under stage lighting.",
          },
        ],
      },
      {
        label: "Chiffon",
        summary: "Sheer chiffon fabrics bringing movement and softness to performance wear.",
        children: [
          {
            label: "Silk Chiffon",
            summary: "Fine silk chiffon floating effortlessly with each step.",
          },
          {
            label: "Polyester Chiffon",
            summary: "Durable chiffon that maintains flow through repeated performances.",
          },
          {
            label: "Georgette Chiffon",
            summary: "Slightly textured chiffon offering additional body and coverage.",
          },
        ],
      },
      {
        label: "Tulle",
        summary: "Netting fabrics for tutus, veils, and layered fantasy costuming.",
        children: [
          {
            label: "Nylon Tulle",
            summary: "Classic nylon tulle with crisp body for structured silhouettes.",
          },
          {
            label: "Polyester Tulle",
            summary: "Resilient polyester tulle suited to repeated use.",
          },
          {
            label: "Stretch Tulle",
            summary: "Elastane-blend tulle offering flexibility for dance costuming.",
          },
        ],
      },
      {
        label: "Muslin / Calico",
        summary: "Foundational cotton cloths for mock-ups, base layers, and dye work.",
        children: [
          {
            label: "Cotton Muslin",
            summary: "Lightweight muslin used for draping and soft costume elements.",
          },
          {
            label: "Calico for Mock-Ups",
            summary: "Sturdy calico ideal for pattern testing and fittings.",
          },
          {
            label: "Bleached/Unbleached Versions",
            summary: "Neutral calico options ready for custom dyeing or distressing.",
          },
        ],
      },
      {
        label: "Wool & Wool Blends",
        summary: "Tailoring woollens providing structure and authenticity to costumes.",
        children: [
          {
            label: "Suiting Wool",
            summary: "Smooth wool suiting for period garments and uniforms.",
          },
          {
            label: "Gabardine",
            summary: "Tightly woven gabardine offering durable drape.",
          },
          {
            label: "Twill",
            summary: "Twill weave wool blends balancing strength with flexibility.",
          },
        ],
      },
      {
        label: "Stretch Fabrics",
        summary: "Elastic textiles enabling unrestricted movement for performers.",
        children: [
          {
            label: "Spandex",
            summary: "High-stretch spandex for body-hugging costumes.",
          },
          {
            label: "Lycra",
            summary: "Performance Lycra delivering resilience for active wear.",
          },
          {
            label: "Stretch Jersey",
            summary: "Soft jersey knit with added stretch for comfort.",
          },
        ],
      },
      {
        label: "Specialty Fabrics",
        summary: "Statement textiles that sparkle, shimmer, and transform under lights.",
        children: [
          {
            label: "Lamé",
            summary: "Metallic lamé delivering high-shine stage impact.",
          },
          {
            label: "Sequins",
            summary: "Sequin fabrics catching and reflecting light in motion.",
          },
          {
            label: "Faux Fur",
            summary: "Plush faux fur for dramatic trims and character costumes.",
          },
        ],
      },
    ],
  },
  {
    id: "marine-upholstery",
    label: "Marine Upholstery",
    description: "Engineered fabrics designed to thrive in marine environments and coastal conditions.",
    items: [
      {
        label: "Marine Vinyl",
        summary: "Heavy-duty marine vinyls engineered to withstand salt, sun, and spray.",
        children: [
          {
            label: "PVC-Coated",
            summary: "PVC-coated vinyl delivering robust protection and easy cleaning.",
          },
          {
            label: "UV-Stabilised",
            summary: "UV-stabilised vinyl resisting colour fade under intense sunlight.",
          },
          {
            label: "Mildew-Resistant",
            summary: "Anti-fungal treated vinyl guarding against mould growth.",
          },
        ],
      },
      {
        label: "Solution-Dyed Acrylic",
        summary: "Premium acrylic textiles renowned for colourfast marine performance.",
        children: [
          {
            label: "Sunbrella",
            summary: "Industry-leading Sunbrella fabrics built for lasting outdoor colour.",
          },
          {
            label: "Outdura",
            summary: "Outdura acrylic delivering rugged durability for marine seating.",
          },
          {
            label: "Dickson",
            summary: "Dickson marine acrylic balancing style with technical performance.",
          },
        ],
      },
      {
        label: "Polyester Canvas",
        summary: "Versatile polyester canvases tailored for covers, biminis, and enclosures.",
        children: [
          {
            label: "Waterproof",
            summary: "Fully waterproof canvas for demanding marine protection.",
          },
          {
            label: "Water-Repellent",
            summary: "Water-repellent finish shedding spray while remaining breathable.",
          },
          {
            label: "Acrylic-Coated",
            summary: "Acrylic-coated canvas adding extra barrier against the elements.",
          },
        ],
      },
      {
        label: "Mesh Fabrics",
        summary: "Marine mesh textiles promoting airflow and rapid drying.",
        children: [
          {
            label: "PVC-Coated Mesh",
            summary: "PVC mesh providing structure and resilience for seating.",
          },
          {
            label: "Polyester Mesh",
            summary: "Lightweight polyester mesh for breathable panels.",
          },
          {
            label: "Breathable Mesh",
            summary: "Open-weave mesh optimised for ventilation in marine covers.",
          },
        ],
      },
      {
        label: "Foam-Backed Textiles",
        summary: "Comfort-enhancing laminates combining cushioning with protective facings.",
        children: [
          {
            label: "Vinyl-Backed Foam",
            summary: "Foam laminated to vinyl for plush, water-resistant seating.",
          },
          {
            label: "Neoprene-Laminated Fabric",
            summary: "Neoprene-backed textiles offering shock absorption and grip.",
          },
          {
            label: "PU Foam Laminates",
            summary: "Polyurethane foam laminates delivering comfort in marine cabins.",
          },
        ],
      },
      {
        label: "Clear Vinyl (for windows/covers)",
        summary: "Crystal-clear marine vinyls maintaining visibility while shielding from weather.",
        children: [
          {
            label: "Strataglass",
            summary: "Strataglass panels prized for optical clarity and scratch resistance.",
          },
          {
            label: "Isinglass",
            summary: "Flexible isinglass for classic enclosures and roll-up windows.",
          },
          {
            label: "Flexible PVC",
            summary: "Clear PVC sheets offering economical marine window solutions.",
          },
        ],
      },
      {
        label: "Olefin (Polypropylene)",
        summary: "Olefin fibres delivering lightweight, quick-dry marine seating solutions.",
        children: [
          {
            label: "Fade-Resistant",
            summary: "Solution-dyed olefin resisting UV fading on deck.",
          },
          {
            label: "Quick-Dry",
            summary: "Rapid-dry olefin ideal for splash zones.",
          },
          {
            label: "Lightweight Marine Use",
            summary: "Featherweight olefin for easy handling and installation.",
          },
        ],
      },
      {
        label: "Coated Technical Fabrics",
        summary: "Advanced coated textiles engineered for extreme marine service.",
        children: [
          {
            label: "Acrylic-Coated Polyester",
            summary: "Acrylic-coated polyester providing abrasion and weather resistance.",
          },
          {
            label: "PU-Coated Fabrics",
            summary: "Polyurethane coatings delivering flexible waterproof barriers.",
          },
          {
            label: "PVC-Coated Textiles",
            summary: "PVC-coated fabrics offering rugged defence against harsh conditions.",
          },
        ],
      },
    ],
  },
];

const state = {
  activeCategoryId: null,
  activeItemId: null,
  dropdownButtons: new Map(),
};

const selectors = {
  menu: document.getElementById("specialityMenu"),
  resultsHeading: document.getElementById("resultsHeading"),
  resultsCount: document.getElementById("resultsCount"),
  productGrid: document.getElementById("productGrid"),
  emptyState: document.getElementById("emptyState"),
  searchForm: document.getElementById("specialitySearchForm"),
  searchInput: document.getElementById("specialitySearchInput"),
  clearSearch: document.getElementById("clearSearchButton"),
  searchStatus: document.getElementById("searchStatus"),
};

function createIdFromLabel(label) {
  return label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function normalizeItem(rawItem, collection, parentMeta = null) {
  const isObject = typeof rawItem === "object" && rawItem !== null;
  const label = isObject ? rawItem.label : rawItem;
  const baseIdSource = parentMeta ? parentMeta.id : collection.id;
  const id =
    isObject && rawItem.id
      ? rawItem.id
      : `${baseIdSource}-${createIdFromLabel(label)}`;
  const focusLabel = (isObject && rawItem.focus) || label;
  const description =
    (isObject && rawItem.summary) ||
    (parentMeta
      ? `${focusLabel} developed for ${parentMeta.label.toLowerCase()} applications.`
      : `${label} textiles curated for ${collection.label.toLowerCase()} projects.`);

  const itemMeta = {
    id,
    label,
    categoryId: collection.id,
    categoryLabel: collection.label,
    description,
    specs: null,
    children: [],
    parentLabel: parentMeta ? parentMeta.label : null,
  };

  const children =
    isObject && Array.isArray(rawItem.children) ? rawItem.children : null;

  if (children && children.length) {
    itemMeta.children = children.map((child) =>
      normalizeItem(child, collection, itemMeta)
    );
  } else {
    const specs =
      (isObject && rawItem.specs) || [
        `Variant focus: ${focusLabel}`,
        `Application: ${parentMeta ? parentMeta.label : collection.label}`,
        "Samples: Join the priority list to receive swatch updates",
      ];
    itemMeta.specs = specs;
  }

  return itemMeta;
}

function buildCollections() {
  return specialityCollections.map((collection) => {
    const normalizedItems = (collection.items || []).map((item) =>
      normalizeItem(item, collection)
    );

    const leaves = [];
    const collectLeaves = (items) => {
      items.forEach((item) => {
        if (item.children && item.children.length) {
          collectLeaves(item.children);
        } else {
          leaves.push(item);
        }
      });
    };

    collectLeaves(normalizedItems);

    return {
      ...collection,
      items: normalizedItems,
      leaves,
    };
  });
}

const collections = buildCollections();
const TOTAL_PREVIEW_COUNT = collections.reduce(
  (count, collection) => count + collection.leaves.length,
  0
);

function createSpecialityItem(collection) {
  const item = document.createElement("div");
  item.className = "speciality-item";
  item.dataset.categoryId = collection.id;

  const triggerId = `${collection.id}-trigger`;
  const listId = `${collection.id}-menu`;

  const trigger = document.createElement("button");
  trigger.className = "speciality-trigger";
  trigger.type = "button";
  trigger.id = triggerId;
  trigger.setAttribute("aria-expanded", "false");
  trigger.setAttribute("aria-controls", listId);
  trigger.innerHTML = `
    <span>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M12 7v10"></path>
        <path d="M7 12h10"></path>
      </svg>
      ${collection.label}
    </span>
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `;

  const dropdown = document.createElement("div");
  dropdown.className = "speciality-dropdown";
  dropdown.id = listId;
  dropdown.setAttribute("role", "menu");

  const list = document.createElement("ul");

  collection.items.forEach((itemMeta) => {
    list.appendChild(buildMenuEntry(itemMeta));
  });

  dropdown.appendChild(list);
  item.appendChild(trigger);
  item.appendChild(dropdown);

  setupSpecialityTrigger(item, trigger);

  return item;
}

function buildMenuEntry(itemMeta) {
  const listItem = document.createElement("li");

  if (itemMeta.children && itemMeta.children.length) {
    listItem.classList.add("has-children");

    const parentButton = document.createElement("button");
    parentButton.type = "button";
    parentButton.className = "dropdown-link parent-link";
    parentButton.setAttribute("aria-haspopup", "true");
    parentButton.setAttribute("aria-expanded", "false");
    parentButton.innerHTML = `
      <span>${itemMeta.label}</span>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    `;

    parentButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const siblingMenus = listItem.parentElement?.querySelectorAll(
        ".has-children.sub-open"
      );
      siblingMenus?.forEach((sibling) => {
        if (sibling !== listItem) {
          sibling.classList.remove("sub-open");
          sibling
            .querySelector(".parent-link")
            ?.setAttribute("aria-expanded", "false");
        }
      });
      const isOpen = listItem.classList.toggle("sub-open");
      parentButton.setAttribute("aria-expanded", String(isOpen));
    });

    listItem.appendChild(parentButton);

    const subList = document.createElement("ul");
    subList.className = "sub-dropdown";

    itemMeta.children.forEach((childMeta) => {
      const childItem = document.createElement("li");
      const childButton = createLeafButton(childMeta);
      childButton.classList.add("sub-link");
      childItem.appendChild(childButton);
      subList.appendChild(childItem);
    });

    listItem.appendChild(subList);

    if (window.matchMedia && window.matchMedia("(hover: hover)").matches) {
      listItem.addEventListener("mouseenter", () => {
        listItem.classList.add("sub-open");
        parentButton.setAttribute("aria-expanded", "true");
      });

      listItem.addEventListener("mouseleave", () => {
        listItem.classList.remove("sub-open");
        parentButton.setAttribute("aria-expanded", "false");
      });
    }
  } else {
    listItem.appendChild(createLeafButton(itemMeta));
  }

  return listItem;
}

function createLeafButton(itemMeta) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "dropdown-link";
  button.dataset.categoryId = itemMeta.categoryId;
  button.dataset.itemId = itemMeta.id;
  button.textContent = itemMeta.label;

  button.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    handleLeafSelection(itemMeta.categoryId, itemMeta.id);
  });

  state.dropdownButtons.set(itemMeta.id, button);
  return button;
}

function setupSpecialityTrigger(container, trigger) {
  const closeOthers = () => {
    document.querySelectorAll(".speciality-item.speciality-open").forEach((el) => {
      if (el !== container) {
        el.classList.remove("speciality-open");
        const btn = el.querySelector(".speciality-trigger");
        btn?.setAttribute("aria-expanded", "false");
      }
    });
  };

  trigger.addEventListener("click", (event) => {
    event.preventDefault();
    const isOpen = container.classList.toggle("speciality-open");
    if (isOpen) {
      closeOthers();
    }
    trigger.setAttribute("aria-expanded", String(isOpen));
  });

  if (window.matchMedia("(hover: hover)").matches) {
    container.addEventListener("mouseenter", () => {
      closeOthers();
      container.classList.add("speciality-open");
      trigger.setAttribute("aria-expanded", "true");
    });
    container.addEventListener("mouseleave", () => {
      container.classList.remove("speciality-open");
      trigger.setAttribute("aria-expanded", "false");
    });
  }
}

function handleLeafSelection(categoryId, itemId) {
  const collection = collections.find((col) => col.id === categoryId);
  if (!collection) return;
  const selectedItem = collection.leaves.find((item) => item.id === itemId);
  if (!selectedItem) return;

  state.activeCategoryId = categoryId;
  state.activeItemId = itemId;

  selectors.searchInput.value = "";
  selectors.searchStatus.textContent = "";

  highlightActiveLeaf(itemId);
  const container = document.querySelector(
    `.speciality-item[data-category-id="${categoryId}"]`
  );
  if (container) {
    container.classList.remove("speciality-open");
    const trigger = container.querySelector(".speciality-trigger");
    trigger?.setAttribute("aria-expanded", "false");
    container.querySelectorAll(".has-children.sub-open").forEach((entry) => {
      entry.classList.remove("sub-open");
      entry
        .querySelector(".parent-link")
        ?.setAttribute("aria-expanded", "false");
    });
  }
  renderProducts([selectedItem], {
    heading: `${collection.label} - ${selectedItem.label}`,
    context: "selection",
  });
}

function highlightActiveLeaf(itemId) {
  state.dropdownButtons.forEach((button, key) => {
    if (key === itemId) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}

function createProductCard(item) {
  const card = document.createElement("article");
  card.className = "product-card";

  const wrapper = document.createElement("div");
  wrapper.className = "product-card-content";

  const headline = document.createElement("div");
  headline.className = "product-card-headline";

  const status = document.createElement("span");
  status.className = "product-status coming-soon";
  status.textContent = "Coming Soon";

  const category = document.createElement("span");
  category.className = "product-category";
  category.textContent = item.categoryLabel;

  const title = document.createElement("h3");
  title.className = "product-title";
  title.textContent = item.label;

  const summary = document.createElement("p");
  summary.className = "product-summary";
  summary.textContent = item.description;

  const specsTitle = document.createElement("h4");
  specsTitle.className = "product-specs-title";
  specsTitle.textContent = "Specifications";

  const specsList = document.createElement("ul");
  specsList.className = "product-specs";
  item.specs.forEach((spec) => {
    const li = document.createElement("li");
    li.textContent = spec;
    specsList.appendChild(li);
  });

  headline.appendChild(status);
  headline.appendChild(category);
  headline.appendChild(title);

  wrapper.appendChild(headline);
  wrapper.appendChild(summary);
  wrapper.appendChild(specsTitle);
  wrapper.appendChild(specsList);

  card.appendChild(wrapper);
  return card;
}

function renderProducts(items, { heading, context }) {
  selectors.productGrid.innerHTML = "";
  selectors.emptyState.classList.add("hidden");

  items.forEach((item) => {
    const card = createProductCard(item);
    selectors.productGrid.appendChild(card);
  });

  selectors.resultsHeading.textContent = heading;
  selectors.resultsCount.textContent = `Showing ${items.length} of ${TOTAL_PREVIEW_COUNT} previews`;

  if (context === "search") {
    selectors.resultsHeading.setAttribute("data-context", "search");
  } else {
    selectors.resultsHeading.removeAttribute("data-context");
  }
}

function renderEmptyState(message) {
  selectors.productGrid.innerHTML = "";
  selectors.resultsHeading.textContent = "Select a textile focus to view product cards";
  selectors.resultsCount.textContent = `Showing 0 of ${TOTAL_PREVIEW_COUNT} previews`;
  selectors.emptyState.classList.remove("hidden");
  if (message) {
    selectors.emptyState.textContent = message;
  } else {
    selectors.emptyState.textContent = "Choose a speciality segment or search to preview the upcoming collections.";
  }
}

function handleSearch(event) {
  event.preventDefault();
  const query = selectors.searchInput.value.trim();

  if (!query) {
    selectors.searchStatus.textContent = "";
    if (state.activeItemId) {
      handleLeafSelection(state.activeCategoryId, state.activeItemId);
    } else {
      renderEmptyState();
    }
    return;
  }

  const results = [];
  const lowerQuery = query.toLowerCase();

  collections.forEach((collection) => {
    collection.leaves.forEach((item) => {
      const haystack = `${item.label} ${collection.label} ${item.description} ${item.specs.join(" ")}`.toLowerCase();
      if (haystack.includes(lowerQuery)) {
        results.push(item);
      }
    });
  });

  if (results.length) {
    selectors.searchStatus.textContent = `Found ${results.length} preview${results.length === 1 ? "" : "s"} for "${query}".`;
    renderProducts(results, {
      heading: `Search results for "${query}"`,
      context: "search",
    });
  } else {
    selectors.searchStatus.textContent = `No previews matched "${query}".`;
    renderEmptyState(`No speciality textiles matched "${query}". Try a different keyword.`);
  }
}

function handleClearSearch() {
  selectors.searchInput.value = "";
  selectors.searchStatus.textContent = "";
  if (state.activeItemId) {
    handleLeafSelection(state.activeCategoryId, state.activeItemId);
  } else {
    renderEmptyState();
  }
}

function setupSearch() {
  selectors.searchForm?.addEventListener("submit", handleSearch);
  selectors.clearSearch?.addEventListener("click", handleClearSearch);
}

function setupOutsideClicks() {
  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    if (!target.closest(".speciality-item")) {
      document.querySelectorAll(".speciality-item.speciality-open").forEach((item) => {
        item.classList.remove("speciality-open");
        const trigger = item.querySelector(".speciality-trigger");
        trigger?.setAttribute("aria-expanded", "false");
        item.querySelectorAll(".has-children.sub-open").forEach((entry) => {
          entry.classList.remove("sub-open");
          entry
            .querySelector(".parent-link")
            ?.setAttribute("aria-expanded", "false");
        });
      });
    }
  });
}

function setupThemeToggle() {
  const storedTheme = localStorage.getItem("booisha-theme");
  if (storedTheme === "dark") {
    document.body.classList.add("dark-theme");
    const themeBtn = document.querySelector(".theme-btn");
    themeBtn?.setAttribute("data-tooltip", "Switch to Light Mode");
    themeBtn?.setAttribute("aria-pressed", "true");
  }

  const arrowToggle = document.querySelector(".arrow-toggle");
  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const themeMenu = document.getElementById("themeMenu");
    if (!themeMenu) return;
    if (!themeMenu.contains(target) && target !== arrowToggle && !arrowToggle?.contains(target)) {
      themeMenu.classList.remove("show");
      arrowToggle?.classList.remove("active");
      arrowToggle?.setAttribute("aria-expanded", "false");
    }
  });
}

function setupNavDropdown() {
  const dropdown = document.querySelector(".nav-dropdown");
  if (!dropdown) return;
  const trigger = dropdown.querySelector(":scope > a");
  if (!trigger) return;

  const mq = window.matchMedia("(max-width: 800px)");

  const toggleDropdown = (event) => {
    if (!mq.matches) return;
    event.preventDefault();
    const isOpen = dropdown.classList.toggle("open");
    trigger.setAttribute("aria-expanded", String(isOpen));
  };

  trigger.addEventListener("click", toggleDropdown);

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    if (!mq.matches) return;
    if (!dropdown.contains(target)) {
      dropdown.classList.remove("open");
      trigger.setAttribute("aria-expanded", "false");
    }
  });
}

function initializeMenu() {
  if (!selectors.menu) return;
  state.dropdownButtons.clear();
  const fragment = document.createDocumentFragment();
  collections.forEach((collection) => {
    fragment.appendChild(createSpecialityItem(collection));
  });
  selectors.menu.appendChild(fragment);
}

function init() {
  initializeMenu();
  setupSearch();
  setupOutsideClicks();
  setupThemeToggle();
  setupNavDropdown();
  renderEmptyState();
}

document.addEventListener("DOMContentLoaded", init);

function toggleThemeMenu() {
  const menu = document.getElementById("themeMenu");
  const arrow = document.querySelector(".arrow-toggle");
  if (!menu || !arrow) return;
  const isOpen = menu.classList.toggle("show");
  arrow.classList.toggle("active", isOpen);
  arrow.setAttribute("aria-expanded", String(isOpen));
}

function toggleTheme() {
  const themeBtn = document.querySelector(".theme-btn");
  const body = document.body;
  if (!themeBtn) return;
  const isDark = body.classList.toggle("dark-theme");
  themeBtn.setAttribute("aria-pressed", String(isDark));
  themeBtn.setAttribute(
    "data-tooltip",
    isDark ? "Switch to Light Mode" : "Switch to Dark Mode"
  );
  localStorage.setItem("booisha-theme", isDark ? "dark" : "light");

  const themeMenu = document.getElementById("themeMenu");
  const arrow = document.querySelector(".arrow-toggle");
  themeMenu?.classList.remove("show");
  arrow?.classList.remove("active");
  arrow?.setAttribute("aria-expanded", "false");
}

window.toggleThemeMenu = toggleThemeMenu;
window.toggleTheme = toggleTheme;
