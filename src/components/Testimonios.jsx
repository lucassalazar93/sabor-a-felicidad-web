// src/components/Testimonios.jsx
import styles from "./Testimonios.module.css";

// ✅ Importación de imágenes desde assets
import manuelaImg from "@/assets/manuela-testimonio.png";
import manuImg from "@/assets/manu-testimonio.png";
import alejandraImg from "@/assets/alejandra-testimonio.png";

// ✅ Lista de testimonios con imágenes importadas
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
];

const Testimonios = () => {
  return (
    <section className={styles.testimonios} id="testimonios">
      <h2 className={styles.titulo}>Lo que dicen nuestros clientes</h2>
      <div className={styles.grid}>
        {testimonios.map((t, index) => (
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
    </section>
  );
};

export default Testimonios;
