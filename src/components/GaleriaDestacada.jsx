// GaleriaDestacada.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./GaleriaDestacada.module.css";

// Importación de imágenes reales
import imagen1 from "@/assets/galeria/entregaConAmor.jpeg";
import imagen2 from "@/assets/galeria/desayuno.png";
import imagen3 from "@/assets/galeria/corporativo.jpeg";
import imagen4 from "@/assets/galeria/DiaDelPadre.jpg";
import imagen5 from "@/assets/galeria/DiaDeLaMujer.jpeg";
import imagen6 from "@/assets/galeria/cajaHamburguesa.jpeg";

const imagenes = [
  {
    src: imagen1,
    alt: "Desayuno entregado con amor",
    etiqueta: "💖 Entregado con amor",
  },
  {
    src: imagen2,
    alt: "Pedido Día de la Madre",
    etiqueta: "🥓 Desayuno",
  },
  {
    src: imagen3,
    alt: "Detalle para aniversario",
    etiqueta: "👩🏻‍🍼 Dia De La Madre",
  },
  {
    src: imagen4,
    alt: "Sorpresa corporativa",
    etiqueta: "👨🏻‍👧🏻‍👧🏻 Dia Del Padre",
  },
  {
    src: imagen5,
    alt: "Pedido con mensaje especial",
    etiqueta: "💖 Dia De La Mujer",
  },
  {
    src: imagen6,
    alt: "Caja romántica",
    etiqueta: "🍔 Almuerzo Corporativo",
  },
];

const GaleriaDestacada = () => {
  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section className={styles.galeriaSection}>
      <div className={styles.textoIntro}>
        <h2>💞 Entregas que abrazan el corazón</h2>
        <p>
          Cada entrega es una historia real. Mira cómo hemos hecho que muchas
          personas se sientan amadas, celebradas y recordadas.
        </p>
      </div>

      <div className={styles.sliderContainer}>
        <div className={styles.sliderTrack}>
          {imagenes.map((img, i) => (
            <div
              className={`${styles.card} ${styles[`puzzle${(i % 5) + 1}`]}`}
              key={i}
              data-aos="zoom-in-up"
              data-aos-delay={i * 100}
              data-aos-offset="100"
            >
              <img src={img.src} alt={img.alt} />
              <div className={styles.etiqueta}>{img.etiqueta}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.cta}>
        <p>
          ¿Y si el próximo momento inolvidable fuera para ti o alguien especial?
        </p>
        <a href="#cotizar" className={styles.boton}>
          📲 Cotiza Con Nosotros
        </a>
      </div>
    </section>
  );
};

export default GaleriaDestacada;
