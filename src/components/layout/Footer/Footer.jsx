// src/components/Footer/Footer.jsx
import "./Footer.css";
import logo from "../../../assets/logo.svg";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      {/* Capa decorativa */}
      <div className="footer-overlay"></div>

      <div className="footer-content">
        {/* Marca */}
        <div className="footer-brand">
          <img src={logo} alt="Nore Quintero - Logo" />
          <p className="slogan">
            Creando experiencias que alimentan el alma ✨
          </p>
        </div>

        {/* Navegación */}
        <div className="footer-nav">
          <h4>Enlaces</h4>
          <ul>
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#sobre-nosotros">Nosotros</a>
            </li>
            <li>
              <a href="#categorias">Categorías</a>
            </li>
            <li>
              <a href="#cotizar">Cotizar</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div className="footer-contact" id="contacto">
          <h4>Contáctanos</h4>
          <p>
            <FaPhoneAlt /> <a href="tel:+573507881893">350 788 18 93</a>
          </p>
          <p>
            <FaEnvelope />{" "}
            <a href="mailto:norequintero.gourmet@gmail.com">
              norequintero.gourmet@gmail.com
            </a>
          </p>
          <p>
            <FaMapMarkerAlt />{" "}
            <a
              href="https://www.google.com/maps/place/Medellín,+Antioquia"
              target="_blank"
              rel="noopener noreferrer"
            >
              Medellín, Antioquia
            </a>
          </p>
        </div>

        {/* Redes sociales */}
        <div className="footer-social">
          <h4>Síguenos</h4>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/norequintero.gourmet/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://web.facebook.com/profile.php?id=61580371852313&locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://wa.me/573507881893"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Mapa */}
      <div className="footer-map">
        <iframe
          title="Mapa ubicación"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.7167895414796!2d-75.5772150257304!3d6.244198993745581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44281d0323ef7f%3A0x2f134f9f58d0b28c!2sMedellín%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1718652132354!5m2!1ses!2sco"
          width="100%"
          height="220"
          style={{ border: 0, borderRadius: "16px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Créditos */}
      <div className="footer-bottom">
        <p>© 2025 Nore Quintero. Todos los derechos reservados.</p>
        <div className="footer-links">
          <a href="/terminos">Términos y condiciones</a>
          <span>•</span>
          <a href="/privacidad">Política de privacidad</a>
        </div>
        <p className="footer-credit">
          Diseñado con ❤️ por{" "}
          <a
            href="https://lukbyte-my-website.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lucas Salazar Villa — Fundador de Lukbyte
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
