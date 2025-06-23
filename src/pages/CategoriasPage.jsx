import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./CategoriaPage.module.css";
import BannerCategorias from "../components/BannerCategorias";
import ProductoModal from "../components/ProductoModal";
import CotizadorFlotante from "../components/CotizadorFlotante";
import { productosData } from "@/data/dataProductos";

// Agrupar productos por categoría automáticamente
const categoriasData = {
  desayunos: {
    titulo: "🥐 Desayunos",
    descripcion: "Inspira tus mañanas con sabor, frescura y emoción.",
    boton: "🍽️ Cotiza tu desayuno personalizado",
    items: productosData.filter((p) => p.categoria === "desayunos"),
  },
  postres: {
    titulo: "🍰 Postres",
    descripcion: "Un toque dulce para momentos especiales.",
    boton: "🍰 Cotiza tu postre ideal",
    items: productosData.filter((p) => p.categoria === "postres"),
  },
  snacks: {
    titulo: "🌮 Snacks",
    descripcion: "Para pausas con propósito y sabor.",
    boton: "🌮 Cotiza tu snack perfecto",
    items: productosData.filter((p) => p.categoria === "snacks"),
  },
  rapidas: {
    titulo: "🍔 Rápidas",
    descripcion: "Listas para disfrutar sin esperas.",
    boton: "🍔 Cotiza comida rápida",
    items: productosData.filter((p) => p.categoria === "rapidas"),
  },
  tipica: {
    titulo: "🍛 Típica",
    descripcion: "Sabores de nuestra tierra, con orgullo.",
    boton: "🍛 Cotiza plato típico",
    items: productosData.filter((p) => p.categoria === "tipica"),
  },
  gourmet: {
    titulo: "🥩 Gourmet",
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
        ))}
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
