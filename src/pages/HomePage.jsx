import { useEffect } from "react";
import { ArrowRight, ShieldCheck, Truck, RotateCcw } from "lucide-react";
import CategoryItem from "../components/CategoryItem";
import FeaturedProducts from "../components/FeaturedProducts";
import { useProductStore } from "../stores/useProductStore";

const categories = [
  {
    href: "/jeans",
    name: "Jeans",
    imageUrl:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=500&q=60",
  },
  {
    href: "/t-shirts",
    name: "T-shirts",
    imageUrl:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=60",
  },
  {
    href: "/shoes",
    name: "Shoes",
    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=60",
  },
  {
    href: "/glasses",
    name: "Glasses",
    imageUrl:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=500&q=60",
  },
  {
    href: "/jackets",
    name: "Jackets",
    imageUrl:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=500&q=60",
  },
  {
    href: "/suits",
    name: "Suits",
    imageUrl:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=500&q=60",
  },
  {
    href: "/bags",
    name: "Bags",
    imageUrl:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=500&q=60",
  },
  {
    href: "/cosmetics",
    name: "Cosmetics",
    imageUrl:
      "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=500&q=60",
  },
  {
    href: "/artificial-jewellery",
    name: "Artificial Jewellery",
    imageUrl:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=500&q=60",
  },
];

const HomePage = () => {
  const { fetchFeaturedProducts, products, isLoading } = useProductStore();

  useEffect(() => {
    fetchFeaturedProducts();
  }, [fetchFeaturedProducts]);

  return (
    <div className="relative min-h-screen text-text-main bg-bg-base overflow-hidden">
      {/* 1. HERO BANNER */}
      <section className="relative w-full max-w-[1920px] mx-auto h-[85vh] sm:h-[90vh] flex items-center justify-center overflow-hidden shadow-2xl">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-black">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1920&q=80"
            alt="Fashion Hero"
            className="w-full h-full object-cover opacity-80"
            decoding="async"
          />
          {/* FIXED: Changed bg-linear-to-t to bg-gradient-to-t */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-base via-bg-base/60 to-transparent" />
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center mt-12">
          <span className="text-primary font-bold tracking-widest uppercase text-sm sm:text-base mb-4 drop-shadow-md">
            The Spring Collection
          </span>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter text-text-main drop-shadow-xl leading-none">
            Define Your <br className="hidden sm:block" />
            {/* FIXED: Changed bg-linear-to-r to bg-gradient-to-r */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400">
              Personal Style.
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-text-muted mt-6 max-w-2xl font-medium drop-shadow-sm">
            Curated, sustainable fashion designed to elevate your everyday look
            with uncompromising quality.
          </p>
        </div>
      </section>

      {/* 2. BRAND TRUST STRIP */}
      <section className="relative z-20 -mt-10 mb-16 px-4">
        <div className="max-w-6xl mx-auto bg-surface backdrop-blur-xl border border-border-subtle rounded-3xl shadow-2xl overflow-hidden">
          {/* FIXED: Removed gap-8 to prevent divide-y visual bugs. Added internal padding to items instead. */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border-subtle">
            {/* FIXED: Replaced arbitrary pt-4/pt-8 with consistent p-6 md:p-8 */}
            <div className="flex items-center justify-center gap-4 p-6 md:p-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Truck className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-text-main">
                  Free Global Delivery
                </h4>
                <p className="text-sm text-text-muted">
                  On all orders over $150
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 p-6 md:p-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <RotateCcw className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-text-main">30-Day Returns</h4>
                <p className="text-sm text-text-muted">No questions asked</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 p-6 md:p-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-text-main">Secure Checkout</h4>
                <p className="text-sm text-text-muted">
                  100% encrypted payments
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS */}
      {!isLoading && products?.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col items-center mb-10 text-center">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2">
              Must Haves
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-text-main">
              Trending Right Now
            </h2>
            <div className="w-24 h-1 bg-primary mt-6 rounded-full" />
          </div>
          <FeaturedProducts featuredProducts={products} />
        </section>
      )}

      {/* 4. THE CATEGORY 'BENTO' GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 pt-8">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-text-main">
            Shop by Category
          </h2>
          <p className="text-text-muted mt-4 max-w-2xl text-lg">
            Find exactly what you're looking for by browsing our curated
            departments.
          </p>
        </div>

        {/* FIXED: Changed lg:grid-cols-4 to md:grid-cols-3 so the 9 items form a perfect 3x3 grid without an orphaned card at the bottom */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {categories.map((category) => (
            <CategoryItem key={category.name} category={category} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
