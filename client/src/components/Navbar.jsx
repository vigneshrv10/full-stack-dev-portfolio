import React, { useState, useEffect } from "react";
import { Link } from "react-scroll"; // Or just use a tags with href
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { PERSONAL_DETAILS } from "../constants";

const NAV_LINKS = [
    { id: "projects", title: "Projects" },
    { id: "experience", title: "Experience" },
    { id: "skills", title: "Skills" },
    { id: "education", title: "Education" },
    { id: "contact", title: "Contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-primary/90 backdrop-blur-md shadow-lg py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                <Link
                    to="hero"
                    smooth={true}
                    duration={500}
                    className="text-2xl font-bold cursor-pointer text-white tracking-tighter hover:text-accent transition-colors"
                >
                    V<span className="text-accent">.</span>RV
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.id}
                            to={link.id}
                            smooth={true}
                            duration={500}
                            className="text-sm font-medium text-gray-300 hover:text-accent cursor-pointer transition-colors uppercase tracking-wide"
                        >
                            {link.title}
                        </Link>
                    ))}
                    <a
                        href={PERSONAL_DETAILS.resumeLink}
                        target="_blank"
                        rel="noreferrer"
                        className="px-5 py-2 text-sm font-bold text-primary bg-accent rounded-full hover:bg-white transition-colors"
                    >
                        Resume
                    </a>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl focus:outline-none">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-secondary overflow-hidden"
                    >
                        <div className="flex flex-col items-center py-6 space-y-4">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.id}
                                    to={link.id}
                                    smooth={true}
                                    duration={500}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg text-gray-300 hover:text-accent cursor-pointer"
                                >
                                    {link.title}
                                </Link>
                            ))}
                            <a
                                href={PERSONAL_DETAILS.resumeLink}
                                target="_blank"
                                rel="noreferrer"
                                className="px-6 py-2 text-primary bg-accent rounded-full font-bold hover:bg-white transition-colors"
                            >
                                Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
