// src/pages/CategoriasPage.jsx
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./CategoriaPage.module.css";
import BannerCategorias from "../components/BannerCategorias";
import CotizadorFlotante from "@/components/CotizadorFlotante";

// IMPORTACIONES de imágenes (desayunos, postres, etc.)
import desayuno1 from "@/assets/desayunos/desayuno1.png";
import desayuno2 from "@/assets/desayunos/desayuno2.png";
import desayuno3 from "@/assets/desayunos/desayuno3.png";
import desayuno4 from "@/assets/desayunos/desayuno4.png";
import desayuno5 from "@/assets/desayunos/desayuno5.png";
import desayuno6 from "@/assets/desayunos/desayuno6.png";

import postres1 from "@/assets/postres/postres1.png";
import postres2 from "@/assets/postres/postres2.png";
import postres3 from "@/assets/postres/postres3.png";
import postres4 from "@/assets/postres/postres4.png";
import postres5 from "@/assets/postres/postres5.png";
import postres6 from "@/assets/postres/postres6.png";

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

import rapidas1 from "@/assets/rapidas/rapidas1.png";
import rapidas2 from "@/assets/rapidas/rapidas2.png";
import rapidas3 from "@/assets/rapidas/rapidas3.png";
import rapidas4 from "@/assets/rapidas/rapidas4.png";
import rapidas5 from "@/assets/rapidas/rapidas5.png";
import rapidas6 from "@/assets/rapidas/rapidas6.png";
import rapidas7 from "@/assets/rapidas/rapidas7.png";
import rapidas8 from "@/assets/rapidas/rapidas8.png";
import rapidas9 from "@/assets/rapidas/rapidas9.png";

import tipica1 from "@/assets/tipica/tipica1.png";
import tipica2 from "@/assets/tipica/tipica2.png";
import tipica3 from "@/assets/tipica/tipica3.png";
import tipica4 from "@/assets/tipica/tipica4.png";
import tipica5 from "@/assets/tipica/tipica5.png";
import tipica6 from "@/assets/tipica/tipica6.png";
import tipica7 from "@/assets/tipica/tipica7.png";
import tipica8 from "@/assets/tipica/tipica8.png";
import tipica9 from "@/assets/tipica/tipica9.png";

import gourmet1 from "@/assets/gourmet/gourmet1.png";
import gourmet2 from "@/assets/gourmet/gourmet2.png";
import gourmet3 from "@/assets/gourmet/gourmet3.png";
import gourmet4 from "@/assets/gourmet/gourmet4.png";
import gourmet5 from "@/assets/gourmet/gourmet5.png";
import gourmet6 from "@/assets/gourmet/gourmet6.png";
import gourmet7 from "@/assets/gourmet/gourmet7.png";
import gourmet8 from "@/assets/gourmet/gourmet8.png";
import gourmet9 from "@/assets/gourmet/gourmet9.png";

const categoriasData = {
  desayunos: {
    titulo: "🥐 Desayunos",
    descripcion: "Inspira tus mañanas con sabor, frescura y emoción.",
    boton: "🍽️ Cotiza tu desayuno personalizado",
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
        nombre: "Croissant de Jamón",
        imagen: desayuno3,
        descripcion: "Croissant relleno, fruta y chocolatina.",
      },
      {
        nombre: "Wrap de Pollo",
        imagen: desayuno4,
        descripcion: "Wrap fresco, jugo natural y snack dulce.",
      },
      {
        nombre: "Huevos Ingleses",
        imagen: desayuno5,
        descripcion: "Huevos, salchicha, beans y pan tostado.",
      },
      {
        nombre: "Mini Almohábana",
        imagen: desayuno6,
        descripcion: "Con fruta, bebida y galletas dulces.",
      },
    ],
  },
  postres: {
    titulo: "🍰 Postres",
    descripcion: "Un toque dulce para momentos especiales.",
    boton: "🍰 Cotiza tu postre ideal",
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
        nombre: "Mousse de Maracuyá",
        imagen: postres3,
        descripcion: "Frescura tropical en cada bocado.",
      },
      {
        nombre: "Brownie con Helado",
        imagen: postres4,
        descripcion: "Caliente y frío en una misma experiencia.",
      },
      {
        nombre: "Flan de Coco",
        imagen: postres5,
        descripcion: "Dulce, cremoso y tropical.",
      },
      {
        nombre: "Trufas Artesanales",
        imagen: postres6,
        descripcion: "Para regalar y deleitar.",
      },
    ],
  },
  snacks: {
    titulo: "🌮 Snacks",
    descripcion: "Para pausas con propósito y sabor.",
    boton: "🌮 Cotiza tu snack perfecto",
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
    ].map((img) => ({
      nombre: "Bandeja Mini Salados",
      imagen: img,
      descripcion: "Variedad de bocados gourmet.",
    })),
  },
  rapidas: {
    titulo: "🍔 Rápidas",
    descripcion: "Listas para disfrutar sin esperas.",
    boton: "🍔 Cotiza comida rápida",
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
      nombre: "Wrap Express",
      imagen: img,
      descripcion: "Soluciones rápidas y sabrosas.",
    })),
  },
  tipica: {
    titulo: "🍛 Típica",
    descripcion: "Sabores de nuestra tierra, con orgullo.",
    boton: "🍛 Cotiza plato típico",
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
    titulo: "🥩 Gourmet",
    descripcion: "Delicias exclusivas para sorprender.",
    boton: "🥩 Cotiza plato gourmet",
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
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null); // será un objeto con nombre y categoría

  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-in-out", once: true });
    const hash = window.location.hash?.substring(1);
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
  }, []);

  const abrirFormulario = (nombreProducto, nombreCategoria) => {
    setProductoSeleccionado({
      nombre: nombreProducto,
      categoria: nombreCategoria,
    });
    setMostrarFormulario(true);
  };

  return (
    <>
      <BannerCategorias />
      <section className={styles.categoriasWrapper}>
        {Object.entries(categoriasData).map(([key, data]) => (
          <div key={key} id={key} className={styles.categoria}>
            <h2 className={styles.titulo}>{data.titulo}</h2>
            <p className={styles.descripcion}>{data.descripcion}</p>
            <p className={styles.indicadorDeslizamiento}>
              Desliza para ver más →
            </p>
            <div className={styles.grid}>
              {data.items.map((item, idx) => (
                <div
                  className={styles.card}
                  key={idx}
                  data-aos="zoom-in-up"
                  data-aos-delay={(idx % 6) * 100}
                  data-aos-offset="100"
                >
                  <img src={item.imagen} alt={item.nombre} loading="lazy" />
                  <h3>{item.nombre}</h3>
                  <p>{item.descripcion}</p>
                  <button
                    className={styles.boton}
                    onClick={() => abrirFormulario(item.nombre, data.titulo)}
                  >
                    Cotizar
                  </button>
                </div>
              ))}
            </div>
            <a
              onClick={() => abrirFormulario(null, data.titulo)}
              className={styles.botonExplorar}
              data-aos="fade-up"
            >
              {data.boton}
            </a>
          </div>
        ))}
      </section>

      <CotizadorFlotante
        isOpen={mostrarFormulario}
        onClose={() => setMostrarFormulario(false)}
        categoriaPreseleccionada={productoSeleccionado}
      />
    </>
  );
};

export default CategoriasPage;
