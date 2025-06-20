// src/components/Testimonios.jsx
import styles from "./Testimonios.module.css";

const testimonios = [
  {
    nombre: "Natalia Perez.",
    mensaje: "Todo llego como lo soñe.",
    imagen: "/images/manuela-testimonio.png",
  },
  {
    nombre: "Manu Castaño.",
    mensaje: "Las niñas quedaron encantadas con los Detalles",
    imagen: "/images/manu-testimonio.png",
  },
  {
    nombre: "alejandra Molina.",
    mensaje: "Sabor a Felicidad superó todas mis expectativas.",
    imagen: "/images/alejandra-testimonio.png",
  },
];

const Testimonios = () => {
  return (
    <section className={styles.testimonios}>
      <h2 className={styles.titulo}>Lo que dicen nuestros clientes</h2>
      <div className={styles.grid}>
        {testimonios.map((t, index) => (
          <div className={styles.card} key={index}>
            <img src={t.imagen} alt={t.nombre} className={styles.avatar} />
            <p className={styles.mensaje}>“{t.mensaje}”</p>
            <span className={styles.nombre}>– {t.nombre}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonios;
