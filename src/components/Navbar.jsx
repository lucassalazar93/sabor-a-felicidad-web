import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

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

  // Cierra menú en móvil y hace scroll suave
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
        <a href="#inicio">
          <img src="/images/logo.png" alt="Logo" className={styles.logo} />
        </a>

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

        <div className={styles.contacto}>
          <a href="tel:+573507881893">📞 350 788 18 93</a>
        </div>

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
