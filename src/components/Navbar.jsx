import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import logo from "@/assets/logo.svg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loaded, setLoaded] = useState(false); // para animación

  useEffect(() => {
    // Detectar scroll
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Activar animación de entrada
    setTimeout(() => {
      setLoaded(true);
    }, 100);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        {/* Branding: Logo + Nombre con animación */}
        <a href="#inicio" onClick={(e) => handleNavigation(e, "#inicio")}>
          <div className={`${styles.branding} ${loaded ? styles.loaded : ""}`}>
            <img
              src={logo}
              alt="Sabor a Felicidad - Logo"
              className={styles.logo}
            />
            {!scrolled && (
              <span className={styles.brandText}>SABOR A FELICIDAD</span>
            )}
          </div>
        </a>

        {/* Menú principal */}
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
          {/* Solo móvil */}
          <li className={styles.contactoMobile}>
            <a href="tel:+573507881893">📞 350 788 18 93</a>
          </li>
        </ul>

        {/* Teléfono en escritorio */}
        <div className={styles.contacto}>
          <a href="tel:+573507881893">📞 350 788 18 93</a>
        </div>

        {/* Menú hamburguesa */}
        <div
          className={styles.burger}
          onClick={() => setMenuOpen((prev) => !prev)}
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
