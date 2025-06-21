import { useEffect, useState } from "react";
import styles from "./HeroSection.module.css";

// ✅ IMPORTACIÓN de imágenes desktop
import imgDesayuno from "@/assets/desayuno.jpg";
import imgPostres from "@/assets/postres.jpg";
import imgSnacks from "@/assets/snack.jpeg"; // ← esta es la que tienes realmente
import imgTipica from "@/assets/tipica.png";
import imgGourmet from "@/assets/gourmet.jpg";

// ✅ IMPORTACIÓN de imágenes mobile
import mobile1 from "@/assets/bannerMovil1.png";
import mobile2 from "@/assets/bannerMovil2.png";
import mobile3 from "@/assets/bannerMovil3.png";
import mobile4 from "@/assets/bannerMovil4.png";
import mobile5 from "@/assets/bannerMovil5.png";

// Slides
const slides = [
  {
    image: imgDesayuno,
    imageMobile: mobile3,
    title: "Un desayuno puede decirlo todo",
    subtitle: "Empieza el día con un gesto que abraza",
    buttonText: "Sorpréndeme con ideas 🍳",
    buttonLink: "#desayunos",
  },
  {
    image: imgPostres,
    imageMobile: mobile4,
    title: "Lo dulce también sabe abrazar",
    subtitle: "Postres que no solo se ven… se sienten 💞",
    buttonText: "Quiero algo delicioso 🍰",
    buttonLink: "#postres",
  },
  {
    image: imgSnacks,
    imageMobile: mobile5,
    title: "Pequeños, ricos y llenos de intención",
    subtitle:
      "Bocados pensados para celebrar, compartir o simplemente antojarse",
    buttonText: "Ver ideas sabrosas 🍡",
    buttonLink: "#cotizar",
  },
  {
    image: imgTipica,
    imageMobile: mobile2,
    title: "Sabor ancestral",
    subtitle: "Platos típicos hechos con amor y tradición.",
    buttonText: "Ver platos típicos 🍽️",
    buttonLink: "#cotizar",
  },
  {
    image: imgGourmet,
    imageMobile: mobile1,
    title: "Sabores que enamoran, detalles que elevan",
    subtitle: "Alta cocina para momentos que merecen ser recordados",
    buttonText: "Ver preparaciones 🍝",
    buttonLink: "#cotizar",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevious(current);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [current]);

  const getImage = (index) =>
    isMobile ? slides[index].imageMobile : slides[index].image;

  const { title, subtitle, buttonText, buttonLink } = slides[current];

  return (
    <section id="inicio" className={styles.hero}>
      <div
        className={`${styles.bg} ${styles.fadeIn}`}
        style={{ backgroundImage: `url(${getImage(current)})` }}
      />
      <div
        className={`${styles.bg} ${styles.fadeOut}`}
        style={{ backgroundImage: `url(${getImage(previous)})` }}
      />

      <div className={styles.overlay}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>
            {subtitle.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </p>
          <a href={buttonLink} className={styles.cta}>
            {buttonText}
          </a>
        </div>

        <div className={styles.dots}>
          {slides.map((_, i) => (
            <span
              key={i}
              className={`${styles.dot} ${
                i === current ? styles.activeDot : ""
              }`}
              onClick={() => {
                setPrevious(current);
                setCurrent(i);
              }}
            >
              ●
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
