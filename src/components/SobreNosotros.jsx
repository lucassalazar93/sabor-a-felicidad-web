// src/components/SobreNosotros.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./SobreNosotros.css";
import noreImg from "@/assets/nore-perfil.png"; // Asegúrate de tener esta imagen

const SobreNosotros = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="sobre-nosotros" id="sobre-nosotros">
      <div className="container-nosotros">
        {/* IMAGEN IZQUIERDA */}
        <div
          className="nosotros-imagen"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <img src={noreImg} alt="Nore - Fundadora" />
        </div>

        {/* TEXTO A LA DERECHA */}
        <div
          className="nosotros-texto"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <h2>Una historia que se cocina con amor 🍓</h2>
          <p>
            En <strong>Sabor a Felicidad</strong>, cada desayuno nace con
            propósito:
            <br /> <em>nutrir el alma a través de pequeños gestos.</em>
          </p>
          <p>
            <strong>Nore</strong>, fundadora y soñadora, creó esta experiencia
            con el deseo de que cada entrega se sienta como un abrazo. Detrás de
            cada empaque hay cuidado, dedicación y un mensaje invisible:{" "}
            <em>“eres importante”</em>.
          </p>

          <ul>
            <li>💖 Detalles pensados desde el corazón</li>
            <li>⏰ Puntualidad y compromiso real</li>
            <li>🍓 Ingredientes frescos y conscientes</li>
          </ul>

          <a
            href="#contacto"
            className="btn-sobre"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            Descubre nuestra historia
          </a>
        </div>
      </div>
    </section>
  );
};

export default SobreNosotros;
