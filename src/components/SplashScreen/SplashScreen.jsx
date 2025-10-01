import { useEffect, useState } from "react";
import styles from "./SplashScreen.module.css";
import logo from "@/assets/logo.svg"; // 👈 ajusta al path de tu logo

const SplashScreen = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // ⏱️ Splash visible por 3 segundos
    const timer = setTimeout(() => {
      setFadeOut(true);

      // ⏳ esperamos 1.2s para la animación de salida
      setTimeout(() => {
        // 👇 Scroll suave al inicio como un "parpadeo"
        window.scrollTo({ top: 0, behavior: "smooth" });

        // 🔥 Finaliza el splash
        onFinish();
      }, 1000);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={`${styles.splash} ${fadeOut ? styles.fadeOut : ""}`}>
      <img src={logo} alt="Logo del proyecto" className={styles.logo} />

      {/* 🔥 Loader animado */}
      <div className={styles.loader}>
        <div className={styles.panWrapper}>
          <div className={styles.pan}>
            <div className={styles.food}></div>
            <div className={styles.panBase}></div>
            <div className={styles.panHandle}></div>
          </div>
          <div className={styles.panShadow}></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
