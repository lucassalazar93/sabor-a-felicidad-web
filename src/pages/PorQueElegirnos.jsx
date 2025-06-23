import { useEffect, useRef, useState } from "react";
import { FaClock, FaUtensils, FaGift, FaHeart } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./PorQueElegirnos.module.css";

gsap.registerPlugin(ScrollTrigger);

const beneficios = [
  {
    icono: <FaClock />,
    titulo: "Entregas Puntuales",
    descripcion: "Tu pedido llega justo a tiempo, sin sorpresas.",
  },
  {
    icono: <FaUtensils />,
    titulo: "Personalización de Menús",
    descripcion: "Creamos opciones que se ajustan a tu estilo.",
  },
  {
    icono: <FaGift />,
    titulo: "Presentaciones Elegantes",
    descripcion: "Cada entrega es visualmente impactante.",
  },
  {
    icono: <FaHeart />,
    titulo: "Experiencia Emocional Garantizada",
    descripcion: "Cada bocado deja una huella emocional.",
  },
];

const PorQueElegirnos = () => {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const [mostrarFlechas, setMostrarFlechas] = useState(true);
  const [animacionActiva, setAnimacionActiva] = useState(true);

  useEffect(() => {
    const context = gsap.context(() => {
      const cards = gsap.utils.toArray(`.${styles.card}`);
      gsap.set(cards, { opacity: 0, y: 60, scale: 0.96 });

      gsap.to(cards, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.25,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        onComplete: () => {
          cards.forEach((el) => el.classList.add(styles.reveal));
        },
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  // Detecta interacción para detener animación y ocultar flechas
  useEffect(() => {
    const container = sliderRef.current;
    const handleInteraccion = () => {
      setMostrarFlechas(false);
      setAnimacionActiva(false);
      container?.removeEventListener("scroll", handleInteraccion);
      container?.removeEventListener("touchstart", handleInteraccion);
    };

    container?.addEventListener("scroll", handleInteraccion);
    container?.addEventListener("touchstart", handleInteraccion);

    return () => {
      container?.removeEventListener("scroll", handleInteraccion);
      container?.removeEventListener("touchstart", handleInteraccion);
    };
  }, []);

  const scrollSlider = (direction) => {
    const container = sliderRef.current;
    if (container) {
      container.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className={styles.eligirnos}
      id="porque-elegirnos"
      ref={sectionRef}
    >
      <h2 className={styles.titulo}>¿Por qué elegirnos?</h2>

      <div className={styles.sliderWrapper}>
        {mostrarFlechas && (
          <button
            className={styles.arrowLeft}
            onClick={() => scrollSlider("left")}
          >
            ◀︎
          </button>
        )}

        <div
          ref={sliderRef}
          className={`${styles.grid} ${!animacionActiva ? styles.parada : ""}`}
        >
          {beneficios.map((item, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.icono}>{item.icono}</div>
              <h3>{item.titulo}</h3>
              <p>{item.descripcion}</p>
            </div>
          ))}
        </div>

        {mostrarFlechas && (
          <button
            className={styles.arrowRight}
            onClick={() => scrollSlider("right")}
          >
            ▶︎
          </button>
        )}
      </div>
    </section>
  );
};

export default PorQueElegirnos;
