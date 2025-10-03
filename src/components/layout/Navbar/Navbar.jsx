import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import logo from "@/assets/logo.svg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20); // 👈 corregido
    };

    const hero = document.getElementById("inicio");
    let observer = null; // 👈 corregido para JS

    if (hero) {
      observer = new IntersectionObserver(
        ([entry]) => {
          setShowNavbar(!entry.isIntersecting);
        },
        { threshold: 0.5 }
      );
      observer.observe(hero);
    } else {
      setShowNavbar(true);
    }

    setTimeout(() => setLoaded(true), 100);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (hero && observer) observer.unobserve(hero);
    };
  }, []);

  return (
    <nav
      className={`${styles.navbar} 
        ${scrolled ? styles.scrolled : ""} 
        ${showNavbar ? styles.visible : styles.hidden}`}
    >
      <div className={styles.container}>
        {/* Logo */}
        <a href="/#inicio" onClick={() => setMenuOpen(false)}>
          <div className={`${styles.branding} ${loaded ? styles.loaded : ""}`}>
            <img
              src={logo}
              alt="Sabor a Felicidad - Logo"
              className={styles.logo}
            />
          </div>
        </a>

        {/* Menú navegación */}
        <ul
          className={`${styles.navLinks} ${menuOpen ? styles.mobileOpen : ""}`}
        >
          <li>
            <a href="/#inicio" onClick={() => setMenuOpen(false)}>
              Inicio
            </a>
          </li>
          <li>
            <a href="/#sobre-nosotros" onClick={() => setMenuOpen(false)}>
              Nosotros
            </a>
          </li>
          <li>
            <a href="/#categorias" onClick={() => setMenuOpen(false)}>
              Categorías
            </a>
          </li>
          <li>
            <a href="/#cotizar" onClick={() => setMenuOpen(false)}>
              Cotizar
            </a>
          </li>
          <li>
            <a href="/#contacto" onClick={() => setMenuOpen(false)}>
              Contacto
            </a>
          </li>
          <li className={styles.contactoMobile}>
            <a href="tel:+573507881893">📲 350 788 18 93</a>
          </li>
        </ul>

        {/* Teléfono escritorio */}
        <div className={styles.contacto}>
          <a href="tel:+573507881893">📲 350 788 18 93</a>
        </div>

        {/* Menú hamburguesa */}
        <div className={styles.burger} onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`${styles.bar} ${menuOpen ? styles.bar1 : ""}`} />
          <div className={`${styles.bar} ${menuOpen ? styles.bar2 : ""}`} />
          <div className={`${styles.bar} ${menuOpen ? styles.bar3 : ""}`} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
