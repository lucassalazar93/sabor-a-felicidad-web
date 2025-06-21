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
    if (!mostrarHistoria) {
      setTimeout(() => {
        document
          .querySelector(".historia-expandida")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  return (
    <section className="sobre-nosotros" id="sobre-nosotros">
      <div className="container-nosotros">
        {/* IMAGEN */}
        <div
          className="nosotros-imagen"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <img src={noreImg} alt="Nore - Fundadora" />
        </div>

        {/* TEXTO */}
        <div
          className="nosotros-texto"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <h2>Una historia que se cocina con amor 🍓</h2>

          <p>
            Sabor a Felicidad nació desde mi corazón. No como un negocio, sino
            como un acto de amor. Un sueño que comenzó con una idea sencilla:{" "}
            <em>hacer que cada entrega se sienta como un abrazo.</em>
          </p>

          <p>
            Aquí no solo preparamos alimentos.{" "}
            <strong>"Creamos momentos"</strong>
            <br />
            Pequeños instantes que transforman un día común en algo especial.
            Porque cuando algo está hecho con intención, se nota…
          </p>

          {/* Texto para abrir historia */}
          <p className="abrir-historia" onClick={toggleHistoria}>
            Quiero leer la historia completa <span className="flecha">⬇️</span>
          </p>

          {/* HISTORIA EXPANDIDA */}
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
                lleva dentro una promesa silenciosa:{" "}
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
                palabras: <em>te pienso, te cuido, te celebro.</em>
              </p>

              <p className="cerrar-historia" onClick={toggleHistoria}>
                Cerrar historia <span className="flecha">⬆️</span>
              </p>
            </div>
          )}

          {/* Botón centrado al final del texto */}
          <div
            className="btn-texto-centro"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <a href="#categorias" className="btn-secundario">
              Descubre nuestras recetas 🍓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreNosotros;
