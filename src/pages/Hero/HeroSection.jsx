import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa"; // 👈 Icono flecha hacia abajo
import styles from "./HeroSection.module.css";
import heroVideo from "@/assets/video/video-postres.mp4"; // 🎥 Video de fondo

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="inicio" className={styles.hero}>
      {/* 🎥 Video de fondo que nunca se detiene */}
      <video
        className={styles.videoBackground}
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      {/* 📌 Indicador de scroll (solo en desktop/tablet) */}
      {!isMobile && (
        <div className={styles.scrollIndicator}>
          <p>Explora hacia abajo</p>
          <FaChevronDown className={styles.arrow} />
        </div>
      )}
    </section>
  );
};

export default HeroSection;
