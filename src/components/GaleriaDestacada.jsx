import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./GaleriaDestacada.module.css";

// Imágenes
import imagen1 from "@/assets/galeria/entregaConAmor.jpeg";
import imagen2 from "@/assets/galeria/desayuno.png";
import imagen3 from "@/assets/galeria/corporativo.jpeg";
import imagen4 from "@/assets/galeria/DiaDelPadre.jpg";
import imagen5 from "@/assets/galeria/DiaDeLaMujer.jpeg";
import imagen6 from "@/assets/galeria/cajaHamburguesa.jpeg";
import imagen7 from "@/assets/galeria/postres.png";
import imagen8 from "@/assets/galeria/amigos.jpg";
import imagen9 from "@/assets/galeria/Sabor-que-se-comparte-con-alegría.jpg";
import imagen10 from "@/assets/galeria/navidad.jpg";
import imagen11 from "@/assets/galeria/tortas.jpg";
import imagen12 from "@/assets/galeria/arepaRellena.jpg";
import imagen13 from "@/assets/galeria/norePostre.jpg";
import imagen14 from "@/assets/galeria/estrella.jpg";
import imagen15 from "@/assets/galeria/horneado.jpg";
import imagen16 from "@/assets/galeria/sanduche.jpg";
import imagen17 from "@/assets/galeria/honeado2.jpg";

const imagenes = [
  {
    src: imagen1,
    alt: "Desayuno entregado con amor",
    etiqueta: "💖 Entregado con amor",
  },
  { src: imagen2, alt: "Pedido Día de la Madre", etiqueta: "🥛 Desayuno" },
  {
    src: imagen3,
    alt: "Detalle para aniversario",
    etiqueta: "👩🏻‍🥶 Día De La Madre",
  },
  {
    src: imagen4,
    alt: "Sorpresa corporativa",
    etiqueta: "👨🏻‍👧🏻‍👧🏻 Día Del Padre",
  },
  {
    src: imagen5,
    alt: "Pedido con mensaje especial",
    etiqueta: "💖 Día De La Mujer",
  },
  { src: imagen6, alt: "Caja romántica", etiqueta: "🍔 Almuerzo Corporativo" },
  {
    src: imagen7,
    alt: "Postres",
    etiqueta: "🍮 Delicias que acarician el alma",
  },
  {
    src: imagen8,
    alt: "Amigos",
    etiqueta: "🫶🏼 Donde nacen los momentos inolvidables",
  },
  {
    src: imagen9,
    alt: "Momentos",
    etiqueta: "😍 Sabor que se comparte con alegría",
  },
  {
    src: imagen10,
    alt: "Navidad",
    etiqueta: "💕 Regalos con alma y propósito",
  },
  { src: imagen11, alt: "Torta", etiqueta: "🎂 Sabores Que Abrazan" },
  { src: imagen12, alt: "Arepas", etiqueta: "🫓 ¡Ñam Arepa!" },
  { src: imagen13, alt: "Nore", etiqueta: "🍑 Postre con cariño de hogar" },
  { src: imagen14, alt: "Estrella", etiqueta: "🌟 Un deseo hecho postre" },
  { src: imagen15, alt: "Horneado", etiqueta: "🥖 Horneados con el alma" },
  { src: imagen16, alt: "Sanduche", etiqueta: "🥪 Delicia Artesanal" },
  { src: imagen17, alt: "Sanduche", etiqueta: "🥐 Delicias Doradas" },
];

const GaleriaDestacada = () => {
  const trackRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-in-out", once: true });

    const track = trackRef.current;
    let scrollAmount = 0.5;
    let frame;

    const autoScroll = () => {
      if (!isPaused && track) {
        track.scrollLeft += scrollAmount;

        // Reinicia al llegar al final real
        if (track.scrollLeft + track.clientWidth >= track.scrollWidth) {
          track.scrollLeft = 0;
        }
      }
      frame = requestAnimationFrame(autoScroll);
    };

    frame = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(frame);
  }, [isPaused]);

  const handleMouseDown = () => setIsPaused(true);
  const handleMouseUp = () => setIsPaused(false);
  const handleTouchStart = () => setIsPaused(true);
  const handleTouchEnd = () => setIsPaused(false);

  return (
    <section className={styles.galeriaSection}>
      <div className={styles.textoIntro}>
        <h2>💞 Entregas que abrazan el corazón</h2>
        <p>
          Cada entrega es una historia real. Mira cómo hemos hecho que muchas
          personas se sientan amadas, celebradas y recordadas.
        </p>
      </div>

      <div
        className={styles.sliderContainer}
        ref={trackRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className={styles.sliderTrack}>
          {imagenes.map((img, i) => (
            <div
              className={styles.card}
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 50}
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
