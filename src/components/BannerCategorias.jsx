import { useState, useEffect } from "react";
import styles from "./BannerCategorias.module.css";

const imagenesDesktop = [
  "/images/banner/banner1.png",
  "/images/banner/banner4.png",
  "/images/banner/banner3.png",
  "/images/banner/banner2.png",
  "/images/banner/banner5.png",
];

const imagenesMobile = [
  "/images/banner/bannerCelular1.png",
  "/images/banner/bannerCelular2.png",
  "/images/banner/bannerCelular3.png",
  "/images/banner/bannerCelular4.png",
  "/images/banner/bannerCelular5.png",
];

const BannerCategorias = () => {
  const [indiceActual, setIndiceActual] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es dispositivo móvil
  useEffect(() => {
    const actualizarTamano = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    actualizarTamano();
    window.addEventListener("resize", actualizarTamano);
    return () => window.removeEventListener("resize", actualizarTamano);
  }, []);

  const imagenes = isMobile ? imagenesMobile : imagenesDesktop;

  // Rotación automática del banner
  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceActual((prev) => (prev + 1) % imagenes.length);
    }, 5000);
    return () => clearInterval(intervalo);
  }, [imagenes.length]);

  const irAImagen = (index) => setIndiceActual(index);

  return (
    <div className={styles.banner}>
      <div
        className={styles.slider}
        style={{
          transform: `translateX(-${indiceActual * 100}vw)`,
          width: `${imagenes.length * 100}vw`,
        }}
      >
        {imagenes.map((img, idx) => (
          <div key={idx} className={styles.slide}>
            <img
              src={img}
              alt={`Banner ${idx + 1}`}
              className={styles.imagen}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Puntos de navegación solo en desktop */}
      {!isMobile && (
        <div className={styles.puntos}>
          {imagenes.map((_, idx) => (
            <button
              key={idx}
              onClick={() => irAImagen(idx)}
              className={`${styles.punto} ${
                idx === indiceActual ? styles.activo : ""
              }`}
              aria-label={`Ir a la imagen ${idx + 1}`}
            />
          ))}
        </div>
      )}

      {/* Texto flotante animado en móvil */}
      {isMobile && (
        <div className={styles.indicadorDeslizamiento}>
          Desliza para ver más <span className={styles.flecha}>⬇️</span>
        </div>
      )}
    </div>
  );
};

export default BannerCategorias;
