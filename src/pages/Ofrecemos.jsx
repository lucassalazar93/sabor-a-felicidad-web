import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./Ofrecemos.module.css";

import desayunoImg from "@/assets/desayuno.jpg";
import postresImg from "@/assets/postres.jpg";
import snacksImg from "@/assets/snack.jpeg";
import rapidasImg from "@/assets/rapidas.png";
import tipicaImg from "@/assets/tipica.png";
import gourmetImg from "@/assets/gourmet.jpg";

const opciones = [
  {
    nombre: "Desayunos",
    imagen: desayunoImg,
    descripcion: "Inspira desde temprano con sabor y emoción.",
    categoria: "desayunos",
  },
  {
    nombre: "Postres",
    imagen: postresImg,
    descripcion: "Un toque dulce para momentos especiales.",
    categoria: "postres",
  },
  {
    nombre: "Snacks",
    imagen: snacksImg,
    descripcion: "Ideal para pausas con propósito.",
    categoria: "snacks",
  },
  {
    nombre: "Rápidas",
    imagen: rapidasImg,
    descripcion: "Ideal para quienes aman lo práctico.",
    categoria: "rapidas",
  },
  {
    nombre: "Típica",
    imagen: tipicaImg,
    descripcion: "Sabores de nuestra tierra, con orgullo.",
    categoria: "tipica",
  },
  {
    nombre: "Gourmet",
    imagen: gourmetImg,
    descripcion: "Delicias exclusivas para sorprender.",
    categoria: "gourmet",
  },
];

const Ofrecemos = () => {
  const [mostrarFlecha, setMostrarFlecha] = useState(true);
  const [animacionActiva, setAnimacionActiva] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 900, once: true });

    const container = document.getElementById("ofrecemosSlider");

    const handleInteraccion = () => {
      setMostrarFlecha(false);
      setAnimacionActiva(false); // ❌ Detiene la animación
      container?.removeEventListener("scroll", handleInteraccion);
      container?.removeEventListener("touchstart", handleInteraccion);
    };

    container?.addEventListener("scroll", handleInteraccion);
    container?.addEventListener("touchstart", handleInteraccion);

    return () => {
      container?.removeEventListener("scroll", handleInteraccion);
      container?.removeEventListener("touchstart", handleInteraccion);
    };
  }, []);

  const scrollSlider = (direction) => {
    const container = document.getElementById("ofrecemosSlider");
    if (container) {
      container.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={styles.ofrecemos} id="ofrecemos">
      <h2 className={styles.title} id="categorias" data-aos="fade-up">
        Elige tu sabor favorito
      </h2>

      <div className={styles.sliderWrapper}>
        {/* Puedes activar la flecha izquierda si lo deseas */}
        {/* {mostrarFlecha && (
          <button
            className={styles.arrowLeft}
            onClick={() => scrollSlider("left")}
          >
            ◀︎
          </button>
        )} */}

        <div
          id="ofrecemosSlider"
          className={`${styles.grid} ${!animacionActiva ? styles.parada : ""}`}
        >
          {opciones.map((item, index) => (
            <div
              className={styles.card}
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={item.imagen}
                alt={`Categoría ${item.nombre}`}
                className={styles.img}
                loading="lazy"
              />
              <h3>{item.nombre}</h3>
              <p>{item.descripcion}</p>
              <Link to={`/categorias#${item.categoria}`} className={styles.btn}>
                Ver más
              </Link>
            </div>
          ))}
        </div>

        {mostrarFlecha && (
          <button
            className={styles.arrowRight}
            onClick={() => scrollSlider("right")}
          >
            ▶︎
          </button>
        )}
      </div>
    </section>
  );
};

export default Ofrecemos;
