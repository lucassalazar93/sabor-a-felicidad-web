import { useState } from "react";
import styles from "./SeccionCotizar.module.css";

const SeccionCotizar = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    evento: "",
    fecha: "",
    cantidad: "",
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generarMensajeWhatsApp = () => {
    const mensaje = `Hola, soy ${formData.nombre} 
estoy planeando este evento: 

 Evento: ${formData.evento}
Fecha: ${formData.fecha}
 Cantidad de platos: ${formData.cantidad}

¿Me pueden ayudar con una cotización? `;

    const numero = "573507881893";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    generarMensajeWhatsApp();
  };

  return (
    <section className={styles.cotizar}>
      <h2 className={styles.titulo}>¿Lista para cotizar tu experiencia?</h2>
      <p className={styles.descripcion}>
        Llena este formulario y te llevaremos directo a WhatsApp con tus datos.
      </p>

      {!enviado ? (
        <form className={styles.formulario} onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre"
            placeholder="Tu nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="evento"
            placeholder="¿Qué evento estás planeando?"
            value={formData.evento}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="fecha"
            value={formData.fecha}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="cantidad"
            placeholder="¿Cuántos platos necesitas?"
            value={formData.cantidad}
            onChange={handleChange}
            required
          />
          <button type="submit">💬 Cotizar con Nore por WhatsApp</button>
        </form>
      ) : (
        <p className={styles.confirmacion}>✅ Redirigiendo a WhatsApp…</p>
      )}
    </section>
  );
};

export default SeccionCotizar;
