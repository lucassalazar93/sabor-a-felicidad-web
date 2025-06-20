// src/components/CelebracionesEspeciales.jsx
import { useEffect } from "react";
import AOS from "aos";
import styles from "./CelebracionesEspeciales.module.css";

const tarjetas = [
  {
    titulo: "Navidad",
    activa: false,
    img: "/images/ocasiones/ocasiones6.png",
    texto: "Dulces y cenas mágicas para compartir en familia.",
  },
  {
    titulo: "Día del Padre",
    activa: false,
    img: "/images/ocasiones/ocasiones1.png",
    texto: "Regalos que saben a orgullo y gratitud.",
  },
  {
    titulo: "Día de la Madre",
    activa: false,
    img: "/images/ocasiones/ocasiones2.png",
    texto: "Delicias que expresan todo tu amor.",
  },
  {
    titulo: "Día de la Mujer",
    activa: false,
    img: "/images/ocasiones/ocasiones3.png",
    texto: "Celebramos su esencia con detalles únicos.",
  },
  {
    titulo: "Día del Hombre",
    activa: false,
    img: "/images/ocasiones/ocasiones4.png",
    texto: "Sabores con carácter para sorprender.",
  },
  {
    titulo: "Amor y Amistad",
    activa: false,
    img: "/images/ocasiones/ocasiones5.png",
    texto: "Detalles dulces para regalar con el corazón.",
  },
];

const CelebracionesEspeciales = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className={styles.celebraciones} id="celebraciones">
      <h2 className={styles.titulo}> Celebraciones Especiales</h2>
      <p className={styles.subtitulo}>
        Haz cada fecha inolvidable con nuestros sabores únicos.
      </p>

      <div className={styles.grid}>
        {tarjetas.map((t, i) => (
          <div
            key={i}
            className={`${styles.card} ${!t.activa ? styles.desactivada : ""}`}
            data-aos="zoom-in-up"
            data-aos-delay={i * 100}
          >
            <img src={t.img} alt={t.titulo} />
            <h3>{t.titulo}</h3>
            <p>{t.texto}</p>
            {t.activa ? (
              <button className={styles.boton}>Ver más</button>
            ) : (
              <span className={styles.label}>Próximamente</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CelebracionesEspeciales;
