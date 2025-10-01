import { useEffect, useState, useRef } from "react";
import styles from "./BannerCategorias.module.css";

// Video principal del banner
import bannerVideo from "@/assets/video/video-postres.mp4";

const BannerCategorias = () => {
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const actualizarTamano = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    actualizarTamano();
    window.addEventListener("resize", actualizarTamano);

    return () => window.removeEventListener("resize", actualizarTamano);
  }, []);

  useEffect(() => {
    // 👇 Forzar reproducción automática en móviles
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn("Autoplay bloqueado, intentando reintentar...", error);
          videoRef.current.muted = true;
          videoRef.current.play();
        });
      }
    }
  }, []);

  return (
    <div className={styles.banner}>
      <video
        ref={videoRef}
        className={styles.video}
        src={bannerVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="auto" // ✅ carga anticipada
      />
      {isMobile && (
        <div className={styles.indicadorDeslizamiento}>
          Desliza para ver más <span className={styles.flecha}>⬇️</span>
        </div>
      )}
    </div>
  );
};

export default BannerCategorias;
