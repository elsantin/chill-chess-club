"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { imagePlaceholders } from "@/lib/utils";
import { GlassmorphicHeader } from "./neumorphic/GlassmorphicHeader";

export default function Header() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "courses", "method", "blog", "faq", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation items
  const navItems = [
    { key: "about", href: "#about" },
    { key: "courses", href: "#courses" },
    { key: "method", href: "#method" },
    { key: "blog", href: "#blog" },
    { key: "faq", href: "#faq" },
    { key: "contact", href: "#contact" },
  ];

  // Handle smooth scroll
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle language change
  const handleLanguageChange = (newLocale: string) => {
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  // Scroll to top
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <GlassmorphicHeader threshold={50}>
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={scrollToTop}
            className="flex items-center space-x-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={imagePlaceholders.logo.src}
              alt={imagePlaceholders.logo.alt}
              width={imagePlaceholders.logo.width}
              height={imagePlaceholders.logo.height}
              className="h-10 w-auto transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]"
              priority
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.key;
              return (
                <motion.a
                  key={item.key}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    isActive
                      ? "!text-sunset-400"
                      : "!text-white hover:!text-sunset-300"
                  }`}
                  style={{
                    color: isActive ? "#fb923c" : "#ffffff",
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t(`nav.${item.key}`)}
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-warmGray-800/50 rounded-lg shadow-neumorphic-sm -z-10"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.a>
              );
            })}

            {/* Language Selector */}
            <div className="flex items-center gap-2 ml-6 pl-6 border-l border-warmGray-600">
              <motion.button
                onClick={() => handleLanguageChange("es")}
                className={`px-4 py-2 rounded-lg font-bold transition-all duration-300 ${
                  locale === "es"
                    ? "bg-gradient-to-r from-sunset-500 to-rose-500 !text-white shadow-neumorphic-sm shadow-glow-sunset"
                    : "!text-white hover:!text-sunset-300 hover:bg-warmGray-800/50"
                }`}
                style={{
                  color: locale === "es" ? "#ffffff" : "#ffffff",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ES
              </motion.button>
              <motion.button
                onClick={() => handleLanguageChange("en")}
                className={`px-4 py-2 rounded-lg font-bold transition-all duration-300 ${
                  locale === "en"
                    ? "bg-gradient-to-r from-sunset-500 to-rose-500 !text-white shadow-neumorphic-sm shadow-glow-sunset"
                    : "!text-white hover:!text-sunset-300 hover:bg-warmGray-800/50"
                }`}
                style={{
                  color: locale === "en" ? "#ffffff" : "#ffffff",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                EN
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-warmGray-100 text-2xl p-2 rounded-lg hover:bg-warmGray-800/50 hover:text-sunset-400 transition-all duration-300"
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 border-t border-warmGray-700/50">
                <div className="flex flex-col space-y-2">
                  {navItems.map((item, index) => {
                    const isActive = activeSection === item.key;
                    return (
                      <motion.a
                        key={item.key}
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className={`px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                          isActive
                            ? "bg-warmGray-800 !text-sunset-400 shadow-neumorphic-sm"
                            : "!text-white hover:!text-sunset-300 hover:bg-warmGray-800/50"
                        }`}
                        style={{
                          color: isActive ? "#fb923c" : "#ffffff",
                        }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        {t(`nav.${item.key}`)}
                      </motion.a>
                    );
                  })}

                  {/* Mobile Language Selector */}
                  <div className="flex items-center gap-2 pt-4 border-t border-warmGray-700/50">
                    <span
                      className="!text-white text-sm font-semibold"
                      style={{ color: "#ffffff" }}
                    >
                      {locale === "es" ? "Idioma:" : "Language:"}
                    </span>
                    <motion.button
                      onClick={() => handleLanguageChange("es")}
                      className={`px-4 py-2 rounded-lg font-bold transition-all duration-300 ${
                        locale === "es"
                          ? "bg-gradient-to-r from-sunset-500 to-rose-500 !text-white shadow-neumorphic-sm"
                          : "!text-white hover:!text-sunset-300 hover:bg-warmGray-800/50"
                      }`}
                      style={{ color: "#ffffff" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      ES
                    </motion.button>
                    <motion.button
                      onClick={() => handleLanguageChange("en")}
                      className={`px-4 py-2 rounded-lg font-bold transition-all duration-300 ${
                        locale === "en"
                          ? "bg-gradient-to-r from-sunset-500 to-rose-500 !text-white shadow-neumorphic-sm"
                          : "!text-white hover:!text-sunset-300 hover:bg-warmGray-800/50"
                      }`}
                      style={{ color: "#ffffff" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      EN
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </GlassmorphicHeader>
  );
}
