import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import FeaturedProducts from "../components/FeaturedProducts";
import { useProductStore } from "../stores/useProductStore";

const categories = [
  { href: "/jeans", name: "Jeans", imageUrl: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=500&q=60" },
  { href: "/t-shirts", name: "T-shirts", imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=60" },
  { href: "/shoes", name: "Shoes", imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=60" },
  { href: "/glasses", name: "Glasses", imageUrl: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=500&q=60" },
  { href: "/jackets", name: "Jackets", imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=500&q=60" },
  { href: "/suits", name: "Suits", imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=500&q=60" },
  { href: "/bags", name: "Bags", imageUrl: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=500&q=60" },
  { href: "/cosmetics", name: "Cosmetics", imageUrl: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=500&q=60" },
  {
    href: "/artificial jewellery",
    name: "Artificial Jewellery",
    imageUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=500&q=60",
  },
];

const HomePage = () => {
  const { fetchFeaturedProducts, products, isLoading } = useProductStore();

  useEffect(() => {
    fetchFeaturedProducts();
  }, [fetchFeaturedProducts]);

    return (
    <div className="relative min-h-screen text-text-main">
      
      {/* HERO SECTION - Upgraded for a premium feel */}
      <section className="pt-12 sm:pt-20 pb-12 text-center px-4 max-w-4xl mx-auto">        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
          Explore Our{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-indigo-400">
            Categories
          </span>
        </h1>

        <p className="text-base sm:text-lg text-text-muted mt-6 max-w-2xl mx-auto leading-relaxed">
          Discover the latest trends in eco-friendly fashion. High-quality materials, curated just for you.
        </p>
      </section>

      {/* CATEGORIES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {categories.map((category) => (
            <CategoryItem key={category.name} category={category} />
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      {!isLoading && products.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="flex flex-col gap-8">
            {/* Added a subtle section header for better visual hierarchy */}
            <h2 className="text-3xl font-bold text-center">
              Featured <span className="text-primary">Products</span>
            </h2>
            <FeaturedProducts featuredProducts={products} />
          </div>
        </section>
      )}
    </div>
  );
};

export default HomePage;