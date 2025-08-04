import { useEffect, useState } from "react";
import styles from "./BannerCategorias.module.css";

// Video principal del banner
import bannerVideo from "@/assets/video/video-postres.mp4";

const BannerCategorias = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const actualizarTamano = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    actualizarTamano();
    window.addEventListener("resize", actualizarTamano);
    return () => window.removeEventListener("resize", actualizarTamano);
  }, []);

  return (
    <div className={styles.banner}>
      <video
        className={styles.video}
        src={bannerVideo}
        autoPlay
        loop
        muted
        playsInline
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
