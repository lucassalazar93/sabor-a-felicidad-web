import { useEffect } from "react";
import styles from "./CategoriaPage.module.css";
import BannerCategorias from "../components/BannerCategorias";

const categoriasData = {
  desayunos: {
    titulo: "Desayunos",
    descripcion: "Inspira tus mañanas con sabor y emoción.",
    items: [
      {
        nombre: "Desayuno Clásico",
        imagen: "/images/desayunos/desayuno1.png",
        descripcion: "Huevos, pan artesanal y fruta fresca.",
      },
      {
        nombre: "Tazón Energético",
        imagen: "/images/desayunos/desayuno2.png",
        descripcion: "Granola, yogurt y frutos del bosque.",
      },
      {
        nombre: "Tazón Energético",
        imagen: "/images/desayunos/desayuno3.png",
        descripcion: "Granola, yogurt y frutos del bosque.",
      },
      {
        nombre: "Tazón Energético",
        imagen: "/images/desayunos/desayuno4.png",
        descripcion: "Granola, yogurt y frutos del bosque.",
      },
      {
        nombre: "Tazón Energético",
        imagen: "/images/desayunos/desayuno5.png",
        descripcion: "Granola, yogurt y frutos del bosque.",
      },
      {
        nombre: "Tazón Energético",
        imagen: "/images/desayunos/desayuno6.png",
        descripcion: "Granola, yogurt y frutos del bosque.",
      },
    ],
  },
  postres: {
    titulo: "Postres",
    descripcion: "Un toque dulce para momentos especiales.",
    items: [
      {
        nombre: "Panna Cotta de Frutos Rojos",
        imagen: "/images/postres/postres1.png",
        descripcion: "Postre suave con frutos rojos frescos.",
      },
      {
        nombre: "Tarta de Chocolate",
        imagen: "/images/postres/postres2.png",
        descripcion: "Delicioso y perfecto para compartir.",
      },
      {
        nombre: "Panna Cotta de Frutos Rojos",
        imagen: "/images/postres/postres3.png",
        descripcion: "Postre suave con frutos rojos frescos.",
      },
      {
        nombre: "Tarta de Chocolate",
        imagen: "/images/postres/postres4.png",
        descripcion: "Delicioso y perfecto para compartir.",
      },
      {
        nombre: "Panna Cotta de Frutos Rojos",
        imagen: "/images/postres/postres5.png",
        descripcion: "Postre suave con frutos rojos frescos.",
      },
      {
        nombre: "Tarta de Chocolate",
        imagen: "/images/postres/postres6.png",
        descripcion: "Delicioso y perfecto para compartir.",
      },
    ],
  },
  snacks: {
    titulo: "Snacks",
    descripcion: "Para pausas con propósito y sabor.",
    items: new Array(12).fill(null).map((_, i) => ({
      nombre: "Bandeja Mini Salados",
      imagen: `/images/snacks/snacks${i + 1}.png`,
      descripcion: "Variedad de bocados gourmet.",
    })),
  },
  rapidas: {
    titulo: "Rápidas",
    descripcion: "Un toque dulce para momentos especiales.",
    items: new Array(9).fill(null).map((_, i) => ({
      nombre: "Panna Cotta de Frutos Rojos",
      imagen: `/images/rapidas/rapidas${i + 1}.png`,
      descripcion: "Postre suave con frutos rojos frescos.",
    })),
  },
  tipica: {
    titulo: "Típica",
    descripcion: "Sabores de nuestra tierra, con orgullo.",
    items: new Array(9).fill(null).map((_, i) => ({
      nombre: "Bandeja Paisa Mini",
      imagen: `/images/tipica/tipica${i + 1}.png`,
      descripcion: "Versiones pequeñas de nuestra comida típica.",
    })),
  },
  gourmet: {
    titulo: "Gourmet",
    descripcion: "Delicias exclusivas para sorprender.",
    items: new Array(9).fill(null).map((_, i) => ({
      nombre: "Lomo en salsa de vino",
      imagen: `/images/gourmet/gourmet${i + 1}.png`,
      descripcion: "Un plato refinado para eventos especiales.",
    })),
  },
};

const CategoriasPage = () => {
  useEffect(() => {
    const hash = window.location.hash?.substring(1);
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);
    }
  }, []);

  return (
    <>
      <BannerCategorias />
      <section className={styles.categoria}>
        {Object.entries(categoriasData).map(([key, data]) => (
          <div key={key} id={key} className={styles.seccion}>
            <h2 className={styles.titulo}>{data.titulo}</h2>
            <p className={styles.descripcion}>{data.descripcion}</p>

            {/* Indicador solo visible en móvil */}
            <p className={styles.indicadorDeslizamiento}>
              Desliza para ver más →
            </p>

            <div className={styles.grid}>
              {data.items.map((item, idx) => (
                <div className={styles.card} key={idx}>
                  <img src={item.imagen} alt={item.nombre} />
                  <h3>{item.nombre}</h3>
                  <p>{item.descripcion}</p>
                  <button className={styles.boton}>Cotizar</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default CategoriasPage;
