import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/#insights" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = useCallback(
    (href: string) => {
      setMenuOpen(false);

      // Internal page link (e.g. /work, /about)
      if (!href.includes("#")) {
        setTimeout(() => {
          navigate(href);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 300);
        return;
      }

      // Hash link on homepage (e.g. /#services)
      const hash = href.split("#")[1];
      const basePath = href.split("#")[0] || "/";

      if (location.pathname === basePath || (basePath === "/" && location.pathname === "/")) {
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            const offset = 80;
            const y = el.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }, 300);
      } else {
        setTimeout(() => {
          navigate(basePath);
          // Wait for page to render, then scroll
          setTimeout(() => {
            const el = document.getElementById(hash);
            if (el) {
              const offset = 80;
              const y = el.getBoundingClientRect().top + window.scrollY - offset;
              window.scrollTo({ top: y, behavior: "smooth" });
            }
          }, 500);
        }, 300);
      }
    },
    [location.pathname, navigate]
  );

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md"
      >
        <div className="flex items-center justify-between px-6 md:px-12 py-5">
          <Link to="/" className="font-heading text-xl font-bold tracking-tight text-foreground">
            DEVSHUTTLE
          </Link>
          <div className="flex items-center gap-6">
            <a
              href="/#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("/#contact");
              }}
              className="hidden md:inline-block text-spaced hover-line text-foreground"
            >
              LET'S TALK
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center group"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-[5px]">
                <span
                  className={`block w-4 h-[1.5px] bg-background transition-transform duration-300 ${
                    menuOpen ? "rotate-45 translate-y-[3.25px]" : ""
                  }`}
                />
                <span
                  className={`block w-4 h-[1.5px] bg-background transition-transform duration-300 ${
                    menuOpen ? "-rotate-45 -translate-y-[3.25px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background flex items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                  className="font-heading text-4xl md:text-6xl font-light text-foreground hover:text-accent transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
