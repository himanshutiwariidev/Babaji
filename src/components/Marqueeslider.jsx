"use client";

const TOP_STRIP_ITEMS = [
  "100% Pure & Natural",
  "Direct from Mill to Home",
  "FSSAI Certified Quality",
  "No Artificial Additives",
  "Trusted Since Decades",
  "Bulk Orders Welcome",
  "Premium Edible Oils",
  "Cold-Pressed Kachi Ghani",
  "Fresh Stone-Ground Atta",
  "Fast Delivery Across India",
  "Wholesale & Retail Available",
];

const PRODUCTS = [
  { name: "Mustard Oil Kachi Ghani", category: "oil" },
  { name: "Yellow Mustard Oil",      category: "oil" },
  { name: "Soyabean Oil",            category: "oil" },
  { name: "Til Oil",                 category: "oil" },
  { name: "Sesame Oil",              category: "oil" },
  { name: "Barik Besan",             category: "grain" },
  { name: "Mota Besan",              category: "grain" },
  { name: "Dhokla Special Besan",    category: "grain" },
  { name: "Kadhi Pakoda Besan",      category: "grain" },
  { name: "MP Chakki Atta",          category: "flour" },
  { name: "Maida",                   category: "flour" },
  { name: "Poha",                    category: "rice" },
  { name: "Sooji",                   category: "rice" },
  { name: "Pulses",                  category: "pulse" },
  { name: "Oxy Boom Bar",            category: "clean", badge: "New" },
  { name: "Sky Active Bar",          category: "clean" },
];

const CATEGORY_COLORS = {
  oil:   "bg-amber-50 text-amber-700",
  grain: "bg-yellow-50 text-yellow-700",
  flour: "bg-orange-50 text-orange-700",
  rice:  "bg-green-50 text-green-700",
  pulse: "bg-lime-50 text-lime-700",
  clean: "bg-blue-50 text-blue-700",
};

function CategoryDot({ category }) {
  const colors = {
    oil:   "bg-amber-400",
    grain: "bg-yellow-400",
    flour: "bg-orange-400",
    rice:  "bg-green-400",
    pulse: "bg-lime-400",
    clean: "bg-blue-400",
  };
  return (
    <span className={`w-2 h-2 rounded-full flex-shrink-0 ${colors[category] || "bg-gray-300"}`} />
  );
}

export default function MarqueeSlider() {
  const doubled = [...PRODUCTS, ...PRODUCTS];
  const topDoubled = [...TOP_STRIP_ITEMS, ...TOP_STRIP_ITEMS];

  return (
    <div className="overflow-hidden border border-gray-100 ">

      {/* Top red strip */}
      <div className="bg-red-600 py-2.5 overflow-hidden">
        <div
          className="flex w-max"
          style={{ animation: "marquee-scroll 22s linear infinite" }}
        >
          {topDoubled.map((text, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 px-5 whitespace-nowrap"
            >
              <span className="text-[15px] font-semibold tracking-[0.08em] uppercase text-white">
                {text}
              </span>
              <span className="text-white/40 text-sm font-bold select-none">*</span>
            </span>
          ))}
        </div>
      </div>

      {/* Product pill strip */}
      <div className="bg-white border-t border-gray-100 py-3 overflow-hidden group">
        <div
          className="flex w-max group-hover:[animation-play-state:paused]"
          style={{ animation: "marquee-scroll 38s linear infinite" }}
        >
          {doubled.map((product, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2.5 px-3 whitespace-nowrap"
            >
              <span
                className={`inline-flex items-center gap-2 text-[13px] font-medium
                            px-4 py-1.5 rounded-full border border-gray-100
                            hover:border-red-400 hover:text-red-600
                            transition-colors duration-150 cursor-default
                            ${CATEGORY_COLORS[product.category] || "bg-gray-50 text-gray-700"}`}
              >
                <CategoryDot category={product.category} />
                {product.name}
                {product.badge && (
                  <span className="bg-red-600 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full tracking-wide">
                    {product.badge}
                  </span>
                )}
              </span>
              {i % 5 === 4 && (
                <span
                  className="w-1.5 h-1.5 rounded-full bg-red-600 flex-shrink-0 mx-1"
                  aria-hidden="true"
                />
              )}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}