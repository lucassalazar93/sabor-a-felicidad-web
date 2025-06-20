// src/pages/Ofrecemos.jsx
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./Ofrecemos.module.css";

// ✅ Importaciones reales desde assets
import desayunoImg from "@/assets/desayuno.jpg";
import postresImg from "@/assets/postres.jpg";
import snacksImg from "@/assets/snack.jpeg";
import rapidasImg from "@/assets/rapidas.png";
import tipicaImg from "@/assets/tipica.png";
import gourmetImg from "@/assets/gourmet.jpg";

// ✅ Opciones con imágenes importadas
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
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section className={styles.ofrecemos} id="ofrecemos">
      <h2 className={styles.title} data-aos="fade-up">
        Elige tu sabor favorito
      </h2>
      <div className={styles.grid}>
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
    </section>
  );
};

export default Ofrecemos;
