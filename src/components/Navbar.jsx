import { useState, useRef, useEffect } from "react";
import { ShoppingCart, LogIn, UserPlus, LogOut, Lock, Sun, Moon, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";
import { useThemeStore } from "../stores/useThemeStore";

const Navbar = () => {
    const { user, logout } = useUserStore();
    const isAdmin = user?.role === "admin";
    const { cart } = useCartStore();
    const { theme, toggleTheme } = useThemeStore();
    
    // Auth Dropdown State (Mobile)
    const [isAuthMenuOpen, setIsAuthMenuOpen] = useState(false);
    const authMenuRef = useRef(null);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (authMenuRef.current && !authMenuRef.current.contains(event.target)) {
                setIsAuthMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full bg-bg-base z-50 border-b border-border-subtle transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4">
                
                {/* ================= MOBILE NAVBAR ================= */}
                <div className="flex items-center justify-between sm:hidden">
                    {/* LOGO */}
                    <Link
                        to="/"
                        className="text-2xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-primary to-primary-dark tracking-wide"
                    >
                        Dash-Cart
                    </Link>

                    {/* RIGHT ACTIONS */}
                    <div className="flex items-center gap-3">
                        
                        {/* 🌞 THEME TOGGLE (MOBILE) 🌛 */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full text-text-muted hover:text-primary hover:bg-surface-hover transition-all duration-300"
                            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
                        >
                            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        {isAdmin && (
                            <Link
                                to="/secret-dashboard"
                                className="text-primary hover:text-primary-dark transition-colors"
                                title="Dashboard"
                            >
                                <Lock size={20} />
                            </Link>
                        )}

                        {user ? (
                            <>
                                <Link to="/cart" className="relative text-text-muted hover:text-primary transition-colors">
                                    <ShoppingCart size={22} />
                                    {cart.length > 0 && (
                                        <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-lg">
                                            {cart.length}
                                        </span>
                                    )}
                                </Link>

                                <button
                                    onClick={logout}
                                    className="text-text-muted hover:text-red-400 transition-colors"
                                    title="Logout"
                                >
                                    <LogOut size={20} />
                                </button>
                            </>
                        ) : (
                            <div className="relative" ref={authMenuRef}>
                                <button
                                    onClick={() => setIsAuthMenuOpen(!isAuthMenuOpen)}
                                    className={`p-2 rounded-full border transition-all shadow-sm ${
                                        isAuthMenuOpen 
                                            ? 'bg-primary/10 text-primary border-primary/30' 
                                            : 'bg-surface text-text-muted border-border-subtle hover:text-primary hover:bg-surface-hover'
                                    }`}
                                    title="Account Options"
                                >
                                    <User size={20} />
                                </button>

                                {/* Dropdown Menu */}
                                {isAuthMenuOpen && (
                                    <div className="absolute top-full right-0 mt-3 w-40 bg-bg-base border border-border-subtle rounded-xl shadow-2xl overflow-hidden z-50">
                                        <Link
                                            to="/login"
                                            onClick={() => setIsAuthMenuOpen(false)}
                                            className="flex items-center gap-2.5 px-4 py-3 text-sm font-medium text-text-main hover:bg-surface-hover hover:text-primary transition-colors"
                                        >
                                            <LogIn size={16} className="text-text-muted" /> Login
                                        </Link>
                                        <div className="h-px w-full bg-border-subtle" />
                                        <Link
                                            to="/signup"
                                            onClick={() => setIsAuthMenuOpen(false)}
                                            className="flex items-center gap-2.5 px-4 py-3 text-sm font-medium text-text-main hover:bg-surface-hover hover:text-primary transition-colors"
                                        >
                                            <UserPlus size={16} className="text-primary" /> Sign Up
                                        </Link>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {/* ================= DESKTOP NAVBAR ================= */}
                <div className="hidden sm:flex justify-between items-center">
                    {/* LOGO */}
                    <Link
                        to="/"
                        className="text-2xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-primary to-primary-dark tracking-wide hover:opacity-80 transition-opacity"
                    >
                        Dash-Cart
                    </Link>

                    <nav className="flex items-center gap-6">
                        <Link to="/" className="text-text-muted hover:text-primary font-medium transition-colors">
                            Home
                        </Link>

                        {isAdmin && (
                            <Link
                                to="/secret-dashboard"
                                className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 px-4 py-1.5 rounded-lg flex items-center gap-2 font-medium transition-all"
                            >
                                <Lock size={16} /> Dashboard
                            </Link>
                        )}

                        <div className="flex items-center gap-4 ml-2 border-l border-border-subtle pl-6">
                            
                            {/* 🌞 THEME TOGGLE (DESKTOP) 🌛 */}
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full text-text-muted hover:text-primary hover:bg-surface-hover transition-all duration-300"
                                title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
                            >
                                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                            </button>

                            {user ? (
                                <>
                                    <Link to="/cart" className="relative text-text-muted hover:text-primary transition-colors flex items-center gap-2 font-medium">
                                        <ShoppingCart size={20} />
                                        <span>Cart</span>
                                        {cart.length > 0 && (
                                            <span className="absolute -top-2 -left-2 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-lg">
                                                {cart.length}
                                            </span>
                                        )}
                                    </Link>

                                    <button
                                        onClick={logout}
                                        className="bg-surface-hover hover:bg-red-500/10 text-text-muted hover:text-red-400 border border-border-subtle hover:border-red-500/30 px-4 py-1.5 rounded-lg flex items-center gap-2 font-medium transition-all"
                                    >
                                        <LogOut size={16} /> Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link
                                        to="/login"
                                        className="bg-surface-hover hover:bg-surface text-text-main border border-border-subtle px-4 py-1.5 rounded-lg flex items-center gap-2 font-medium transition-all"
                                    >
                                        <LogIn size={16} /> Login
                                    </Link>
                                    <Link
                                        to="/signup"
                                        className="bg-primary hover:bg-primary-dark text-white px-4 py-1.5 rounded-lg flex items-center gap-2 font-medium transition-all active:scale-95 shadow-lg shadow-primary/20"
                                    >
                                        <UserPlus size={16} /> Sign Up
                                    </Link>
                                </>
                            )}
                        </div>
                    </nav>
                </div>
                
            </div>
        </header>
    );
};

export default Navbar;