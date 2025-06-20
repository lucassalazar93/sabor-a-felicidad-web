import styles from "./WhatsappAvatar.module.css";

const WhatsappAvatar = () => {
  return (
    <div className={styles.wrapper}>
      <a
        href="https://wa.me/573507889999"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.avatar}
        aria-label="Habla con una asesora por WhatsApp"
      >
        <img
          src="/images/avatar.png"
          alt="Asesora de WhatsApp"
          className={styles.avatarImg}
        />
        <div className={styles.tooltip}>Hola 💗 ¿Te muestro ideas lindas?</div>
      </a>
    </div>
  );
};

export default WhatsappAvatar;
