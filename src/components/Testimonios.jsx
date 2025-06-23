import { useRef, useEffect } from "react";
import styles from "./Testimonios.module.css";

// ✅ Imágenes importadas
import manuelaImg from "@/assets/manuela-testimonio.png";
import manuImg from "@/assets/manu-testimonio.png";
import alejandraImg from "@/assets/alejandra-testimonio.png";
import valeriaImg from "@/assets/valeria-testimonio.png";
import anaImg from "@/assets/ana-testimonio.png";

// ✅ Lista de testimonios
const testimonios = [
  {
    nombre: "Natalia Pérez",
    mensaje: "Todo llegó como lo soñé.",
    imagen: manuelaImg,
  },
  {
    nombre: "Manu Castaño",
    mensaje: "Las niñas quedaron encantadas con los detalles.",
    imagen: manuImg,
  },
  {
    nombre: "Alejandra Molina",
    mensaje: "Sabor a Felicidad superó todas mis expectativas.",
    imagen: alejandraImg,
  },
  {
    nombre: "Ana Vélez",
    mensaje: "Todo espectacular y el servicio único.",
    imagen: anaImg,
  },
  {
    nombre: "Valeria Martínez",
    mensaje: "¡Qué chimba de comida!",
    imagen: valeriaImg,
  },
];

const Testimonios = () => {
  const sliderTrackRef = useRef(null);

  useEffect(() => {
    const track = sliderTrackRef.current;
    let timeout;

    const handleScroll = () => {
      // Pausa la animación al hacer scroll
      if (track) {
        track.style.animationPlayState = "paused";
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          track.style.animationPlayState = "running";
        }, 2500); // Reactiva la animación después de 2.5s sin movimiento
      }
    };

    if (track) {
      track.addEventListener("wheel", handleScroll);
      track.addEventListener("touchmove", handleScroll);
    }

    return () => {
      if (track) {
        track.removeEventListener("wheel", handleScroll);
        track.removeEventListener("touchmove", handleScroll);
      }
    };
  }, []);

  return (
    <section className={styles.testimonios} id="testimonios">
      <h2 className={styles.titulo}>Lo que dicen nuestros clientes</h2>

      {/* Cinta deslizante */}
      <div className={styles.sliderWrapper}>
        <div className={styles.sliderTrack} ref={sliderTrackRef}>
          {[...testimonios, ...testimonios].map((t, index) => (
            <div className={styles.card} key={index}>
              <img
                src={t.imagen}
                alt={`Foto de ${t.nombre}`}
                className={styles.avatar}
                loading="lazy"
              />
              <p className={styles.mensaje}>“{t.mensaje}”</p>
              <span className={styles.nombre}>– {t.nombre}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
