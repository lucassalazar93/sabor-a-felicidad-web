import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./FormularioCotizacion.module.css";

const categorias = [
  "Desayuno",
  "Postre",
  "Snack",
  "Comida rápida",
  "Típica",
  "Gourmet",
  "Regalos empresariales",
];

const FormularioCotizacion = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const tipoCategoria = queryParams.get("tipo");

  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    fecha: "",
    cantidad: "",
    tipo: tipoCategoria || "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría el envío al backend
    alert("¡Cotización enviada con éxito!");
    // reset form
    setFormData({
      nombre: "",
      correo: "",
      telefono: "",
      fecha: "",
      cantidad: "",
      tipo: "",
      mensaje: "",
    });
  };

  return (
    <section className={styles.formWrapper} id="cotizar">
      <h2 className={styles.titulo}>💌 Cotiza tu experiencia</h2>
      <p className={styles.subtitulo}>
        Estamos listos para consentir tus sentidos
      </p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre completo"
          value={formData.nombre}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="correo"
          placeholder="Correo electrónico"
          value={formData.correo}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="telefono"
          placeholder="Teléfono de contacto"
          value={formData.telefono}
          onChange={handleChange}
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
          placeholder="Cantidad de porciones"
          value={formData.cantidad}
          onChange={handleChange}
          required
        />

        <select
          name="tipo"
          value={formData.tipo}
          onChange={handleChange}
          required
        >
          <option value="">Selecciona tipo de menú</option>
          {categorias.map((cat, idx) => (
            <option key={idx} value={cat.toLowerCase()}>
              {cat}
            </option>
          ))}
        </select>

        <textarea
          name="mensaje"
          placeholder="¿Tienes alguna preferencia especial?"
          rows="4"
          value={formData.mensaje}
          onChange={handleChange}
        />

        <button type="submit" className={styles.botonEnviar}>
          Enviar cotización ✨
        </button>
      </form>
    </section>
  );
};

export default FormularioCotizacion;
