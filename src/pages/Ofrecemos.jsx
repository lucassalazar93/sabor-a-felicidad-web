// src/pages/Ofrecemos.jsx
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./Ofrecemos.module.css";

const opciones = [
  {
    nombre: "Desayunos",
    imagen: "/images/desayuno.png",
    descripcion: "Inspira desde temprano con sabor y emoción.",
    categoria: "desayunos",
  },
  {
    nombre: "Postres",
    imagen: "/images/postres.png",
    descripcion: "Un toque dulce para momentos especiales.",
    categoria: "postres",
  },
  {
    nombre: "Snacks",
    imagen: "/images/snakc.png",
    descripcion: "Ideal para pausas con propósito.",
    categoria: "snacks",
  },
  {
    nombre: "Rapidas",
    imagen: "/images/rapidas.png",
    descripcion: "Ideal para pausas con propósito.",
    categoria: "rapidas",
  },
  {
    nombre: "Típica",
    imagen: "/images/tipica.png",
    descripcion: "Sabores de nuestra tierra, con orgullo.",
    categoria: "tipica",
  },
  {
    nombre: "Gourmet",
    imagen: "/images/gourmet.png",
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
            <img src={item.imagen} alt={item.nombre} className={styles.img} />
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
