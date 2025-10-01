import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./CelebracionesEspeciales.module.css";

// ✅ Imágenes importadas
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
  const [animacionActiva, setAnimacionActiva] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const container = document.getElementById("celebracionesSlider");

    const detenerInteraccion = () => {
      setAnimacionActiva(false);
      container?.removeEventListener("scroll", detenerInteraccion);
      container?.removeEventListener("touchstart", detenerInteraccion);
    };

    container?.addEventListener("scroll", detenerInteraccion);
    container?.addEventListener("touchstart", detenerInteraccion);

    return () => {
      container?.removeEventListener("scroll", detenerInteraccion);
      container?.removeEventListener("touchstart", detenerInteraccion);
    };
  }, []);

  return (
    <section className={styles.celebraciones} id="celebraciones">
      <h2 className={styles.titulo}>Celebraciones Especiales</h2>
      <p className={styles.subtitulo}>
        Haz cada fecha inolvidable con nuestros sabores únicos.
      </p>

      <div className={styles.sliderWrapper}>
        <div
          className={`${styles.grid} ${!animacionActiva ? styles.parada : ""}`}
          id="celebracionesSlider"
        >
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
      </div>
    </section>
  );
};

export default CelebracionesEspeciales;
