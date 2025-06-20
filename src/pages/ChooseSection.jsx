import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./ChooseSection.module.css";

const categories = [
  { icon: "🧁", title: "Postres por tamaño" },
  { icon: "🍬", title: "Snacks individuales" },
  { icon: "🍽️", title: "Platos Clásicos" },
  { icon: "🥗", title: "Platos fríos" },
  { icon: "🍛", title: "Platos elaborados" },
  { icon: "🥐", title: "Desayunos variados" },
];

const ChooseSection = () => {
  return (
    <section className={styles.choose}>
      <h2>Tú eliges cuánto, nosotros lo hacemos posible.</h2>
      <Swiper spaceBetween={12} slidesPerView={2} className={styles.swiper}>
        {categories.map(({ icon, title }) => (
          <SwiperSlide key={title}>
            <div className={styles.card}>
              <span className={styles.icon}>{icon}</span>
              <h3>{title}</h3>
              <p>Desde 10 unidades. Personaliza a tu gusto y presupuesto.</p>
              <button className={styles.button}>Cotizar este tipo</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ChooseSection;
