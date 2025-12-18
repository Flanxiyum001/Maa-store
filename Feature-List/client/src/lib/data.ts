import heroImage from "@assets/generated_images/cold-pressed_oils_hero.png";
import coconutOilImage from "@assets/generated_images/cold-pressed_coconut_oil.png";
import sesameOilImage from "@assets/generated_images/cold-pressed_sesame_oil.png";
import groundnutOilImage from "@assets/generated_images/cold-pressed_groundnut_oil.png";
import mustardOilImage from "@assets/generated_images/cold-pressed_mustard_oil.png";
import milletsImage from "@assets/generated_images/premium_millets_mix.png";
import dhalsImage from "@assets/generated_images/premium_dhals_jar.png";
import dryFruitsImage from "@assets/generated_images/premium_dry_fruits.png";
import attaImage from "@assets/generated_images/organic_whole_wheat_atta.png";
import gheeImage from "@assets/generated_images/pure_indian_ghee.png";
import honeyImage from "@assets/generated_images/raw_indian_honey.png";
import batterImage from "@assets/generated_images/idli_dosa_batter.png";
import coldPressedOilsCategoryImage from "@assets/generated_images/cold_pressed_oils_category.png";
import milletsRiceFLakesImage from "@assets/generated_images/millets_category.png";
import dhalsPulsesCategoryImage from "@assets/generated_images/dhals_pulses_category.png";
import dryFruitsCategoryImage from "@assets/generated_images/dry_fruits_category.png";
import dailyEssentialsImage from "@assets/generated_images/daily_essentials_category.png";
import masalasCategoryImage from "@assets/generated_images/masalas_category.png";
import spicesCategoryImage from "@assets/generated_images/spices_category.png";
import snacksSavoriesCategoryImage from "@assets/generated_images/snacks_savories_category.png";
import healthCosmeticsCategoryImage from "@assets/generated_images/health_cosmetics_category.png";
import essentialOilsCategoryImage from "@assets/generated_images/essential_oils_category.png";
import battersCategoryImage from "@assets/generated_images/batters.png";

export const categories = [
  "All",
  "Oils",
  "Millets",
  "Dhals & Pulses",
  "Dry Fruits",
  "Atta & Flours",
  "Ghee",
  "Honey",
  "Batters"
];

export interface CategoryCard {
  name: string;
  displayName: string;
  image: string;
  itemCount: number;
  description?: string;
}

export const categoryCards: CategoryCard[] = [
  {
    name: "Oils",
    displayName: "Cold Pressed Edible Oils",
    image: coldPressedOilsCategoryImage,
    itemCount: 8,
    description: "Pure, cold-pressed oils"
  },
  {
    name: "Millets",
    displayName: "Millet / Rice / Flakes",
    image: milletsRiceFLakesImage,
    itemCount: 15,
    description: "Nutritious grains and cereals"
  },
  {
    name: "Dhals & Pulses",
    displayName: "Dhals & Pulses",
    image: dhalsPulsesCategoryImage,
    itemCount: 9,
    description: "Protein-rich pulses"
  },
  {
    name: "Dry Fruits",
    displayName: "Dry Fruits",
    image: dryFruitsCategoryImage,
    itemCount: 9,
    description: "Premium dry fruits"
  },
  {
    name: "DailyEssentials",
    displayName: "Daily Essentials",
    image: dailyEssentialsImage,
    itemCount: 101,
    description: "Essential spices and daily items"
  },
  {
    name: "Masalas",
    displayName: "Daily Masala",
    image: masalasCategoryImage,
    itemCount: 12,
    description: "Premium masalas and spice blends"
  },
  {
    name: "Spices",
    displayName: "Spices",
    image: spicesCategoryImage,
    itemCount: 15,
    description: "Premium spices and seasonings"
  },
  {
    name: "Snacks",
    displayName: "Snacks / Savories",
    image: snacksSavoriesCategoryImage,
    itemCount: 8,
    description: "Delicious snacks and savories"
  },
  {
    name: "Health",
    displayName: "Natural / Plant based Health / Cosmetics",
    image: healthCosmeticsCategoryImage,
    itemCount: 40,
    description: "Natural health and wellness products"
  },
  {
    name: "EssentialOils",
    displayName: "Essential Oils",
    image: essentialOilsCategoryImage,
    itemCount: 14,
    description: "Pure essential oils for wellness"
  },
  {
    name: "Batters",
    displayName: "Batter",
    image: battersCategoryImage,
    itemCount: 5,
    description: "Traditional batters"
  }
];

export const products = [
  // Oils
  {
    id: 1,
    name: "Pure Cold-Pressed Coconut Oil",
    description: "100% pure, cold-pressed coconut oil from premium coconuts. No chemicals or refinement. Rich in MCTs and natural antioxidants.",
    price: 399,
    category: "Oils",
    image: coconutOilImage,
    featured: true
  },
  {
    id: 2,
    name: "Traditional Cold-Pressed Sesame Oil",
    description: "Authentic sesame oil extracted using traditional cold-pressing methods. Perfect for cooking and medicinal use. Rich, nutty flavor.",
    price: 449,
    category: "Oils",
    image: sesameOilImage,
    featured: true
  },
  {
    id: 3,
    name: "Cold-Pressed Groundnut Oil",
    description: "Pure groundnut oil without any additives or preservatives. Great for high-heat cooking. Rich source of Vitamin E.",
    price: 299,
    category: "Oils",
    image: groundnutOilImage,
    featured: false
  },
  {
    id: 4,
    name: "Premium Cold-Pressed Mustard Oil",
    description: "Authentic mustard oil with a distinctive flavor profile. Traditionally used in Indian cuisine for cooking and massage.",
    price: 349,
    category: "Oils",
    image: mustardOilImage,
    featured: true
  },
  
  // Millets
  {
    id: 5,
    name: "Premium Millets Mix",
    description: "Organic blend of various millets including ragi, jowar, and bajra. High in fiber and nutrients. Perfect for healthy eating.",
    price: 189,
    category: "Millets",
    image: milletsImage,
    featured: true
  },

  // Dhals & Pulses
  {
    id: 6,
    name: "Premium Dhals Collection",
    description: "Assorted organic dhals including toor dal, moong dal, and masoor dal. Fresh and protein-rich. Perfect for daily cooking.",
    price: 249,
    category: "Dhals & Pulses",
    image: dhalsImage,
    featured: true
  },

  // Dry Fruits
  {
    id: 7,
    name: "Premium Dry Fruits Mix",
    description: "Organic assortment of almonds, cashews, raisins, and more. Fresh, premium quality. Rich in nutrients and antioxidants.",
    price: 599,
    category: "Dry Fruits",
    image: dryFruitsImage,
    featured: false
  },

  // Atta & Flours
  {
    id: 8,
    name: "Organic Whole Wheat Atta",
    description: "100% pure whole wheat flour. Stone-ground traditionally. Perfect for making soft rotis and chapatis. No additives.",
    price: 129,
    category: "Atta & Flours",
    image: attaImage,
    featured: true
  },

  // Ghee
  {
    id: 9,
    name: "Pure Cow Ghee",
    description: "Traditionally made, pure cow ghee. Rich golden color. Perfect for cooking, religious rituals, and Ayurvedic use.",
    price: 799,
    category: "Ghee",
    image: gheeImage,
    featured: true
  },

  // Honey
  {
    id: 10,
    name: "Raw Unfiltered Honey",
    description: "Pure raw honey, unfiltered and unheated. Natural crystallization. Rich in enzymes and nutrients. Best quality Indian honey.",
    price: 349,
    category: "Honey",
    image: honeyImage,
    featured: false
  },

  // Batters
  {
    id: 11,
    name: "Traditional Idli Dosa Batter",
    description: "Freshly fermented idli dosa batter. Made with quality rice and urad dal. Ready to use. No preservatives.",
    price: 89,
    category: "Batters",
    image: batterImage,
    featured: true
  },

  {
    id: 12,
    name: "Complete Pantry Bundle",
    description: "Curated selection of our bestselling items. Oils, dhals, ghee, honey, and more. Perfect starter pack.",
    price: 1999,
    category: "All",
    image: heroImage,
    featured: false
  }
];

export { heroImage };