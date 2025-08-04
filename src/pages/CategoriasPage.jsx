import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./CategoriaPage.module.css";
import BannerCategorias from "../components/BannerCategorias";
import ProductoModal from "../components/ProductoModal";
import CotizadorFlotante from "../components/CotizadorFlotante";
import { productosData } from "@/data/dataProductos";
import rapidasIcon from "@/assets/icons/rapida.png";
import tipicoIcon from "@/assets/icons/sopa.png";
import GourmetIcon from "@/assets/icons/jamon.png";
import SnacksIcon from "@/assets/icons/Snacks.png";
import postreIcon from "@/assets/icons/postre.png";
import desayunoIcon from "@/assets/icons/desayuno.png";

const categoriasData = {
  desayunos: {
    icon: desayunoIcon,
    titulo: "Desayunos",
    descripcion: "Inspira tus mañanas con sabor, frescura y emoción.",
    boton: "🍽️ Cotiza tu desayuno",
    items: productosData.filter((p) => p.categoria === "desayunos"),
  },
  postres: {
    icon: postreIcon,
    titulo: "Postres",
    descripcion: "Un toque dulce para momentos especiales.",
    boton: "🍰 Cotiza tu postre ideal",
    items: productosData.filter((p) => p.categoria === "postres"),
  },
  snacks: {
    icon: SnacksIcon,
    titulo: "Snacks",
    descripcion: "Para pausas con propósito y sabor.",
    boton: "🌮 Cotiza tu snack perfecto",
    items: productosData.filter((p) => p.categoria === "snacks"),
  },
  rapidas: {
    icon: rapidasIcon,
    titulo: "Rápidas",
    descripcion: "Listas para disfrutar sin esperas.",
    boton: "🍔 Cotiza comida rápida",
    items: productosData.filter((p) => p.categoria === "rapidas"),
  },
  tipica: {
    icon: tipicoIcon,
    titulo: "Típica",
    descripcion: "Sabores de nuestra tierra, con orgullo.",
    boton: "🍛 Cotiza plato típico",
    items: productosData.filter((p) => p.categoria === "tipica"),
  },
  gourmet: {
    icon: GourmetIcon,
    titulo: "Gourmet",
    descripcion: "Delicias exclusivas para sorprender.",
    boton: "🥩 Cotiza plato gourmet",
    items: productosData.filter((p) => p.categoria === "gourmet"),
  },
};

const CategoriasPage = () => {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [mostrarCotizador, setMostrarCotizador] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-in-out", once: true });
  }, []);

  // organizador de categorias
  const ordenCategorias = [
    "desayunos",
    "rapidas",
    "tipica",
    "gourmet",
    "snacks",
    "postres",
  ];

  const abrirModal = (producto) => {
    setProductoSeleccionado(producto);
    setMostrarModal(true);
  };

  const cerrarModal = () => {
    setMostrarModal(false);
  };

  const abrirCotizadorDesdeModal = (producto) => {
    setProductoSeleccionado(producto);
    setMostrarModal(false);
    setMostrarCotizador(true);
  };

  return (
    <>
      <BannerCategorias />

      <section className={styles.categoriasWrapper}>
        {ordenCategorias.map((key) => {
          const data = categoriasData[key];
          const claseCategoria =
            styles["categoria" + key.charAt(0).toUpperCase() + key.slice(1)];

          return (
            <div
              key={key}
              id={key}
              className={`${styles.categoria} ${claseCategoria}`}
            >
              <h2 className={styles.titulo}>
                {data.icon && (
                  <img
                    src={data.icon}
                    alt=""
                    aria-hidden="true"
                    className={styles.icono}
                  />
                )}
                {data.titulo}
              </h2>

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
                      onClick={() => abrirModal(item)}
                    >
                      Ver más
                    </button>
                  </div>
                ))}
              </div>

              <a
                onClick={() => abrirModal(null)}
                className={styles.botonExplorar}
                data-aos="fade-up"
              >
                {data.boton}
              </a>
            </div>
          );
        })}
      </section>

      {mostrarModal && (
        <ProductoModal
          producto={productoSeleccionado}
          onClose={cerrarModal}
          onCotizar={abrirCotizadorDesdeModal}
        />
      )}

      <CotizadorFlotante
        isOpen={mostrarCotizador}
        onClose={() => setMostrarCotizador(false)}
        categoriaPreseleccionada={{
          categoria: productoSeleccionado?.categoria || "",
          nombre: productoSeleccionado?.nombre || "",
        }}
      />
    </>
  );
};

export default CategoriasPage;
