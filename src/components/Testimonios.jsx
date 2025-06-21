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
  return (
    <section className={styles.testimonios} id="testimonios">
      <h2 className={styles.titulo}>Lo que dicen nuestros clientes</h2>

      {/* Cinta deslizante */}
      <div className={styles.sliderWrapper}>
        <div className={styles.sliderTrack}>
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
