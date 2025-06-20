import { useEffect, useState } from "react";
import styles from "./HeroSection.module.css";

const slides = [
  {
    image: "/images/desayuno.png",
    imageMobile: "/images/bannerMovil3.png",
    title: "DESAYUNOS",
    subtitle: "Desayunos que abrazan el alma,\nHechos con amor.",
    buttonText: "Ver desayunos 🍳",
    buttonLink: "#desayunos",
  },
  {
    image: "/images/postres.png",
    imageMobile: "/images/bannerMovil4.png",
    title: "POSTRES",
    subtitle: "Un dulce para cada emoción,\nDisfrútalo con el alma.",
    buttonText: "Explorar postres 🍰",
    buttonLink: "#postres",
  },
  {
    image: "/images/snakc.png",
    imageMobile: "/images/bannerMovil5.png",
    title: "SNACKS",
    subtitle:
      "Desde un antojo hasta un gran evento,\nTenemos el sabor perfecto para ti.",
    buttonText: "Cotiza tu evento 🎉",
    buttonLink: "#cotizar",
  },
  {
    image: "/images/tipica.png",
    imageMobile: "/images/bannerMovil2.png",
    title: "TÍPICA",
    subtitle: "Tradición colombiana servida con amor, sabor y mucha historia.",
    buttonText: "Ver platos típicos 🍛",
    buttonLink: "#cotizar",
  },
  {
    image: "/images/gourmet.png",
    imageMobile: "/images/bannerMovil1.png",
    title: "GOURMET",
    subtitle:
      "Platos exclusivos, presentaciones impecables, sabor que impresiona.",
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
