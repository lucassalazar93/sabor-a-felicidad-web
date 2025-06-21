import { useEffect } from "react";
import AOS from "aos";
import styles from "./CelebracionesEspeciales.module.css";

// ✅ Importación profesional de imágenes
import ocasion1 from "@/assets/ocasiones/ocasiones1.png";
import ocasion2 from "@/assets/ocasiones/ocasiones2.png";
import ocasion3 from "@/assets/ocasiones/ocasiones3.png";
import ocasion4 from "@/assets/ocasiones/ocasiones4.png";
import ocasion5 from "@/assets/ocasiones/ocasiones5.png";
import ocasion6 from "@/assets/ocasiones/ocasiones6.png";

const tarjetas = [
  {
    titulo: "Navidad",
    activa: false,
    img: ocasion6,
    texto: "Dulces y cenas mágicas para compartir en familia.",
  },
  {
    titulo: "Día del Padre",
    activa: false,
    img: ocasion1,
    texto: "Regalos que saben a orgullo y gratitud.",
  },
  {
    titulo: "Día de la Madre",
    activa: false,
    img: ocasion2,
    texto: "Delicias que expresan todo tu amor.",
  },
  {
    titulo: "Día de la Mujer",
    activa: false,
    img: ocasion3,
    texto: "Celebramos su esencia con detalles únicos.",
  },
  {
    titulo: "Día del Hombre",
    activa: false,
    img: ocasion4,
    texto: "Sabores con carácter para sorprender.",
  },
  {
    titulo: "Amor y Amistad",
    activa: false,
    img: ocasion5,
    texto: "Detalles dulces para regalar con el corazón.",
  },
];

const CelebracionesEspeciales = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const scrollSlider = (direction) => {
    const container = document.getElementById("celebracionesSlider");
    if (container) {
      container.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={styles.celebraciones} id="celebraciones">
      <h2 className={styles.titulo}>🎉 Celebraciones Especiales</h2>
      <p className={styles.subtitulo}>
        Haz cada fecha inolvidable con nuestros sabores únicos.
      </p>

      <div className={styles.sliderWrapper}>
        <button
          className={styles.arrowLeft}
          onClick={() => scrollSlider("left")}
        >
          ◀︎
        </button>

        <div className={styles.grid} id="celebracionesSlider">
          {tarjetas.map((t, i) => (
            <div
              key={i}
              className={`${styles.card} ${
                !t.activa ? styles.desactivada : ""
              }`}
              data-aos="zoom-in-up"
              data-aos-delay={i * 100}
            >
              <img
                src={t.img}
                alt={t.titulo}
                className={styles.img}
                loading="lazy"
              />
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

        <button
          className={styles.arrowRight}
          onClick={() => scrollSlider("right")}
        >
          ▶︎
        </button>
      </div>
    </section>
  );
};

export default CelebracionesEspeciales;
