import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import logo from "@/assets/logo.png"; // ✅ Importación correcta

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Scroll suave + cerrar menú móvil
  const handleNavigation = (e, id) => {
    e.preventDefault();
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <a href="#inicio" onClick={(e) => handleNavigation(e, "#inicio")}>
          <img
            src={logo}
            alt="Sabor a Felicidad - Logo"
            className={styles.logo}
          />
        </a>

        {/* Links principales */}
        <ul
          className={`${styles.navLinks} ${menuOpen ? styles.mobileOpen : ""}`}
        >
          <li>
            <a href="#inicio" onClick={(e) => handleNavigation(e, "#inicio")}>
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#categorias"
              onClick={(e) => handleNavigation(e, "#categorias")}
            >
              Categorías
            </a>
          </li>
          <li>
            <a href="#cotizar" onClick={(e) => handleNavigation(e, "#cotizar")}>
              Cotizar
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              onClick={(e) => handleNavigation(e, "#contacto")}
            >
              Contacto
            </a>
          </li>
          <li className={styles.contactoMobile}>
            <a href="tel:+573507881893">📞 350 788 18 93</a>
          </li>
        </ul>

        {/* Teléfono visible solo en escritorio */}
        <div className={styles.contacto}>
          <a href="tel:+573507881893">📞 350 788 18 93</a>
        </div>

        {/* Menú hamburguesa móvil */}
        <div
          className={styles.burger}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Abrir menú de navegación"
        >
          <div className={`${styles.bar} ${menuOpen ? styles.bar1 : ""}`} />
          <div className={`${styles.bar} ${menuOpen ? styles.bar2 : ""}`} />
          <div className={`${styles.bar} ${menuOpen ? styles.bar3 : ""}`} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
