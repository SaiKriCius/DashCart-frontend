import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";
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

/* ── tiny reusable section-fade-in wrapper ── */
const FadeInSection = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ── floating particle for the hero ── */
const FloatingParticle = ({ size, x, y, duration, delayVal }) => (
  <motion.div
    className="absolute rounded-full bg-primary/20 blur-sm"
    style={{ width: size, height: size, left: `${x}%`, top: `${y}%` }}
    animate={{
      y: [0, -30, 0],
      opacity: [0.3, 0.7, 0.3],
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration,
      delay: delayVal,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

/* ── stat counter animation ── */
const AnimatedCounter = ({ end, suffix = "", label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = end / 40;
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);
    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <div ref={ref} className="text-center">
      <span className="text-3xl sm:text-4xl font-extrabold text-primary tabular-nums">
        {count}
        {suffix}
      </span>
      <p className="text-text-muted text-sm mt-1 font-medium">{label}</p>
    </div>
  );
};

/* ═══════════════════ HOMEPAGE ═══════════════════ */
const HomePage = () => {
  const { fetchFeaturedProducts, products, isLoading } = useProductStore();

  useEffect(() => {
    fetchFeaturedProducts();
  }, [fetchFeaturedProducts]);

  /* particles data (generated once) */
  const particles = useRef(
    Array.from({ length: 18 }, (_, i) => ({
      id: i,
      size: Math.random() * 6 + 3,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 4 + 4,
      delayVal: Math.random() * 3,
    }))
  ).current;

  return (
    <div className="relative min-h-screen text-text-main bg-bg-base overflow-hidden">
      {/* ═══════════ 1. HERO BANNER ═══════════ */}
      <section className="relative w-full max-w-[1920px] mx-auto h-[92vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0 bg-black">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1920&q=80"
            alt="Fashion Hero"
            className="w-full h-full object-cover opacity-60"
            decoding="async"
          />
          {/* layered gradients for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-base via-bg-base/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-bg-base/50 via-transparent to-bg-base/50" />
          <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 z-[1] pointer-events-none">
          {particles.map((p) => (
            <FloatingParticle key={p.id} {...p} />
          ))}
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          {/* badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary font-semibold tracking-widest uppercase text-xs sm:text-sm">
              The Spring Collection
            </span>
          </motion.div>

          {/* headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight text-text-main leading-[1.05]"
          >
            Define Your <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-400 to-primary bg-[length:200%_auto] animate-[shimmer_3s_ease-in-out_infinite]">
              Personal Style.
            </span>
          </motion.h1>

          {/* subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-text-muted mt-6 max-w-2xl font-medium leading-relaxed"
          >
            Curated, sustainable fashion designed to elevate your everyday look
            with uncompromising quality.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-4 mt-10 justify-center"
          >
            <Link
              to="/category/t-shirts"
              className="group relative inline-flex items-center gap-2 px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-primary/40 hover:scale-[1.03] active:scale-[0.97]"
            >
              Shop Now
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/category/jackets"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-surface border border-border-subtle text-text-main font-semibold rounded-xl backdrop-blur-md hover:bg-surface-hover hover:border-primary/30 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
            >
              Browse Collections
            </Link>
          </motion.div>
        </div>

        {/* scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
        >
          <span className="text-text-muted/60 text-xs tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 text-text-muted/50" />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════ 2. SOCIAL-PROOF STATS ═══════════ */}
      <FadeInSection className="relative z-20 -mt-14 mb-20 px-4">
        <div className="max-w-5xl mx-auto bg-surface/80 backdrop-blur-2xl border border-border-subtle rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border-subtle">
            <div className="p-6 md:p-8">
              <AnimatedCounter end={50} suffix="K+" label="Happy Customers" />
            </div>
            <div className="p-6 md:p-8">
              <AnimatedCounter end={200} suffix="+" label="Premium Brands" />
            </div>
            <div className="p-6 md:p-8">
              <AnimatedCounter end={4} suffix=".9" label="Average Rating" />
            </div>
            <div className="p-6 md:p-8">
              <AnimatedCounter end={30} suffix=" Day" label="Free Returns" />
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* ═══════════ 3. BRAND-TRUST STRIP ═══════════ */}
      <FadeInSection className="mb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                Icon: Truck,
                title: "Free Global Delivery",
                desc: "On all orders over ₹2000",
              },
              {
                Icon: RotateCcw,
                title: "30-Day Returns",
                desc: "No questions asked",
              },
              {
                Icon: ShieldCheck,
                title: "Secure Checkout",
                desc: "100% encrypted payments",
              },
            ].map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group flex items-center gap-4 p-6 bg-surface/60 backdrop-blur-lg border border-border-subtle rounded-2xl hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-text-main">{title}</h4>
                  <p className="text-sm text-text-muted">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* ═══════════ 4. FEATURED PRODUCTS ═══════════ */}
      {!isLoading && products?.length > 0 && (
        <FadeInSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col items-center mb-12 text-center">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold tracking-widest uppercase text-xs mb-4"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Must Haves
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-text-main">
              Trending Right Now
            </h2>
            <p className="text-text-muted mt-4 max-w-xl text-lg">
              Hand-picked favorites our customers can't stop talking about.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-indigo-400 mt-6 rounded-full" />
          </div>
          <FeaturedProducts featuredProducts={products} />
        </FadeInSection>
      )}

      {/* ═══════════ 5. CATEGORY BENTO GRID ═══════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-8">
        <FadeInSection>
          <div className="flex flex-col items-center mb-14 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-text-main">
              Shop by Category
            </h2>
            <p className="text-text-muted mt-4 max-w-2xl text-lg">
              Find exactly what you're looking for by browsing our curated
              departments.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-indigo-400 mt-6 rounded-full" />
          </div>
        </FadeInSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {categories.map((category, i) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <CategoryItem category={category} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════ 6. NEWSLETTER CTA ═══════════ */}
      <FadeInSection className="px-4 pb-24 pt-8">
        <div className="max-w-4xl mx-auto relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-surface to-indigo-500/10 border border-border-subtle p-10 sm:p-16 text-center">
          {/* decorative blobs */}
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-main mb-3">
              Stay in the Loop
            </h2>
            <p className="text-text-muted text-lg max-w-lg mx-auto mb-8">
              Be the first to know about new arrivals, exclusive offers, and
              style tips curated just for you.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3.5 rounded-xl bg-surface/80 border border-border-subtle text-text-main placeholder:text-text-muted/60 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
              />
              <button
                type="submit"
                className="px-7 py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default HomePage;
