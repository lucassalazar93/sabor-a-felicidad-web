// src/components/SobreNosotros.jsx
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./SobreNosotros.css";
import noreImg from "@/assets/nore-perfil.png";

const SobreNosotros = () => {
  const [mostrarHistoria, setMostrarHistoria] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const toggleHistoria = () => {
    setMostrarHistoria((prev) => !prev);
  };

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
            Sabor a Felicidad nació desde mi corazón. No como un negocio, sino
            como un acto de amor. Un sueño que comenzó con una idea sencilla:
            <em> hacer que cada entrega se sienta como un abrazo.</em>
          </p>
          <p>
            Aquí no solo preparamos alimentos.{" "}
            <strong> Creamos momentos.</strong>
            Pequeños instantes que transforman un día común en algo especial.
            Porque cuando algo está hecho con intención, se nota…
          </p>

          {!mostrarHistoria && (
            <button
              onClick={toggleHistoria}
              className="btn-sobre"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              Descubre nuestra historia
            </button>
          )}

          {mostrarHistoria && (
            <div
              className="historia-expandida"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <p>Se siente incluso antes de abrir el empaque.</p>
              <p>
                Yo soy <strong>Nore</strong>, fundadora y soñadora de este
                proyecto. Cada receta, cada cinta, cada fruta seleccionada,
                lleva dentro una promesa silenciosa:
                <em>“Eres importante. Esto es para ti.”</em>
              </p>

              <h4>💖 Lo que nos mueve:</h4>
              <ul>
                <li>
                  ❤ Cuidamos cada detalle como si fuera para alguien que amamos
                </li>
                <li>
                  🥗 Elegimos ingredientes frescos, conscientes y con propósito
                </li>
                <li>⏰ Valoramos el tiempo y cumplimos con compromiso real</li>
                <li>
                  💫 Y lo más importante: ponemos alma en cada preparación
                </li>
              </ul>

              <p>
                Gracias por estar aquí. Gracias por permitirnos llegar a tu vida
                con algo más que comida.
              </p>
              <p>
                <strong>Sabor a Felicidad</strong> es una forma de decirte, sin
                palabras:
                <em> te pienso, te cuido, te celebro.</em>
              </p>

              <button onClick={toggleHistoria} className="btn-sobre cerrar">
                Cerrar historia
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SobreNosotros;
