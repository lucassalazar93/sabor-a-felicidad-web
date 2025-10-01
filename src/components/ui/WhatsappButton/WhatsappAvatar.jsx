import styles from "./WhatsappAvatar.module.css";
import avatar from "@/assets/avatar.png";

const WhatsappAvatar = () => {
  const mensaje = "Hola Nore, me encantaría cotizar 😊";

  return (
    <div className={styles.wrapper}>
      <a
        href={`https://wa.me/573507881893?text=${encodeURIComponent(mensaje)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.avatar}
        aria-label="Habla con una asesora por WhatsApp"
      >
        <img
          src={avatar}
          alt="Asesora de WhatsApp"
          className={styles.avatarImg}
        />
        <div className={styles.tooltip}>Hola 💗 ¿Te muestro ideas lindas?</div>
      </a>
    </div>
  );
};

export default WhatsappAvatar;
