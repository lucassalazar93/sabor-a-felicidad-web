// src/components/Footer.jsx
import "./Footer.css";
import logo from "../assets/logo.svg";
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
    <footer className="footer">
      <div className="footer-content">
        {/* Marca */}
        <div className="footer-brand">
          <img src={logo} alt="Sabor a Felicidad" />
          <p>Creando experiencias que alimentan el alma.</p>
        </div>

        {/* Navegación como el Navbar */}
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

        {/* Contacto con ID para scroll desde Navbar */}
        <div className="footer-contact" id="contacto">
          <h4>Contáctanos</h4>
          <p>
            <FaPhoneAlt /> 350 788 18 93
          </p>
          <p>
            <FaEnvelope /> saborafelicidad.nore@gmail.com
          </p>
          <p>
            <FaMapMarkerAlt />{" "}
            <a
              href="https://www.google.com/maps/place/Medellín,+Antioquia"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver ubicación en Google Maps
            </a>
          </p>
        </div>

        {/* Redes sociales */}
        <div className="footer-social">
          <h4>Síguenos</h4>
          <a
            href="https://www.instagram.com/saborafelicidad.nore/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com/tu_facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://wa.me/573507881893"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Mapa embebido */}
      <div className="footer-map">
        <iframe
          title="Mapa ubicación"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.7167895414796!2d-75.5772150257304!3d6.244198993745581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44281d0323ef7f%3A0x2f134f9f58d0b28c!2sMedellín%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1718652132354!5m2!1ses!2sco"
          width="100%"
          height="220"
          style={{ border: 0, borderRadius: "12px", marginTop: "2rem" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Pie inferior */}
      <div className="footer-bottom">
        <p>&copy; 2025 Sabor a Felicidad. Todos los derechos reservados.</p>
        <div className="footer-links">
          <a href="/terminos">Términos y condiciones</a>
          <span>•</span>
          <a href="/privacidad">Política de privacidad</a>
        </div>
        <p className="footer-credit">
          Diseñado con 🧑‍💻 por{" "}
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
