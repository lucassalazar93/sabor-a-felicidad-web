import { useEffect, useState } from "react";
import styles from "./HeroSection.module.css";
import heroVideo from "@/assets/video/video-postres.mp4"; // Video de fondo
// import heroVideoMobile from "@/assets/video/heroVideoMobile.mp4"; // Opcional

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="inicio" className={styles.hero}>
      {/* 🎥 Video de fondo */}
      <video
        className={styles.videoBackground}
        src={heroVideo} // Puedes usar isMobile ? heroVideoMobile : heroVideo si tienes dos
        autoPlay
        loop
        muted
        playsInline
      />
    </section>
  );
};

export default HeroSection;
