import { useEffect, useRef } from "react";
import styles from "./QuienesSomos.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const QuienesSomos = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      tl.from(`.${styles.title}`, { x: -80, opacity: 0, duration: 1 })
        .from(`.${styles.text}`, { y: 50, opacity: 0, duration: 1 }, "-=0.7")
        .from(`.${styles.image}`, { x: 100, opacity: 0, duration: 1 }, "-=0.7");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className={styles.quienesSomos}
      id="quienes-somos"
      ref={sectionRef}
    >
      <div className={styles.content}>
        <h2 className={styles.title}>
          Creamos experiencias que alimentan el alma
        </h2>
        <p className={styles.text}>
          Estamos detrás de esos momentos donde todo tiene que salir bien.
          Sabemos lo que implica organizar un evento o una fecha especial:
          tiempos justos, muchos frentes, mil detalles. Por eso existimos. Para
          que tú puedas enfocarte en lo importante mientras nosotros nos
          encargamos de que todo llegue como debe ser, y mejor. Sin
          complicaciones. Sin estrés. Solo soluciones que funcionan y te hacen
          quedar como lo que eres: alguien que sabe lo que hace.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img
          src="/images/quienes-somos.png"
          alt="Caja de desayuno empresarial"
          className={styles.image}
        />
      </div>
    </section>
  );
};

export default QuienesSomos;
