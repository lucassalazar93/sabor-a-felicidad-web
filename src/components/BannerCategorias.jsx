import { useState, useEffect } from "react";
import styles from "./BannerCategorias.module.css";

// 📁 IMPORTACIONES DESKTOP
import banner1 from "@/assets/banner/banner1.png";
import banner2 from "@/assets/banner/banner2.png";
import banner3 from "@/assets/banner/banner3.png";
import banner4 from "@/assets/banner/banner4.png";
import banner5 from "@/assets/banner/banner5.png";

// 📱 IMPORTACIONES MOBILE
import bannerMobile1 from "@/assets/banner/bannerCelular1.png";
import bannerMobile2 from "@/assets/banner/bannerCelular2.png";
import bannerMobile3 from "@/assets/banner/bannerCelular3.png";
import bannerMobile4 from "@/assets/banner/bannerCelular4.png";
import bannerMobile5 from "@/assets/banner/bannerCelular5.png";

// 📚 ARRAYS ORGANIZADOS
const imagenesDesktop = [banner1, banner4, banner3, banner2, banner5];
const imagenesMobile = [
  bannerMobile1,
  bannerMobile2,
  bannerMobile3,
  bannerMobile4,
  bannerMobile5,
];

const BannerCategorias = () => {
  const [indiceActual, setIndiceActual] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es móvil
  useEffect(() => {
    const actualizarTamano = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    actualizarTamano();
    window.addEventListener("resize", actualizarTamano);
    return () => window.removeEventListener("resize", actualizarTamano);
  }, []);

  const imagenes = isMobile ? imagenesMobile : imagenesDesktop;

  // Auto-rotación del banner
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

      {/* Navegación desktop */}
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

      {/* Indicador móvil */}
      {isMobile && (
        <div className={styles.indicadorDeslizamiento}>
          Desliza para ver más <span className={styles.flecha}>⬇️</span>
        </div>
      )}
    </div>
  );
};

export default BannerCategorias;
