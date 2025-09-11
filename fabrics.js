// Complete Fabric Product Database - Add this to your fabrics.js file

// Product Database
const fabricProducts = [
  // Silk Fabrics (34 products)
  {
    name: "Pure Mulberry Silk",
    category: "Silk",
    description: "Premium quality mulberry silk with natural sheen",
    specs: ["100% Silk", 'Width: 44"', "GSM: 80"],
    badges: ["premium"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Heavy Mulberry Silk",
    category: "Silk",
    description: "Thicker mulberry silk perfect for luxury garments",
    specs: ["100% Silk", 'Width: 44"', "GSM: 120"],
    badges: ["premium"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Mulberry Silk Crepe",
    category: "Silk",
    description: "Textured mulberry silk with elegant drape",
    specs: ["100% Silk", 'Width: 44"', "Crepe Weave"],
    badges: ["premium"],
    availability: "Limited Quantity",
  },
  {
    name: "Mulberry Silk Georgette",
    category: "Silk",
    description: "Lightweight flowing mulberry silk georgette",
    specs: ["100% Silk", 'Width: 44"', "GSM: 60"],
    badges: ["premium"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Mulberry Silk Chiffon",
    category: "Silk",
    description: "Ultra-light transparent mulberry silk",
    specs: ["100% Silk", 'Width: 44"', "GSM: 50"],
    badges: ["premium"],
    availability: "Limited Quantity",
  },
  {
    name: "Mulberry Silk Satin",
    category: "Silk",
    description: "Glossy satin weave mulberry silk",
    specs: ["100% Silk", 'Width: 44"', "Satin Weave"],
    badges: ["premium"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Mulberry Silk Dupioni",
    category: "Silk",
    description: "Textured dupioni with slub texture",
    specs: ["100% Silk", 'Width: 44"', "Dupioni Weave"],
    badges: ["premium"],
    availability: "Limited Quantity",
  },
  {
    name: "Mulberry Silk Organza",
    category: "Silk",
    description: "Crisp lightweight organza fabric",
    specs: ["100% Silk", 'Width: 44"', "GSM: 45"],
    badges: ["premium"],
    availability: "Available for Bulk Orders",
  },

  {
    name: "Golden Tussar Silk",
    category: "Silk",
    description: "Wild silk with natural golden sheen",
    specs: ["100% Tussar Silk", 'Width: 44"', "GSM: 95"],
    badges: ["premium"],
    availability: "Limited Quantity",
  },
  {
    name: "Brown Tussar Silk",
    category: "Silk",
    description: "Natural brown tussar with rich texture",
    specs: ["100% Tussar Silk", 'Width: 44"', "GSM: 90"],
    badges: ["premium"],
    availability: "Limited Quantity",
  },
  {
    name: "Tussar Silk Ghicha",
    category: "Silk",
    description: "Textured tussar ghicha weave",
    specs: ["100% Tussar Silk", 'Width: 42"', "Handwoven"],
    badges: ["premium"],
    availability: "Limited Quantity",
  },
  {
    name: "Tussar Silk Matka",
    category: "Silk",
    description: "Coarse textured tussar matka",
    specs: ["100% Tussar Silk", 'Width: 44"', "GSM: 110"],
    badges: ["premium"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Tussar Silk Printed",
    category: "Silk",
    description: "Block printed tussar silk fabric",
    specs: ["100% Tussar Silk", 'Width: 44"', "Block Print"],
    badges: ["premium"],
    availability: "Limited Quantity",
  },
  {
    name: "Tussar Silk Plain",
    category: "Silk",
    description: "Plain weave tussar silk",
    specs: ["100% Tussar Silk", 'Width: 44"', "GSM: 85"],
    badges: ["premium"],
    availability: "Available for Bulk Orders",
  },

  {
    name: "Chanderi Silk Traditional",
    category: "Silk",
    description: "Traditional chanderi with zari borders",
    specs: ["Silk-Cotton Mix", 'Width: 44"', "Traditional Weave"],
    badges: ["premium"],
    availability: "Limited Quantity",
  },
  {
    name: "Chanderi Silk Plain",
    category: "Silk",
    description: "Plain chanderi silk fabric",
    specs: ["Silk-Cotton Mix", 'Width: 44"', "GSM: 70"],
    badges: ["premium"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Chanderi Silk Printed",
    category: "Silk",
    description: "Block printed chanderi silk",
    specs: ["Silk-Cotton Mix", 'Width: 44"', "Block Print"],
    badges: ["premium"],
    availability: "Limited Quantity",
  },
  {
    name: "Chanderi Silk Handloom",
    category: "Silk",
    description: "Handwoven chanderi silk",
    specs: ["Silk-Cotton Mix", 'Width: 42"', "Handloom"],
    badges: ["premium"],
    availability: "Limited Quantity",
  },

  {
    name: "Banarasi Silk Brocade",
    category: "Silk",
    description: "Exquisite brocade with gold zari work",
    specs: ["Silk with Zari", 'Width: 44"', "Handwoven"],
    badges: ["premium", "new"],
    availability: "Limited Quantity",
  },
  {
    name: "Banarasi Silk Plain",
    category: "Silk",
    description: "Plain banarasi silk base",
    specs: ["100% Silk", 'Width: 44"', "GSM: 100"],
    badges: ["premium"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Banarasi Silk Jamawar",
    category: "Silk",
    description: "Intricate jamawar pattern",
    specs: ["Silk with Zari", 'Width: 44"', "Jamawar"],
    badges: ["premium"],
    availability: "Limited Quantity",
  },
  {
    name: "Banarasi Silk Tissue",
    category: "Silk",
    description: "Lightweight tissue banarasi",
    specs: ["Silk with Zari", 'Width: 44"', "Tissue Weave"],
    badges: ["premium"],
    availability: "Limited Quantity",
  },
  {
    name: "Banarasi Silk Tanchoi",
    category: "Silk",
    description: "Fine tanchoi weave",
    specs: ["100% Silk", 'Width: 44"', "Tanchoi"],
    badges: ["premium"],
    availability: "Limited Quantity",
  },

  {
    name: "Kanjivaram Silk Traditional",
    category: "Silk",
    description: "Pure kanjivaram with temple borders",
    specs: ["100% Silk", 'Width: 44"', "Traditional"],
    badges: ["premium"],
    availability: "Limited Quantity",
  },
  {
    name: "Kanjivaram Silk Wedding",
    category: "Silk",
    description: "Heavy wedding kanjivaram",
    specs: ["Silk with Zari", 'Width: 44"', "GSM: 150"],
    badges: ["premium"],
    availability: "Limited Quantity",
  },
  {
    name: "Kanjivaram Silk Soft",
    category: "Silk",
    description: "Soft daily wear kanjivaram",
    specs: ["100% Silk", 'Width: 44"', "GSM: 90"],
    badges: ["premium"],
    availability: "Available for Bulk Orders",
  },

  {
    name: "Mysore Silk Crepe",
    category: "Silk",
    description: "Fine mysore silk crepe",
    specs: ["100% Silk", 'Width: 44"', "GSM: 80"],
    badges: ["premium"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Mysore Silk Georgette",
    category: "Silk",
    description: "Flowing mysore georgette",
    specs: ["100% Silk", 'Width: 44"', "GSM: 60"],
    badges: ["premium"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Mysore Silk Plain",
    category: "Silk",
    description: "Plain weave mysore silk",
    specs: ["100% Silk", 'Width: 44"', "GSM: 85"],
    badges: ["premium"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Mysore Silk Printed",
    category: "Silk",
    description: "Printed mysore silk fabric",
    specs: ["100% Silk", 'Width: 44"', "Digital Print"],
    badges: ["premium", "new"],
    availability: "Available for Bulk Orders",
  },

  {
    name: "Eri Silk Natural",
    category: "Silk",
    description: "Natural eri silk fabric",
    specs: ["100% Eri Silk", 'Width: 40"', "GSM: 100"],
    badges: ["eco"],
    availability: "Limited Quantity",
  },
  {
    name: "Eri Silk Spun",
    category: "Silk",
    description: "Spun eri silk yarn fabric",
    specs: ["100% Eri Silk", 'Width: 42"', "Spun"],
    badges: ["eco"],
    availability: "Limited Quantity",
  },

  {
    name: "Muga Silk Natural",
    category: "Silk",
    description: "Golden muga silk from Assam",
    specs: ["100% Muga Silk", 'Width: 40"', "GSM: 90"],
    badges: ["premium"],
    availability: "Limited Quantity",
  },
  {
    name: "Muga Silk Handloom",
    category: "Silk",
    description: "Handwoven muga silk",
    specs: ["100% Muga Silk", 'Width: 38"', "Handloom"],
    badges: ["premium"],
    availability: "Limited Quantity",
  },

  // Cotton Fabrics (63 products)
  {
    name: "Khadi Cotton White",
    category: "Cotton",
    description: "Pure white handspun khadi",
    specs: ["100% Cotton", 'Width: 36"', "Handspun"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Khadi Cotton Natural",
    category: "Cotton",
    description: "Natural unbleached khadi",
    specs: ["100% Cotton", 'Width: 36"', "Handspun"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Khadi Cotton Colored",
    category: "Cotton",
    description: "Hand-dyed colored khadi",
    specs: ["100% Cotton", 'Width: 36"', "Hand-dyed"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Khadi Cotton Striped",
    category: "Cotton",
    description: "Traditional striped khadi",
    specs: ["100% Cotton", 'Width: 36"', "Striped"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Khadi Cotton Checked",
    category: "Cotton",
    description: "Checked pattern khadi",
    specs: ["100% Cotton", 'Width: 36"', "Checked"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Khadi Cotton Thick",
    category: "Cotton",
    description: "Heavy weight khadi cotton",
    specs: ["100% Cotton", 'Width: 36"', "GSM: 200"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Khadi Cotton Fine",
    category: "Cotton",
    description: "Fine quality thin khadi",
    specs: ["100% Cotton", 'Width: 36"', "GSM: 120"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Khadi Cotton Twill",
    category: "Cotton",
    description: "Twill weave khadi cotton",
    specs: ["100% Cotton", 'Width: 36"', "Twill"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Khadi Cotton Herringbone",
    category: "Cotton",
    description: "Herringbone khadi weave",
    specs: ["100% Cotton", 'Width: 36"', "Herringbone"],
    badges: [],
    availability: "Limited Quantity",
  },
  {
    name: "Khadi Cotton Printed",
    category: "Cotton",
    description: "Block printed khadi cotton",
    specs: ["100% Cotton", 'Width: 36"', "Block Print"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Khadi Cotton Ikat",
    category: "Cotton",
    description: "Ikat woven khadi cotton",
    specs: ["100% Cotton", 'Width: 36"', "Ikat"],
    badges: [],
    availability: "Limited Quantity",
  },
  {
    name: "Khadi Cotton Dobby",
    category: "Cotton",
    description: "Dobby weave khadi",
    specs: ["100% Cotton", 'Width: 36"', "Dobby"],
    badges: [],
    availability: "Available for Bulk Orders",
  },

  {
    name: "Organic Cotton Plain",
    category: "Cotton",
    description: "GOTS certified organic cotton",
    specs: ["100% Organic Cotton", 'Width: 58"', "GSM: 140"],
    badges: ["eco"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Organic Cotton Twill",
    category: "Cotton",
    description: "Organic cotton twill weave",
    specs: ["100% Organic Cotton", 'Width: 58"', "Twill"],
    badges: ["eco"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Organic Cotton Canvas",
    category: "Cotton",
    description: "Heavy organic cotton canvas",
    specs: ["100% Organic Cotton", 'Width: 60"', "GSM: 340"],
    badges: ["eco"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Organic Cotton Voile",
    category: "Cotton",
    description: "Lightweight organic voile",
    specs: ["100% Organic Cotton", 'Width: 56"', "GSM: 80"],
    badges: ["eco"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Organic Cotton Lawn",
    category: "Cotton",
    description: "Fine organic cotton lawn",
    specs: ["100% Organic Cotton", 'Width: 54"', "GSM: 100"],
    badges: ["eco"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Organic Cotton Jersey",
    category: "Cotton",
    description: "Knitted organic cotton jersey",
    specs: ["100% Organic Cotton", 'Width: 60"', "GSM: 160"],
    badges: ["eco"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Organic Cotton Flannel",
    category: "Cotton",
    description: "Brushed organic cotton flannel",
    specs: ["100% Organic Cotton", 'Width: 56"', "GSM: 180"],
    badges: ["eco"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Organic Cotton Denim",
    category: "Cotton",
    description: "Organic cotton denim fabric",
    specs: ["100% Organic Cotton", 'Width: 58"', "GSM: 320"],
    badges: ["eco"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Organic Cotton Corduroy",
    category: "Cotton",
    description: "Organic cotton corduroy",
    specs: ["100% Organic Cotton", 'Width: 56"', "Corduroy"],
    badges: ["eco"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Organic Cotton Sateen",
    category: "Cotton",
    description: "Smooth organic cotton sateen",
    specs: ["100% Organic Cotton", 'Width: 58"', "Sateen"],
    badges: ["eco"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Organic Cotton Chambray",
    category: "Cotton",
    description: "Light organic cotton chambray",
    specs: ["100% Organic Cotton", 'Width: 56"', "GSM: 120"],
    badges: ["eco"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Organic Cotton Oxford",
    category: "Cotton",
    description: "Oxford weave organic cotton",
    specs: ["100% Organic Cotton", 'Width: 58"', "Oxford"],
    badges: ["eco"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Organic Cotton Ripstop",
    category: "Cotton",
    description: "Durable organic ripstop",
    specs: ["100% Organic Cotton", 'Width: 58"', "Ripstop"],
    badges: ["eco"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Organic Cotton Muslin",
    category: "Cotton",
    description: "Soft organic cotton muslin",
    specs: ["100% Organic Cotton", 'Width: 54"', "GSM: 90"],
    badges: ["eco"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Organic Cotton Poplin",
    category: "Cotton",
    description: "Crisp organic cotton poplin",
    specs: ["100% Organic Cotton", 'Width: 56"', "GSM: 130"],
    badges: ["eco"],
    availability: "Available for Bulk Orders",
  },

  {
    name: "Handloom Cotton White",
    category: "Cotton",
    description: "Handwoven white cotton",
    specs: ["100% Cotton", 'Width: 42"', "Handloom"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Handloom Cotton Colored",
    category: "Cotton",
    description: "Hand-dyed handloom cotton",
    specs: ["100% Cotton", 'Width: 42"', "Hand-dyed"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Handloom Cotton Striped",
    category: "Cotton",
    description: "Striped handloom cotton",
    specs: ["100% Cotton", 'Width: 42"', "Striped"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Handloom Cotton Checked",
    category: "Cotton",
    description: "Traditional checked handloom",
    specs: ["100% Cotton", 'Width: 42"', "Checked"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Handloom Cotton Dobby",
    category: "Cotton",
    description: "Dobby weave handloom",
    specs: ["100% Cotton", 'Width: 42"', "Dobby"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Handloom Cotton Textured",
    category: "Cotton",
    description: "Textured handloom cotton",
    specs: ["100% Cotton", 'Width: 42"', "Textured"],
    badges: [],
    availability: "Limited Quantity",
  },
  {
    name: "Handloom Cotton Ikat",
    category: "Cotton",
    description: "Ikat handloom cotton",
    specs: ["100% Cotton", 'Width: 42"', "Ikat"],
    badges: [],
    availability: "Limited Quantity",
  },
  {
    name: "Handloom Cotton Traditional",
    category: "Cotton",
    description: "Traditional handloom weave",
    specs: ["100% Cotton", 'Width: 40"', "Traditional"],
    badges: [],
    availability: "Available for Bulk Orders",
  },

  {
    name: "Cotton Canvas Natural",
    category: "Cotton",
    description: "Natural cotton canvas",
    specs: ["100% Cotton", 'Width: 60"', "GSM: 340"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Cotton Canvas Bleached",
    category: "Cotton",
    description: "White bleached canvas",
    specs: ["100% Cotton", 'Width: 60"', "GSM: 340"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Cotton Canvas Heavy",
    category: "Cotton",
    description: "Heavy duty cotton canvas",
    specs: ["100% Cotton", 'Width: 60"', "GSM: 450"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Cotton Canvas Duck",
    category: "Cotton",
    description: "Duck cotton canvas",
    specs: ["100% Cotton", 'Width: 60"', "Duck Weave"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Cotton Canvas Printed",
    category: "Cotton",
    description: "Printed cotton canvas",
    specs: ["100% Cotton", 'Width: 60"', "Digital Print"],
    badges: ["new"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Cotton Canvas Waxed",
    category: "Cotton",
    description: "Wax coated cotton canvas",
    specs: ["100% Cotton", 'Width: 60"', "Waxed"],
    badges: [],
    availability: "Available for Bulk Orders",
  },

  {
    name: "Cotton Voile White",
    category: "Cotton",
    description: "Sheer white cotton voile",
    specs: ["100% Cotton", 'Width: 56"', "GSM: 80"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Cotton Voile Colored",
    category: "Cotton",
    description: "Dyed cotton voile fabric",
    specs: ["100% Cotton", 'Width: 56"', "GSM: 80"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Cotton Voile Printed",
    category: "Cotton",
    description: "Printed cotton voile",
    specs: ["100% Cotton", 'Width: 56"', "Block Print"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Cotton Voile Embroidered",
    category: "Cotton",
    description: "Embroidered cotton voile",
    specs: ["100% Cotton", 'Width: 56"', "Embroidered"],
    badges: [],
    availability: "Limited Quantity",
  },

  {
    name: "Cotton Lawn Fine",
    category: "Cotton",
    description: "Fine cotton lawn fabric",
    specs: ["100% Cotton", 'Width: 54"', "GSM: 100"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Cotton Lawn Printed",
    category: "Cotton",
    description: "Floral printed cotton lawn",
    specs: ["100% Cotton", 'Width: 54"', "Digital Print"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Cotton Lawn Swiss",
    category: "Cotton",
    description: "Swiss cotton lawn quality",
    specs: ["100% Cotton", 'Width: 54"', "GSM: 90"],
    badges: ["premium"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Cotton Lawn Dobby",
    category: "Cotton",
    description: "Dobby weave cotton lawn",
    specs: ["100% Cotton", 'Width: 54"', "Dobby"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Cotton Lawn Embroidered",
    category: "Cotton",
    description: "Embroidered cotton lawn",
    specs: ["100% Cotton", 'Width: 54"', "Embroidered"],
    badges: [],
    availability: "Limited Quantity",
  },

  {
    name: "Cotton Poplin White",
    category: "Cotton",
    description: "Crisp white cotton poplin",
    specs: ["100% Cotton", 'Width: 56"', "GSM: 130"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Cotton Poplin Colored",
    category: "Cotton",
    description: "Solid colored cotton poplin",
    specs: ["100% Cotton", 'Width: 56"', "GSM: 130"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Cotton Poplin Stretch",
    category: "Cotton",
    description: "Stretch cotton poplin",
    specs: ["97% Cotton 3% Spandex", 'Width: 56"', "GSM: 140"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Cotton Poplin Printed",
    category: "Cotton",
    description: "Printed cotton poplin",
    specs: ["100% Cotton", 'Width: 56"', "Digital Print"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Cotton Poplin Dobby",
    category: "Cotton",
    description: "Dobby weave poplin",
    specs: ["100% Cotton", 'Width: 56"', "Dobby"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Cotton Poplin Striped",
    category: "Cotton",
    description: "Striped cotton poplin",
    specs: ["100% Cotton", 'Width: 56"', "Striped"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Cotton Poplin Checked",
    category: "Cotton",
    description: "Checked cotton poplin",
    specs: ["100% Cotton", 'Width: 56"', "Checked"],
    badges: [],
    availability: "Available for Bulk Orders",
  },

  {
    name: "Cotton Twill Regular",
    category: "Cotton",
    description: "Standard cotton twill weave",
    specs: ["100% Cotton", 'Width: 58"', "Twill"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Cotton Twill Heavy",
    category: "Cotton",
    description: "Heavy weight cotton twill",
    specs: ["100% Cotton", 'Width: 58"', "GSM: 280"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Cotton Twill Stretch",
    category: "Cotton",
    description: "Stretch cotton twill",
    specs: ["98% Cotton 2% Spandex", 'Width: 58"', "GSM: 240"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Cotton Twill Colored",
    category: "Cotton",
    description: "Dyed cotton twill fabric",
    specs: ["100% Cotton", 'Width: 58"', "GSM: 220"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Cotton Twill Printed",
    category: "Cotton",
    description: "Printed cotton twill",
    specs: ["100% Cotton", 'Width: 58"', "Digital Print"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Cotton Twill Herringbone",
    category: "Cotton",
    description: "Herringbone cotton twill",
    specs: ["100% Cotton", 'Width: 58"', "Herringbone"],
    badges: [],
    availability: "Available for Bulk Orders",
  },

  // Linen & Natural Fibers (26 products)
  {
    name: "Pure Linen White",
    category: "Linen",
    description: "Pure white linen fabric",
    specs: ["100% Linen", 'Width: 58"', "GSM: 180"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Pure Linen Natural",
    category: "Linen",
    description: "Natural unbleached linen",
    specs: ["100% Linen", 'Width: 58"', "GSM: 180"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Pure Linen Colored",
    category: "Linen",
    description: "Dyed pure linen fabric",
    specs: ["100% Linen", 'Width: 58"', "GSM: 180"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Pure Linen Heavy",
    category: "Linen",
    description: "Heavy weight pure linen",
    specs: ["100% Linen", 'Width: 58"', "GSM: 240"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Pure Linen Light",
    category: "Linen",
    description: "Lightweight pure linen",
    specs: ["100% Linen", 'Width: 58"', "GSM: 120"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Pure Linen Washed",
    category: "Linen",
    description: "Pre-washed soft linen",
    specs: ["100% Linen", 'Width: 58"', "Pre-washed"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Pure Linen Striped",
    category: "Linen",
    description: "Striped pure linen",
    specs: ["100% Linen", 'Width: 58"', "Striped"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Pure Linen Checked",
    category: "Linen",
    description: "Checked pure linen",
    specs: ["100% Linen", 'Width: 58"', "Checked"],
    badges: [],
    availability: "Available for Bulk Orders",
  },

  {
    name: "Hemp Fabric Natural",
    category: "Linen",
    description: "Natural hemp fabric",
    specs: ["100% Hemp", 'Width: 54"', "GSM: 250"],
    badges: ["eco"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Hemp Fabric Bleached",
    category: "Linen",
    description: "Bleached hemp fabric",
    specs: ["100% Hemp", 'Width: 54"', "GSM: 250"],
    badges: ["eco"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Hemp Fabric Heavy",
    category: "Linen",
    description: "Heavy duty hemp fabric",
    specs: ["100% Hemp", 'Width: 54"', "GSM: 320"],
    badges: ["eco"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Hemp Fabric Canvas",
    category: "Linen",
    description: "Hemp canvas fabric",
    specs: ["100% Hemp", 'Width: 54"', "Canvas"],
    badges: ["eco"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Hemp Fabric Jersey",
    category: "Linen",
    description: "Knitted hemp jersey",
    specs: ["100% Hemp", 'Width: 60"', "GSM: 180"],
    badges: ["eco"],
    availability: "Available for Bulk Orders",
  },

  {
    name: "Jute Fabric Natural",
    category: "Linen",
    description: "Natural jute fabric",
    specs: ["100% Jute", 'Width: 40"', "GSM: 300"],
    badges: ["eco"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Jute Fabric Bleached",
    category: "Linen",
    description: "Bleached jute fabric",
    specs: ["100% Jute", 'Width: 40"', "GSM: 300"],
    badges: ["eco"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Jute Fabric Colored",
    category: "Linen",
    description: "Dyed jute fabric",
    specs: ["100% Jute", 'Width: 40"', "GSM: 300"],
    badges: ["eco"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Jute Hessian",
    category: "Linen",
    description: "Coarse jute hessian",
    specs: ["100% Jute", 'Width: 40"', "GSM: 400"],
    badges: ["eco"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Jute Canvas",
    category: "Linen",
    description: "Jute canvas fabric",
    specs: ["100% Jute", 'Width: 40"', "Canvas"],
    badges: ["eco"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Jute Gunny",
    category: "Linen",
    description: "Traditional jute gunny",
    specs: ["100% Jute", 'Width: 40"', "Gunny"],
    badges: ["eco"],
    availability: "Available for Bulk Orders",
  },

  {
    name: "Ramie Fabric White",
    category: "Linen",
    description: "Pure white ramie fabric",
    specs: ["100% Ramie", 'Width: 52"', "GSM: 160"],
    badges: ["eco"],
    availability: "Limited Quantity",
  },
  {
    name: "Ramie Fabric Natural",
    category: "Linen",
    description: "Natural ramie fabric",
    specs: ["100% Ramie", 'Width: 52"', "GSM: 160"],
    badges: ["eco"],
    availability: "Limited Quantity",
  },
  {
    name: "Ramie Linen Blend",
    category: "Linen",
    description: "Ramie linen blended fabric",
    specs: ["50% Ramie 50% Linen", 'Width: 54"', "GSM: 170"],
    badges: ["eco"],
    availability: "Limited Quantity",
  },

  {
    name: "Bamboo Fabric Plain",
    category: "Linen",
    description: "Pure bamboo fabric",
    specs: ["100% Bamboo", 'Width: 48"', "GSM: 160"],
    badges: ["eco"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Bamboo Fabric Jersey",
    category: "Linen",
    description: "Bamboo jersey knit",
    specs: ["100% Bamboo", 'Width: 60"', "GSM: 180"],
    badges: ["eco"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Bamboo Terry",
    category: "Linen",
    description: "Bamboo terry cloth",
    specs: ["100% Bamboo", 'Width: 58"', "Terry"],
    badges: ["eco"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Bamboo Fleece",
    category: "Linen",
    description: "Soft bamboo fleece",
    specs: ["100% Bamboo", 'Width: 60"', "GSM: 220"],
    badges: ["eco"],
    availability: "Available for Bulk Orders",
  },
];

// Additional fabrics
const additionalFabrics = [
  // Wool Fabrics (15 products)
  {
    name: "Pashmina Wool Pure",
    category: "Wool",
    description: "Finest pashmina wool from Kashmir",
    specs: ["100% Pashmina", 'Width: 36"', "GSM: 120"],
    badges: ["premium"],
    availability: "Limited Quantity",
  },
  {
    name: "Pashmina Wool Blended",
    category: "Wool",
    description: "Pashmina silk blend",
    specs: ["70% Pashmina 30% Silk", 'Width: 36"', "GSM: 110"],
    badges: ["premium"],
    availability: "Limited Quantity",
  },
  {
    name: "Pashmina Shawl Fabric",
    category: "Wool",
    description: "Traditional pashmina shawl fabric",
    specs: ["100% Pashmina", 'Width: 28"', "Traditional"],
    badges: ["premium"],
    availability: "Limited Quantity",
  },
  {
    name: "Pashmina Cashmere Blend",
    category: "Wool",
    description: "Luxury pashmina cashmere blend",
    specs: ["50% Pashmina 50% Cashmere", 'Width: 36"', "GSM: 130"],
    badges: ["premium"],
    availability: "Limited Quantity",
  },

  {
    name: "Merino Wool Fine",
    category: "Wool",
    description: "Fine merino wool fabric",
    specs: ["100% Merino Wool", 'Width: 58"', "GSM: 200"],
    badges: ["premium"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Merino Wool Medium",
    category: "Wool",
    description: "Medium weight merino wool",
    specs: ["100% Merino Wool", 'Width: 58"', "GSM: 280"],
    badges: ["premium"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Merino Wool Heavy",
    category: "Wool",
    description: "Heavy merino wool coating",
    specs: ["100% Merino Wool", 'Width: 58"', "GSM: 450"],
    badges: ["premium"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Merino Wool Jersey",
    category: "Wool",
    description: "Knitted merino wool jersey",
    specs: ["100% Merino Wool", 'Width: 60"', "GSM: 180"],
    badges: ["premium"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Merino Wool Twill",
    category: "Wool",
    description: "Merino wool twill weave",
    specs: ["100% Merino Wool", 'Width: 58"', "Twill"],
    badges: ["premium"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Merino Wool Flannel",
    category: "Wool",
    description: "Soft merino wool flannel",
    specs: ["100% Merino Wool", 'Width: 58"', "GSM: 240"],
    badges: ["premium"],
    availability: "Available for Bulk Orders",
  },

  {
    name: "Cashmere Pure",
    category: "Wool",
    description: "Pure cashmere fabric",
    specs: ["100% Cashmere", 'Width: 36"', "GSM: 140"],
    badges: ["premium"],
    availability: "Limited Quantity",
  },
  {
    name: "Cashmere Knit",
    category: "Wool",
    description: "Knitted cashmere fabric",
    specs: ["100% Cashmere", 'Width: 60"', "GSM: 160"],
    badges: ["premium"],
    availability: "Limited Quantity",
  },
  {
    name: "Cashmere Blend",
    category: "Wool",
    description: "Cashmere wool blend",
    specs: ["30% Cashmere 70% Wool", 'Width: 58"', "GSM: 180"],
    badges: ["premium"],
    availability: "Limited Quantity",
  },

  {
    name: "Yak Wool Natural",
    category: "Wool",
    description: "Natural yak wool fiber",
    specs: ["100% Yak Wool", 'Width: 54"', "GSM: 220"],
    badges: ["eco"],
    availability: "Limited Quantity",
  },
  {
    name: "Yak Wool Blend",
    category: "Wool",
    description: "Yak wool merino blend",
    specs: ["50% Yak 50% Merino", 'Width: 56"', "GSM: 200"],
    badges: ["eco"],
    availability: "Limited Quantity",
  },

  // Blended Fabrics (36 products)
  {
    name: "Cotton Silk Plain",
    category: "Blended",
    description: "Cotton silk blended fabric",
    specs: ["60% Cotton 40% Silk", 'Width: 44"', "GSM: 120"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Cotton Silk Printed",
    category: "Blended",
    description: "Printed cotton silk blend",
    specs: ["60% Cotton 40% Silk", 'Width: 44"', "Block Print"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Cotton Silk Handloom",
    category: "Blended",
    description: "Handwoven cotton silk",
    specs: ["70% Cotton 30% Silk", 'Width: 42"', "Handloom"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Cotton Silk Ikat",
    category: "Blended",
    description: "Ikat woven cotton silk",
    specs: ["65% Cotton 35% Silk", 'Width: 42"', "Ikat"],
    badges: [],
    availability: "Limited Quantity",
  },
  {
    name: "Cotton Silk Dobby",
    category: "Blended",
    description: "Dobby weave cotton silk",
    specs: ["60% Cotton 40% Silk", 'Width: 44"', "Dobby"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Cotton Silk Chanderi",
    category: "Blended",
    description: "Chanderi cotton silk",
    specs: ["60% Cotton 40% Silk", 'Width: 44"', "Traditional"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Cotton Silk Jacquard",
    category: "Blended",
    description: "Jacquard cotton silk",
    specs: ["55% Cotton 45% Silk", 'Width: 44"', "Jacquard"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Cotton Silk Striped",
    category: "Blended",
    description: "Striped cotton silk blend",
    specs: ["60% Cotton 40% Silk", 'Width: 44"', "Striped"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Cotton Silk Checked",
    category: "Blended",
    description: "Checked cotton silk fabric",
    specs: ["60% Cotton 40% Silk", 'Width: 44"', "Checked"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Cotton Silk Textured",
    category: "Blended",
    description: "Textured cotton silk weave",
    specs: ["65% Cotton 35% Silk", 'Width: 44"', "Textured"],
    badges: [],
    availability: "Available for Bulk Orders",
  },

  {
    name: "Cotton Linen Natural",
    category: "Blended",
    description: "Natural cotton linen blend",
    specs: ["55% Cotton 45% Linen", 'Width: 56"', "GSM: 150"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Cotton Linen White",
    category: "Blended",
    description: "White cotton linen fabric",
    specs: ["55% Cotton 45% Linen", 'Width: 56"', "GSM: 150"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Cotton Linen Colored",
    category: "Blended",
    description: "Dyed cotton linen blend",
    specs: ["55% Cotton 45% Linen", 'Width: 56"', "GSM: 150"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Cotton Linen Striped",
    category: "Blended",
    description: "Striped cotton linen",
    specs: ["50% Cotton 50% Linen", 'Width: 56"', "Striped"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Cotton Linen Checked",
    category: "Blended",
    description: "Checked cotton linen",
    specs: ["50% Cotton 50% Linen", 'Width: 56"', "Checked"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Cotton Linen Canvas",
    category: "Blended",
    description: "Cotton linen canvas blend",
    specs: ["60% Cotton 40% Linen", 'Width: 58"', "GSM: 280"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Cotton Linen Twill",
    category: "Blended",
    description: "Cotton linen twill weave",
    specs: ["55% Cotton 45% Linen", 'Width: 56"', "Twill"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Cotton Linen Chambray",
    category: "Blended",
    description: "Cotton linen chambray",
    specs: ["60% Cotton 40% Linen", 'Width: 56"', "Chambray"],
    badges: [],
    availability: "Available for Bulk Orders",
  },

  {
    name: "Modal Cotton Blend",
    category: "Blended",
    description: "Soft modal cotton blend",
    specs: ["60% Modal 40% Cotton", 'Width: 60"', "GSM: 160"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Modal Spandex Jersey",
    category: "Blended",
    description: "Stretch modal jersey",
    specs: ["95% Modal 5% Spandex", 'Width: 60"', "GSM: 160"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Modal Silk Blend",
    category: "Blended",
    description: "Luxurious modal silk",
    specs: ["70% Modal 30% Silk", 'Width: 58"', "GSM: 140"],
    badges: ["premium"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Modal Bamboo Blend",
    category: "Blended",
    description: "Eco modal bamboo blend",
    specs: ["50% Modal 50% Bamboo", 'Width: 60"', "GSM: 150"],
    badges: ["eco"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Modal Linen Blend",
    category: "Blended",
    description: "Modal linen summer blend",
    specs: ["60% Modal 40% Linen", 'Width: 58"', "GSM: 130"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Modal Tencel Blend",
    category: "Blended",
    description: "Sustainable modal tencel",
    specs: ["50% Modal 50% Tencel", 'Width: 60"', "GSM: 140"],
    badges: ["eco"],
    availability: "Available for Bulk Orders",
  },

  {
    name: "Tencel Cotton Blend",
    category: "Blended",
    description: "Eco tencel cotton blend",
    specs: ["60% Tencel 40% Cotton", 'Width: 58"', "GSM: 150"],
    badges: ["eco"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Tencel Linen Blend",
    category: "Blended",
    description: "Sustainable tencel linen",
    specs: ["55% Tencel 45% Linen", 'Width: 56"', "GSM: 140"],
    badges: ["eco"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Tencel Silk Blend",
    category: "Blended",
    description: "Luxury tencel silk blend",
    specs: ["70% Tencel 30% Silk", 'Width: 58"', "GSM: 130"],
    badges: ["eco", "premium"],
    availability: "Limited Quantity",
  },
  {
    name: "Tencel Spandex Jersey",
    category: "Blended",
    description: "Stretch tencel jersey",
    specs: ["95% Tencel 5% Spandex", 'Width: 60"', "GSM: 170"],
    badges: ["eco"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Tencel Modal Blend",
    category: "Blended",
    description: "Soft tencel modal blend",
    specs: ["50% Tencel 50% Modal", 'Width: 60"', "GSM: 150"],
    badges: ["eco"],
    availability: "Available for Bulk Orders",
  },

  {
    name: "Bamboo Cotton Natural",
    category: "Blended",
    description: "Natural bamboo cotton",
    specs: ["70% Bamboo 30% Cotton", 'Width: 48"', "GSM: 200"],
    badges: ["eco"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Bamboo Cotton Jersey",
    category: "Blended",
    description: "Knitted bamboo cotton",
    specs: ["60% Bamboo 40% Cotton", 'Width: 60"', "GSM: 180"],
    badges: ["eco"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Bamboo Cotton Stretch",
    category: "Blended",
    description: "Stretch bamboo cotton",
    specs: ["68% Bamboo 30% Cotton 2% Spandex", 'Width: 60"', "GSM: 190"],
    badges: ["eco"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Bamboo Cotton Terry",
    category: "Blended",
    description: "Bamboo cotton terry cloth",
    specs: ["70% Bamboo 30% Cotton", 'Width: 58"', "Terry"],
    badges: ["eco"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Bamboo Cotton Fleece",
    category: "Blended",
    description: "Soft bamboo cotton fleece",
    specs: ["65% Bamboo 35% Cotton", 'Width: 60"', "GSM: 220"],
    badges: ["eco"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Bamboo Cotton Twill",
    category: "Blended",
    description: "Bamboo cotton twill weave",
    specs: ["70% Bamboo 30% Cotton", 'Width: 58"', "Twill"],
    badges: ["eco"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Bamboo Cotton Canvas",
    category: "Blended",
    description: "Durable bamboo cotton canvas",
    specs: ["65% Bamboo 35% Cotton", 'Width: 58"', "GSM: 280"],
    badges: ["eco"],
    availability: "Available for Bulk Orders",
  },
];

// Specialty Fabrics
const specialtyFabrics = [
  // Ikat Weave (6 products)
  {
    name: "Cotton Ikat Traditional",
    category: "Specialty",
    description: "Traditional cotton ikat weave",
    specs: ["100% Cotton", 'Width: 42"', "Ikat"],
    badges: [],
    availability: "Limited Quantity",
  },
  {
    name: "Silk Ikat Handwoven",
    category: "Specialty",
    description: "Handwoven silk ikat fabric",
    specs: ["100% Silk", 'Width: 44"', "Handwoven"],
    badges: ["premium"],
    availability: "Limited Quantity",
  },
  {
    name: "Cotton Silk Ikat",
    category: "Specialty",
    description: "Cotton silk ikat blend",
    specs: ["60% Cotton 40% Silk", 'Width: 42"', "Ikat"],
    badges: [],
    availability: "Limited Quantity",
  },
  {
    name: "Pochampally Ikat",
    category: "Specialty",
    description: "Traditional Pochampally ikat",
    specs: ["Cotton-Silk Mix", 'Width: 42"', "Pochampally"],
    badges: [],
    availability: "Limited Quantity",
  },
  {
    name: "Sambalpuri Ikat",
    category: "Specialty",
    description: "Odisha sambalpuri ikat",
    specs: ["100% Cotton", 'Width: 40"', "Sambalpuri"],
    badges: [],
    availability: "Limited Quantity",
  },
  {
    name: "Patola Ikat Style",
    category: "Specialty",
    description: "Patola style ikat weave",
    specs: ["Silk-Cotton Mix", 'Width: 44"', "Patola Style"],
    badges: ["premium"],
    availability: "Limited Quantity",
  },

  // Block Print Cotton (12 products)
  {
    name: "Ajrakh Block Print",
    category: "Specialty",
    description: "Traditional Ajrakh block print",
    specs: ["100% Cotton", 'Width: 44"', "Ajrakh"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Bagru Block Print",
    category: "Specialty",
    description: "Bagru village block print",
    specs: ["100% Cotton", 'Width: 44"', "Bagru"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Sanganeri Block Print",
    category: "Specialty",
    description: "Sanganeri block print cotton",
    specs: ["100% Cotton", 'Width: 44"', "Sanganeri"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Bagh Block Print",
    category: "Specialty",
    description: "Madhya Pradesh bagh print",
    specs: ["100% Cotton", 'Width: 44"', "Bagh"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Kalamkari Block Print",
    category: "Specialty",
    description: "Kalamkari style block print",
    specs: ["100% Cotton", 'Width: 44"', "Kalamkari"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Floral Block Print",
    category: "Specialty",
    description: "Traditional floral block print",
    specs: ["100% Cotton", 'Width: 44"', "Floral"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Geometric Block Print",
    category: "Specialty",
    description: "Geometric pattern block print",
    specs: ["100% Cotton", 'Width: 44"', "Geometric"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Indigo Block Print",
    category: "Specialty",
    description: "Natural indigo block print",
    specs: ["100% Cotton", 'Width: 44"', "Indigo"],
    badges: ["eco"],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Multi Color Block Print",
    category: "Specialty",
    description: "Multi-colored block print",
    specs: ["100% Cotton", 'Width: 44"', "Multi-color"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Hand Block Print",
    category: "Specialty",
    description: "Hand carved block print",
    specs: ["100% Cotton", 'Width: 44"', "Hand Block"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Dabu Block Print",
    category: "Specialty",
    description: "Traditional dabu resist print",
    specs: ["100% Cotton", 'Width: 44"', "Dabu"],
    badges: [],
    availability: "Available for Bulk Orders",
  },
  {
    name: "Metallic Block Print",
    category: "Specialty",
    description: "Block print with metallic accents",
    specs: ["100% Cotton", 'Width: 44"', "Metallic"],
    badges: [],
    availability: "Limited Quantity",
  },
];

// Combine all fabric arrays
fabricProducts.push(...additionalFabrics, ...specialtyFabrics);

// Template function to generate product cards
function generateProductCard(product, index) {
  const badgesHTML = product.badges
    .map(
      (badge) =>
        `<span class="badge ${badge}">${
          badge.charAt(0).toUpperCase() + badge.slice(1)
        }</span>`
    )
    .join("");
  const specsHTML = product.specs
    .map((spec) => `<span class="spec">${spec}</span>`)
    .join("");

  return `
    <div class="product-card" data-category="${
      product.category
    }" data-name="${product.name.toLowerCase()}">
      <div class="product-image">
        <span class="coming-soon-badge">Coming Soon</span>
        <div class="product-badges">
          ${badgesHTML}
        </div>
      </div>
      <div class="product-details">
        <h3>${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-specs">
          ${specsHTML}
        </div>
        <div class="product-footer">
          <span class="availability">${product.availability}</span>
          <button class="enquire-btn">Enquire Now</button>
        </div>
      </div>
    </div>
  `;
}

let filteredProducts = [...fabricProducts];
let currentPage = 1;
const itemsPerPage = 12;

//Render pages
function renderCurrentPage() {
  const productsGrid = document.querySelector(".products-grid");
  if (!productsGrid) return;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filteredProducts.length);
  const pageProducts = filteredProducts.slice(startIndex, endIndex);

  const productsHTML = pageProducts
    .map((product, index) => generateProductCard(product, startIndex + index))
    .join("");

  productsGrid.innerHTML = productsHTML;

  // Re-attach event listeners for new products
  attachEnquireListeners();
}

// Filter function
function filterProductsByCategory(category = null) {
  const categorySelect = document.querySelector(".filter-select");
  const sortSelect = document.querySelectorAll(".filter-select")[1];

  const selectedCategory =
    category || (categorySelect ? categorySelect.value : "All Categories");
  const sortBy = sortSelect ? sortSelect.value : "Featured";

  // Filter products in data array, not DOM
  if (selectedCategory === "All Categories") {
    filteredProducts = [...fabricProducts];
  } else {
    filteredProducts = fabricProducts.filter((product) => {
      const matchesCategory =
        product.category === selectedCategory ||
        product.name.toLowerCase().includes(selectedCategory.toLowerCase());
      return matchesCategory;
    });
  }

  // Sort filtered products
  if (sortBy !== "Featured") {
    sortFilteredProducts(sortBy);
  }

  // Reset to page 1 and render
  currentPage = 1;
  renderCurrentPage();

  // Update UI
  updateResultsCount(filteredProducts.length);
  updatePagination(Math.ceil(filteredProducts.length / itemsPerPage));
  updatePaginationButtons();
}

function sortFilteredProducts(sortBy) {
  filteredProducts.sort((a, b) => {
    switch (sortBy) {
      case "Name (A-Z)":
        return a.name.localeCompare(b.name);
      case "Name (Z-A)":
        return b.name.localeCompare(a.name);
      case "Newest First":
        const hasNewA = a.badges.includes("new") ? 1 : 0;
        const hasNewB = b.badges.includes("new") ? 1 : 0;
        return hasNewB - hasNewA;
      default:
        return 0;
    }
  });
}

// Text contrast function (KEEP THIS - IT'S WORKING)
function updateTextContrastFromBackground(bgUrl) {
  const img = new Image();
  img.crossOrigin = "anonymous";
  img.src = bgUrl;

  img.onload = function () {
    try {
      const canvas = document.createElement("canvas");
      canvas.width = 20;
      canvas.height = 20;
      const ctx = canvas.getContext("2d");

      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      const imageData = ctx.getImageData(
        0,
        0,
        canvas.width,
        canvas.height
      ).data;

      let totalLuminance = 0;
      for (let i = 0; i < imageData.length; i += 4) {
        const [r, g, b] = [imageData[i], imageData[i + 1], imageData[i + 2]];
        const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
        totalLuminance += luminance;
      }

      const avgLuminance = totalLuminance / (canvas.width * canvas.height);
      const textContainer = document.querySelector(".hero-text-container");

      if (textContainer) {
        if (avgLuminance < 128) {
          textContainer.style.color = "white";
          textContainer.style.textShadow = "2px 2px 4px rgba(0,0,0,0.8)";
        } else {
          textContainer.style.color = "#1a1a1a";
          textContainer.style.textShadow = "2px 2px 4px rgba(255,255,255,0.8)";
        }
      }
    } catch (error) {
      console.error("Error analyzing image:", error);
    }
    const textContainer = document.querySelector(".hero-text-container");
    if (textContainer) {
      if (avgLuminance < 128) {
        textContainer.style.color = "white";
      } else {
        textContainer.style.color = "#1a1a1a";
      }
    }
  };

  img.onerror = function () {
    const textContainer = document.querySelector(".hero-text-container");
    if (textContainer) {
      textContainer.style.color = "white";
      textContainer.style.textShadow = "2px 2px 4px rgba(0,0,0,0.8)";
    }
  };
}

// ====== CONFIG ======
const INTERVAL = 5000;

// ====== Helpers ======
const hero = document.querySelector(".textiles-hero-bg");

// Set up CSS variables for hero background
if (hero) {
  hero.style.setProperty("--img-a", "");
  hero.style.setProperty("--img-b", "");
}

const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  .textiles-hero-bg::before{ background-image: var(--img-a); }
  .textiles-hero-bg::after { background-image: var(--img-b); }
`);
document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];

// Opacity control
const fadeSheet = new CSSStyleSheet();
fadeSheet.replaceSync(`
  .textiles-hero-bg::before{ opacity: var(--opa-a,1); }
  .textiles-hero-bg::after { opacity: var(--opa-b,0); }
`);
document.adoptedStyleSheets = [...document.adoptedStyleSheets, fadeSheet];

function preload(src) {
  return new Promise((res) => {
    const i = new Image();
    i.onload = res;
    i.onerror = res;
    i.src = src;
  });
}

// Load images from JSON
async function listImagesFromManifest() {
  try {
    const res = await fetch("/Images/cardImages/images.json");
    if (!res.ok) throw new Error("Cannot fetch images.json");
    const data = await res.json();
    return data.fabrics.map((f) => `/Images/cardImages/${f}`);
  } catch (err) {
    console.error("Error loading manifest:", err);
    return [
      "/Images/silkPattern.jpeg",
      "/Images/Silk.jpeg",
      "/Images/RedSilk.png",
    ];
  }
}

async function initHeroSlideshow() {
  if (!hero) return;

  const images = await listImagesFromManifest();
  if (!images.length) return;

  let i = 0;
  let showingA = true;

  // Preload first two images
  await preload(images[0]);
  if (images[1]) await preload(images[1]);

  // Set initial image
  hero.style.setProperty("--img-a", `url(${images[0]})`);
  hero.style.setProperty("--opa-a", "1");
  hero.style.setProperty("--opa-b", "0");

  // Set initial text contrast
  setTimeout(() => {
    updateTextContrastFromBackground(images[0]);
  }, 100);

  // Start slideshow with proper cycling
  setInterval(async () => {
    const nextIndex = (i + 1) % images.length;
    const nextImg = images[nextIndex];

    if (showingA) {
      hero.style.setProperty("--img-b", `url(${nextImg})`);
      hero.style.setProperty("--opa-a", "0");
      hero.style.setProperty("--opa-b", "1");
    } else {
      hero.style.setProperty("--img-a", `url(${nextImg})`);
      hero.style.setProperty("--opa-a", "1");
      hero.style.setProperty("--opa-b", "0");
    }

    // Update text contrast
    setTimeout(() => updateTextContrastFromBackground(nextImg), 1000);

    i = nextIndex;
    showingA = !showingA;
  }, 5000); // 5 second intervals
}

function displayPage(page) {
  currentPage = page;
  renderCurrentPage();

  const currentPageSpan = document.querySelector(".current-page");
  if (currentPageSpan) {
    currentPageSpan.textContent = page;
  }

  document.querySelector(".products-listing").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function attachEnquireListeners() {
  const enquireButtons = document.querySelectorAll(".enquire-btn");
  enquireButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const productCard = this.closest(".product-card");
      const productName = productCard.querySelector("h3").textContent;
      window.location.href = `index.html#enquiry-form?product=${encodeURIComponent(
        productName
      )}`;
    });
  });
}

// Side Menu Functions
function toggleSideMenu() {
  const menuToggle = document.querySelector(".menu-toggle");
  const menuOverlay = document.querySelector(".menu-overlay");
  const sideMenu = document.querySelector(".side-menu");

  if (!menuToggle || !menuOverlay || !sideMenu) return;

  const rect = menuToggle.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  sideMenu.style.position = "absolute";
  sideMenu.style.top = rect.bottom + scrollTop + 10 + "px";
  sideMenu.style.left = rect.left + "px";

  menuToggle.classList.toggle("active");
  menuOverlay.classList.toggle("active");
  sideMenu.classList.toggle("active");
}

function closeSideMenu() {
  const menuToggle = document.querySelector(".menu-toggle");
  const menuOverlay = document.querySelector(".menu-overlay");
  const sideMenu = document.querySelector(".side-menu");

  sideMenu.classList.add("closing");
  menuToggle.classList.remove("active");
  menuOverlay.classList.remove("active");

  setTimeout(() => {
    sideMenu.classList.remove("active", "closing");
  }, 250);
}

function toggleCategory(header) {
  const fabricList = header.nextElementSibling;
  const isActive = header.classList.contains("active");

  document.querySelectorAll(".category-header").forEach((h) => {
    h.classList.remove("active");
    h.nextElementSibling.classList.remove("active");
  });

  if (!isActive) {
    header.classList.add("active");
    fabricList.classList.add("active");
  }
}

function filterByFabric(fabricName) {
  closeSideMenu();

  const categorySelect = document.querySelector(".filter-select");
  if (categorySelect) {
    const existingOption = Array.from(categorySelect.options).find(
      (option) => option.value === fabricName
    );
    if (!existingOption) {
      const newOption = new Option(fabricName, fabricName);
      categorySelect.add(newOption);
    }
    categorySelect.value = fabricName;
  }

  filterProductsByCategory(fabricName);

  document.querySelector(".products-listing").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

// Pagination functions
function goToPage(page) {
  currentPage = page;
  displayPage(page);
  updatePaginationButtons();
}

function changePage(direction) {
  const totalPages = parseInt(
    document.querySelector(".total-pages")?.textContent || 1
  );

  if (direction === "next" && currentPage < totalPages) {
    goToPage(currentPage + 1);
  } else if (direction === "prev" && currentPage > 1) {
    goToPage(currentPage - 1);
  }
}

function updateResultsCount(count) {
  const unifiedDisplay = document.getElementById("unified-results-display");

  if (unifiedDisplay) {
    const searchInput = document.getElementById("fabric-search-input");
    const hasSearch = searchInput && searchInput.value.trim();

    // Calculate items shown on current page
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, count);
    const itemsOnPage = Math.min(
      itemsPerPage,
      count - (currentPage - 1) * itemsPerPage
    );

    if (hasSearch || Object.keys(activeSearchFilters || {}).length > 0) {
      // When search/filter is active, show current page items vs total filtered results
      unifiedDisplay.textContent = `Showing ${itemsOnPage} of ${count} products`;
    } else {
      // When no search/filter, show current page items vs total available products
      const totalProducts = fabricProducts.length;
      unifiedDisplay.textContent = `Showing ${itemsOnPage} of ${totalProducts} products`;
    }
  }
}

function updatePagination(totalPages) {
  const existingPagination = document.querySelector(".pagination");
  if (existingPagination) {
    existingPagination.remove();
  }

  if (totalPages > 1) {
    createPagination(totalPages);
  }
}

function createPagination(totalPages) {
  const paginationHTML = `
    <div class="pagination">
      <div class="container">
        <div class="pagination-controls">
          <button class="page-btn prev-btn" onclick="changePage('prev')" disabled>
            ← Previous
          </button>
          <div class="page-numbers">
            ${Array.from(
              { length: Math.min(totalPages, 5) },
              (_, i) =>
                `<button class="page-btn ${
                  i === 0 ? "active" : ""
                }" onclick="goToPage(${i + 1})">${i + 1}</button>`
            ).join("")}
            ${totalPages > 5 ? '<span class="page-dots">...</span>' : ""}
          </div>
          <button class="page-btn next-btn" onclick="changePage('next')" ${
            totalPages <= 1 ? "disabled" : ""
          }>
            Next →
          </button>
        </div>
        <div class="pagination-info">
          Page <span class="current-page">1</span> of <span class="total-pages">${totalPages}</span>
        </div>
      </div>
    </div>
  `;

  const productsSection = document.querySelector(".products-listing");
  productsSection.insertAdjacentHTML("afterend", paginationHTML);
}

function updatePaginationButtons() {
  const totalPages = parseInt(
    document.querySelector(".total-pages")?.textContent || 1
  );
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const pageButtons = document.querySelectorAll(".page-numbers .page-btn");

  if (prevBtn) prevBtn.disabled = currentPage === 1;
  if (nextBtn) nextBtn.disabled = currentPage === totalPages;

  pageButtons.forEach((btn, index) => {
    btn.classList.toggle("active", index + 1 === currentPage);
  });
}

// Initialize everything when DOM loads
document.addEventListener("DOMContentLoaded", function () {
  // Initialize filtered products
  filteredProducts = [...fabricProducts];

  // Render first page
  renderCurrentPage();

  // Initialize menu categories (all closed)
  document.querySelectorAll(".fabric-list").forEach((list) => {
    list.classList.remove("active");
  });

  // Filter functionality
  const filterSelects = document.querySelectorAll(".filter-select");
  filterSelects.forEach((select) => {
    select.addEventListener("change", function () {
      filterProductsByCategory();
    });
  });

  // Initialize pagination
  updateResultsCount(fabricProducts.length);
  updatePagination(Math.ceil(fabricProducts.length / itemsPerPage));

  // ESC key to close menu
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeSideMenu();
    }
  });

  // Start hero slideshow
  initHeroSlideshow();
});

// Smooth scroll for anchor links
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

// Search

let searchResults = [...fabricProducts];
let activeSearchFilters = {};

// Initialize search suggestions based on your product data
function initializeSearchSuggestions() {
  const suggestions = new Set();

  fabricProducts.forEach((product) => {
    // Add product name words
    product.name
      .toLowerCase()
      .split(" ")
      .forEach((word) => {
        if (word.length > 2) suggestions.add(word);
      });

    // Add category
    suggestions.add(product.category.toLowerCase());

    // Add material types from specs
    product.specs.forEach((spec) => {
      if (spec.includes("%")) {
        const materials = spec
          .split(/[%\s]+/)
          .filter((part) => isNaN(part) && part.length > 2);
        materials.forEach((material) =>
          suggestions.add(material.toLowerCase())
        );
      }
    });

    // Add badges
    product.badges.forEach((badge) => suggestions.add(badge.toLowerCase()));
  });

  return Array.from(suggestions).map((term) => ({
    text: term,
    category: getCategoryForTerm(term),
    icon: getIconForTerm(term),
  }));
}

function getCategoryForTerm(term) {
  const categories = {
    silk: "Material",
    cotton: "Material",
    linen: "Material",
    hemp: "Material",
    wool: "Material",
    bamboo: "Material",
    jute: "Material",
    premium: "Quality",
    eco: "Quality",
    new: "Quality",
    organic: "Quality",
    handloom: "Type",
    handwoven: "Type",
    block: "Type",
    print: "Type",
    banarasi: "Traditional",
    kanjivaram: "Traditional",
    chanderi: "Traditional",
    tussar: "Specific",
    mulberry: "Specific",
    pashmina: "Specific",
  };
  return categories[term] || "General";
}

function getIconForTerm(term) {
  const icons = {
    silk: "🧵",
    cotton: "🌱",
    linen: "🌾",
    hemp: "🌿",
    wool: "🐑",
    bamboo: "🎋",
    jute: "🌾",
    premium: "⭐",
    eco: "♻️",
    new: "✨",
    organic: "🌿",
    handloom: "🧶",
    handwoven: "👐",
    block: "🎨",
    print: "🖨️",
  };
  return icons[term] || "📦";
}

// Enhanced search functionality
function setupSearchFunctionality() {
  const searchInput = document.querySelector("#fabric-search-input");
  const suggestionsContainer = document.querySelector("#search-suggestions");

  if (!searchInput) {
    console.warn("Search input not found");
    return;
  }

  const suggestions = initializeSearchSuggestions();

  // Search input events
  searchInput.addEventListener("input", (e) =>
    handleSearchInput(e, suggestions)
  );
  searchInput.addEventListener("focus", () =>
    showSearchSuggestions(suggestions)
  );
  searchInput.addEventListener("blur", () => hideSearchSuggestions());

  // Search on Enter key
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      performFabricSearch();
    }
  });
}

function handleSearchInput(e, suggestions) {
  const query = e.target.value.toLowerCase().trim();

  if (query.length > 0) {
    showFilteredSuggestions(query, suggestions);
    // Perform live search as user types
    if (query.length > 2) {
      performFabricSearch(query);
    }
  } else {
    hideSearchSuggestions();
    resetToAllProducts();
  }
}

function showFilteredSuggestions(query, suggestions) {
  const suggestionsContainer = document.querySelector("#search-suggestions");
  if (!suggestionsContainer) return;

  const filtered = suggestions
    .filter((suggestion) => suggestion.text.toLowerCase().includes(query))
    .slice(0, 8); // Limit to 8 suggestions

  if (filtered.length > 0) {
    suggestionsContainer.innerHTML = filtered
      .map(
        (suggestion) => `
      <div class="search-suggestion-item" onclick="selectSearchSuggestion('${suggestion.text}')">
        <span class="suggestion-icon">${suggestion.icon}</span>
        <span class="suggestion-text">${suggestion.text}</span>
        <span class="suggestion-category">${suggestion.category}</span>
      </div>
    `
      )
      .join("");
    suggestionsContainer.style.display = "block";
  } else {
    hideSearchSuggestions();
  }
}

function showSearchSuggestions(suggestions) {
  const suggestionsContainer = document.querySelector("#search-suggestions");
  const searchInput = document.querySelector("#fabric-search-input");

  if (!suggestionsContainer || !searchInput) return;

  const query = searchInput.value.toLowerCase().trim();
  if (query.length > 0) {
    showFilteredSuggestions(query, suggestions);
  }
}

function hideSearchSuggestions() {
  setTimeout(() => {
    const suggestionsContainer = document.querySelector("#search-suggestions");
    if (suggestionsContainer) {
      suggestionsContainer.style.display = "none";
    }
  }, 200);
}

function selectSearchSuggestion(text) {
  const searchInput = document.querySelector("#fabric-search-input");
  if (searchInput) {
    searchInput.value = text;
    hideSearchSuggestions();
    performFabricSearch(text);
  }
}

// Main search function
function performFabricSearch(query = null) {
  const searchInput = document.querySelector("#fabric-search-input");
  query = query || (searchInput ? searchInput.value.toLowerCase().trim() : "");

  if (!query) {
    resetToAllProducts();
    return;
  }

  // Enhanced search algorithm
  searchResults = fabricProducts.filter((product) => {
    const searchableText = [
      product.name,
      product.description,
      product.category,
      ...product.specs,
      ...product.badges,
      product.availability,
    ]
      .join(" ")
      .toLowerCase();

    // Direct match
    if (searchableText.includes(query)) {
      return true;
    }

    // Word-by-word search
    const queryWords = query.split(" ").filter((word) => word.length > 2);
    if (queryWords.length > 1) {
      return queryWords.every((word) => searchableText.includes(word));
    }

    return false;
  });

  // Apply current filters to search results
  applySearchFilters();
  updateSearchResultsDisplay();
  updateSearchInfo(query, searchResults.length);
}

function applySearchFilters() {
  let filtered = [...searchResults];

  // Category filter
  const categorySelect = document.querySelector(".filter-select");
  if (
    categorySelect &&
    categorySelect.value &&
    categorySelect.value !== "All Categories"
  ) {
    filtered = filtered.filter(
      (product) => product.category === categorySelect.value
    );
  }

  // Apply additional filters from the enhanced filter system
  Object.keys(activeSearchFilters).forEach((filterKey) => {
    const filterValue = activeSearchFilters[filterKey];

    switch (filterKey) {
      case "material":
        filtered = filtered.filter((product) =>
          product.specs.some((spec) =>
            spec.toLowerCase().includes(filterValue.toLowerCase())
          )
        );
        break;
      case "quality":
        filtered = filtered.filter((product) =>
          product.badges.includes(filterValue)
        );
        break;
      case "availability":
        filtered = filtered.filter(
          (product) => product.availability === filterValue
        );
        break;
    }
  });

  filteredProducts = filtered;
}

function updateSearchResultsDisplay() {
  currentPage = 1;
  renderCurrentPage();
  updateResultsCount(filteredProducts.length);
  updatePagination(Math.ceil(filteredProducts.length / itemsPerPage));
}

function updateSearchInfo(query, count) {
  // Update search results info
  const searchInfoElements = document.querySelectorAll(".search-results-info");
  searchInfoElements.forEach((element) => {
    element.innerHTML = query
      ? `Found <strong>${count}</strong> results for "${query}"`
      : `Showing <strong>${count}</strong> products`;
  });
}

function resetToAllProducts() {
  searchResults = [...fabricProducts];
  filteredProducts = [...fabricProducts];
  updateSearchResultsDisplay();
  updateSearchInfo("", fabricProducts.length);
}

// Advanced filter functions
function addSearchFilter(filterType, value) {
  activeSearchFilters[filterType] = value;
  applySearchFilters();
  updateSearchResultsDisplay();
  updateActiveSearchFilters();
}

function removeSearchFilter(filterType) {
  delete activeSearchFilters[filterType];
  applySearchFilters();
  updateSearchResultsDisplay();
  updateActiveSearchFilters();
}

function clearAllSearchFilters() {
  activeSearchFilters = {};

  // Reset filter dropdowns
  const filterSelects = document.querySelectorAll(".search-filter-select");
  filterSelects.forEach((select) => {
    select.value = "";
  });

  applySearchFilters();
  updateSearchResultsDisplay();
  updateActiveSearchFilters();
}

function updateActiveSearchFilters() {
  const activeFiltersContainer = document.querySelector(
    "#active-search-filters"
  );
  if (!activeFiltersContainer) return;

  const filterEntries = Object.entries(activeSearchFilters);

  if (filterEntries.length === 0) {
    activeFiltersContainer.innerHTML = "";
    return;
  }

  activeFiltersContainer.innerHTML = filterEntries
    .map(
      ([key, value]) => `
    <div class="search-filter-tag">
      ${key}: ${value}
      <span class="filter-remove" onclick="removeSearchFilter('${key}')">&times;</span>
    </div>
  `
    )
    .join("");
}

// Search sorting
function sortSearchResults(sortBy) {
  switch (sortBy) {
    case "name-asc":
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "name-desc":
      filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "newest":
      filteredProducts.sort((a, b) => {
        const aNew = a.badges.includes("new") ? 1 : 0;
        const bNew = b.badges.includes("new") ? 1 : 0;
        return bNew - aNew;
      });
      break;
    case "category":
      filteredProducts.sort((a, b) => a.category.localeCompare(b.category));
      break;
    default: // relevance
      // Keep search relevance order
      break;
  }

  updateSearchResultsDisplay();
}

// Initialize search when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  // Setup search functionality after a small delay to ensure other elements are loaded
  setTimeout(() => {
    setupSearchFunctionality();
  }, 100);
});
