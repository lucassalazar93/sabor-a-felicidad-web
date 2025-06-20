// src/pages/CategoriasPage.jsx
import { useEffect } from "react";
import styles from "./CategoriaPage.module.css";
import BannerCategorias from "../components/BannerCategorias";

// ✅ IMPORTACIONES de imágenes — desayuno
import desayuno1 from "@/assets/desayunos/desayuno1.png";
import desayuno2 from "@/assets/desayunos/desayuno2.png";
import desayuno3 from "@/assets/desayunos/desayuno3.png";
import desayuno4 from "@/assets/desayunos/desayuno4.png";
import desayuno5 from "@/assets/desayunos/desayuno5.png";
import desayuno6 from "@/assets/desayunos/desayuno6.png";

// ✅ IMPORTACIONES — postres
import postres1 from "@/assets/postres/postres1.png";
import postres2 from "@/assets/postres/postres2.png";
import postres3 from "@/assets/postres/postres3.png";
import postres4 from "@/assets/postres/postres4.png";
import postres5 from "@/assets/postres/postres5.png";
import postres6 from "@/assets/postres/postres6.png";

// ✅ IMPORTACIONES — snacks
import snacks1 from "@/assets/snacks/snacks1.png";
import snacks2 from "@/assets/snacks/snacks2.png";
import snacks3 from "@/assets/snacks/snacks3.png";
import snacks4 from "@/assets/snacks/snacks4.png";
import snacks5 from "@/assets/snacks/snacks5.png";
import snacks6 from "@/assets/snacks/snacks6.png";
import snacks7 from "@/assets/snacks/snacks7.png";
import snacks8 from "@/assets/snacks/snacks8.png";
import snacks9 from "@/assets/snacks/snacks9.png";
import snacks10 from "@/assets/snacks/snacks10.png";
import snacks11 from "@/assets/snacks/snacks11.png";
import snacks12 from "@/assets/snacks/snacks12.png";

// ✅ IMPORTACIONES — rápidas
import rapidas1 from "@/assets/rapidas/rapidas1.png";
import rapidas2 from "@/assets/rapidas/rapidas2.png";
import rapidas3 from "@/assets/rapidas/rapidas3.png";
import rapidas4 from "@/assets/rapidas/rapidas4.png";
import rapidas5 from "@/assets/rapidas/rapidas5.png";
import rapidas6 from "@/assets/rapidas/rapidas6.png";
import rapidas7 from "@/assets/rapidas/rapidas7.png";
import rapidas8 from "@/assets/rapidas/rapidas8.png";
import rapidas9 from "@/assets/rapidas/rapidas9.png";

// ✅ IMPORTACIONES — típica
import tipica1 from "@/assets/tipica/tipica1.png";
import tipica2 from "@/assets/tipica/tipica2.png";
import tipica3 from "@/assets/tipica/tipica3.png";
import tipica4 from "@/assets/tipica/tipica4.png";
import tipica5 from "@/assets/tipica/tipica5.png";
import tipica6 from "@/assets/tipica/tipica6.png";
import tipica7 from "@/assets/tipica/tipica7.png";
import tipica8 from "@/assets/tipica/tipica8.png";
import tipica9 from "@/assets/tipica/tipica9.png";

// ✅ IMPORTACIONES — gourmet
import gourmet1 from "@/assets/gourmet/gourmet1.png";
import gourmet2 from "@/assets/gourmet/gourmet2.png";
import gourmet3 from "@/assets/gourmet/gourmet3.png";
import gourmet4 from "@/assets/gourmet/gourmet4.png";
import gourmet5 from "@/assets/gourmet/gourmet5.png";
import gourmet6 from "@/assets/gourmet/gourmet6.png";
import gourmet7 from "@/assets/gourmet/gourmet7.png";
import gourmet8 from "@/assets/gourmet/gourmet8.png";
import gourmet9 from "@/assets/gourmet/gourmet9.png";

// ✅ Datos organizados
const categoriasData = {
  desayunos: {
    titulo: "Desayunos",
    descripcion: "Inspira tus mañanas con sabor y emoción.",
    items: [
      {
        nombre: "Desayuno Clásico",
        imagen: desayuno1,
        descripcion: "Huevos, pan artesanal y fruta fresca.",
      },
      {
        nombre: "Tazón Energético",
        imagen: desayuno2,
        descripcion: "Granola, yogurt y frutos del bosque.",
      },
      {
        nombre: "Tazón Energético",
        imagen: desayuno3,
        descripcion: "Granola, yogurt y frutos del bosque.",
      },
      {
        nombre: "Tazón Energético",
        imagen: desayuno4,
        descripcion: "Granola, yogurt y frutos del bosque.",
      },
      {
        nombre: "Tazón Energético",
        imagen: desayuno5,
        descripcion: "Granola, yogurt y frutos del bosque.",
      },
      {
        nombre: "Tazón Energético",
        imagen: desayuno6,
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
        imagen: postres1,
        descripcion: "Postre suave con frutos rojos frescos.",
      },
      {
        nombre: "Tarta de Chocolate",
        imagen: postres2,
        descripcion: "Delicioso y perfecto para compartir.",
      },
      {
        nombre: "Panna Cotta de Frutos Rojos",
        imagen: postres3,
        descripcion: "Postre suave con frutos rojos frescos.",
      },
      {
        nombre: "Tarta de Chocolate",
        imagen: postres4,
        descripcion: "Delicioso y perfecto para compartir.",
      },
      {
        nombre: "Panna Cotta de Frutos Rojos",
        imagen: postres5,
        descripcion: "Postre suave con frutos rojos frescos.",
      },
      {
        nombre: "Tarta de Chocolate",
        imagen: postres6,
        descripcion: "Delicioso y perfecto para compartir.",
      },
    ],
  },
  snacks: {
    titulo: "Snacks",
    descripcion: "Para pausas con propósito y sabor.",
    items: [
      snacks1,
      snacks2,
      snacks3,
      snacks4,
      snacks5,
      snacks6,
      snacks7,
      snacks8,
      snacks9,
      snacks10,
      snacks11,
      snacks12,
    ].map((img, i) => ({
      nombre: "Bandeja Mini Salados",
      imagen: img,
      descripcion: "Variedad de bocados gourmet.",
    })),
  },
  rapidas: {
    titulo: "Rápidas",
    descripcion: "Listas para disfrutar sin esperas.",
    items: [
      rapidas1,
      rapidas2,
      rapidas3,
      rapidas4,
      rapidas5,
      rapidas6,
      rapidas7,
      rapidas8,
      rapidas9,
    ].map((img) => ({
      nombre: "Panna Cotta de Frutos Rojos",
      imagen: img,
      descripcion: "Postre suave con frutos rojos frescos.",
    })),
  },
  tipica: {
    titulo: "Típica",
    descripcion: "Sabores de nuestra tierra, con orgullo.",
    items: [
      tipica1,
      tipica2,
      tipica3,
      tipica4,
      tipica5,
      tipica6,
      tipica7,
      tipica8,
      tipica9,
    ].map((img) => ({
      nombre: "Bandeja Paisa Mini",
      imagen: img,
      descripcion: "Versiones pequeñas de nuestra comida típica.",
    })),
  },
  gourmet: {
    titulo: "Gourmet",
    descripcion: "Delicias exclusivas para sorprender.",
    items: [
      gourmet1,
      gourmet2,
      gourmet3,
      gourmet4,
      gourmet5,
      gourmet6,
      gourmet7,
      gourmet8,
      gourmet9,
    ].map((img) => ({
      nombre: "Lomo en salsa de vino",
      imagen: img,
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
            <p className={styles.indicadorDeslizamiento}>
              Desliza para ver más →
            </p>
            <div className={styles.grid}>
              {data.items.map((item, idx) => (
                <div className={styles.card} key={idx}>
                  <img src={item.imagen} alt={item.nombre} loading="lazy" />
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
