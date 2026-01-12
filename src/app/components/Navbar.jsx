"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const NAVBAR_HEIGHT = 85;

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "hero" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT;
    window.scrollTo({ top: y, behavior: "smooth" });
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (!section) return;
        const rect = section.getBoundingClientRect();
        if (rect.top <= NAVBAR_HEIGHT && rect.bottom > NAVBAR_HEIGHT) {
          setActiveSection(item.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md px-8 py-4 flex justify-between items-center"
    >
      {/* Logo */}
      <div
        className="cursor-pointer"
        onClick={() => scrollToSection("hero")}
      >
        {/* <Image src="/assets/navbar_logo.svg" alt="Logo" width={150} height={42} /> */}
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-white">
        {navItems.map((item) => (
          <li
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`cursor-pointer transition-colors duration-300 ${
              activeSection === item.id ? "text-indigo-400 font-semibold" : ""
            }`}
          >
            {item.name}
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full right-0 mt-2 bg-black/80 text-white p-4 flex flex-col gap-3 rounded-md backdrop-blur-md">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-left px-2 py-1 rounded ${
                activeSection === item.id ? "text-indigo-400 font-semibold" : ""
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </motion.nav>
  );
}
