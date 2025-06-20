// src/components/CatalogoVisual.jsx
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import styles from "./CatalogoVisual.module.css";

const imagenes = [
  { src: "/images/catalogo/desayuno1.jpg", alt: "Desayuno elegante" },
  { src: "/images/catalogo/refrigerio1.jpg", alt: "Refrigerio empresarial" },
  { src: "/images/catalogo/regalo1.jpg", alt: "Caja regalo personalizada" },
  { src: "/images/catalogo/desayuno2.jpg", alt: "Desayuno con frutas" },
  { src: "/images/catalogo/refrigerio2.jpg", alt: "Refrigerio gourmet" },
];

const CatalogoVisual = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className={styles.catalogo} id="catalogo-visual">
      <h2 className={styles.titulo}>Explora nuestro catálogo visual</h2>
      <p className={styles.descripcion}>
        Mira algunos de nuestros desayunos, refrigerios y regalos más pedidos.
        Cada detalle está pensado para sorprender.
      </p>

      <div className={styles.sliderContainer}>
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1.2}
          spaceBetween={20}
          centeredSlides={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.3 },
            1024: { slidesPerView: 3.2 },
          }}
        >
          {imagenes.map((img, i) => (
            <SwiperSlide key={i} className={styles.slide}>
              <div className={styles.card}>
                <img src={img.src} alt={img.alt} className={styles.imagen} />
                <p className={styles.caption}>{img.alt}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <a
        href="https://wa.me/573507889999"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappBtn}
      >
        💬 Cotiza por WhatsApp
      </a>
    </section>
  );
};

export default CatalogoVisual;
