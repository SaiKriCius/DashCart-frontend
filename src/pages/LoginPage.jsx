import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  LogIn,
  Mail,
  Lock,
  ArrowRight,
  Loader,
  ShoppingBag,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { useUserStore } from "../stores/useUserStore";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, loading } = useUserStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="flex min-h-[calc(100vh-80px)] w-full items-center justify-center p-4 sm:p-6 lg:p-10 relative z-10">
      {/* Ambient Global Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* FLOAT CARD WRAPPER */}
      <div className="flex w-full max-w-[55rem] bg-surface backdrop-blur-3xl rounded-3xl overflow-hidden shadow-2xl shadow-primary/5 border border-border-subtle">
        {/* LEFT SIDE: Premium Hero Banner (Hidden on Mobile) */}
        <div className="hidden lg:flex lg:w-5/12 relative overflow-hidden bg-black flex-col justify-between p-8">
          {/* Background Image with Gradient Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1200&q=80"
              alt="Brand Apparel"
              className="w-full h-full object-cover opacity-60"
              decoding="async"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
          </div>

          {/* Top/Logo Area over Image */}
          <div className="relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/10 shadow-xl">
                <ShoppingBag className="w-5 h-5 text-primary" />
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-slate-400">
                DashCart
              </span>
            </div>
          </div>

          {/* Bottom Quote over Image */}
          <div className="relative z-10 max-w-md">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h1 className="text-3xl xl:text-4xl font-extrabold text-white leading-tight">
                Step back into style.
              </h1>
              <p className="mt-3 text-base text-slate-300">
                Access your personalized dashboard, manage your lifestyle, and
                discover exactly what you need.
              </p>

              <div className="mt-8 flex items-center gap-6">
                <div className="flex items-center gap-2 text-sm text-slate-300 font-medium">
                  <ShieldCheck className="w-5 h-5 text-primary" /> Verified
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300 font-medium">
                  <Zap className="w-5 h-5 text-indigo-400" /> Fast Login
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* RIGHT SIDE: The Form */}
        <div className="w-full lg:w-7/12 flex flex-col justify-center py-6 px-6 sm:px-10 lg:px-12 relative z-10">
          <div className="mx-auto w-full max-w-[22rem] sm:max-w-[24rem]">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="w-10 h-10 bg-primary/10 rounded-xl border border-primary/20 flex items-center justify-center mb-4 shadow-xl shadow-primary/10 lg:hidden">
                <ShoppingBag className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-text-main">
                Welcome Back
              </h2>
              <p className="mt-1.5 text-sm text-text-muted">
                Sign in to command your DashCart empire.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="mt-6"
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* EMAIL */}
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text-main mb-1.5"
                  >
                    Email Address
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-primary">
                      <Mail className="h-5 w-5 text-text-muted group-focus-within:text-primary transition-colors" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full px-3 py-2 pl-10 bg-surface-hover border border-border-subtle rounded-xl text-text-main placeholder-slate-500 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary focus:bg-surface transition-all duration-300 sm:text-sm shadow-inner"
                      placeholder="you@example.com"
                    />
                  </div>
                </motion.div>

                {/* PASSWORD */}
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-text-main mb-1.5"
                  >
                    Password
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-primary">
                      <Lock className="h-5 w-5 text-text-muted group-focus-within:text-primary transition-colors" />
                    </div>
                    <input
                      id="password"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full px-3 py-2 pl-10 bg-surface-hover border border-border-subtle rounded-xl text-text-main placeholder-slate-500 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary focus:bg-surface transition-all duration-300 sm:text-sm shadow-inner"
                      placeholder="••••••••"
                    />
                  </div>
                </motion.div>

                {/* SUBMIT BUTTON */}
                <motion.div variants={itemVariants} className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="group relative w-full flex justify-center py-2.5 px-4 rounded-xl shadow-lg shadow-primary/20 text-sm font-bold text-white overflow-hidden bg-primary hover:bg-primary-dark transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed border border-primary/50"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    <span className="relative flex items-center justify-center">
                      {loading ? (
                        <>
                          <Loader className="mr-2 h-5 w-5 animate-spin" />
                          Authenticating...
                        </>
                      ) : (
                        <>
                          <LogIn className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                          Secure Login
                        </>
                      )}
                    </span>
                  </button>
                </motion.div>
              </form>

              {/* SIGN UP LINK */}
              <motion.div
                variants={itemVariants}
                className="mt-6 pt-4 text-center"
              >
                <p className="text-sm text-text-muted">
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    className="font-semibold text-primary hover:text-indigo-400 transition-colors inline-flex items-center group"
                  >
                    Create one right now
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
