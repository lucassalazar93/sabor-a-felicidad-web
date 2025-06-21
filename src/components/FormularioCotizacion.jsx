import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./FormularioCotizacion.module.css";

const categoriasDisponibles = {
  Desayuno: ["Desayuno clásico", "Tazón energético", "Croissant relleno"],
  Postre: ["Brownie", "Tarta de frutas", "Cheesecake"],
  Snack: ["Barras saludables", "Mini empanadas", "Mix frutos secos"],
  "Comida rápida": [
    "Hamburguesa artesanal",
    "Wraps variados",
    "Sandwiches gourmet",
  ],
  Típica: ["Bandeja paisa", "Ajiaco", "Empanadas"],
  Gourmet: ["Salmón con hierbas", "Filete mignon", "Risotto de setas"],
  "Regalos empresariales": [
    "Caja premium",
    "Mini desayunos corporativos",
    "Kit emocional",
  ],
};

const FormularioCotizacion = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const tipoCategoria = queryParams.get("tipo");

  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    fecha: "",
    hora: "",
    cantidad: "",
    tipo: tipoCategoria || "",
    opcionMenu: "",
    mensaje: "",
  });

  const [opcionesMenu, setOpcionesMenu] = useState([]);
  const [fechaMinima, setFechaMinima] = useState("");
  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    const hoy = new Date();
    hoy.setDate(hoy.getDate() + 2);
    setFechaMinima(hoy.toISOString().split("T")[0]);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "tipo") {
      const capitalizado =
        categoriasDisponibles[value.charAt(0).toUpperCase() + value.slice(1)] ||
        [];
      setOpcionesMenu(capitalizado);
      setFormData((prev) => ({ ...prev, opcionMenu: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (parseInt(formData.cantidad) < 10) {
      alert("⚠️ El pedido mínimo es de 10 porciones.");
      return;
    }

    const mensaje = `Hola! 👋 Soy *${formData.nombre}*

✉️ Correo: ${formData.correo}
📞 Teléfono: ${formData.telefono}

🗓️ Fecha: ${formData.fecha}
⏰ Hora de entrega: ${formData.hora}
🍽️ Porciones: ${formData.cantidad}
📦 Categoría: ${formData.tipo}
🥘 Opción elegida: ${formData.opcionMenu}

📝 Preferencias: ${formData.mensaje}

¿Me pueden ayudar con una cotización?`;

    const numero = "573507881893";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    setEnviado(true);
    window.open(url, "_blank");
  };

  return (
    <section className={styles.formWrapper} id="cotizar">
      <h2 className={styles.titulo}>💌 Cotiza tu experiencia</h2>
      <p className={styles.subtitulo}>
        Estamos listos para consentir tus sentidos
      </p>

      {!enviado ? (
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
            required
          />
          <input
            type="date"
            name="fecha"
            min={fechaMinima}
            value={formData.fecha}
            onChange={handleChange}
            required
          />
          <input
            type="time"
            name="hora"
            value={formData.hora}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="cantidad"
            placeholder="Cantidad de porciones (mínimo 10)"
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
            {Object.keys(categoriasDisponibles).map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          {opcionesMenu.length > 0 && (
            <select
              name="opcionMenu"
              value={formData.opcionMenu}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona una opción específica</option>
              {opcionesMenu.map((op, i) => (
                <option key={i} value={op}>
                  {op}
                </option>
              ))}
            </select>
          )}

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

          <div className={styles.alerta}>
            ⚠️ <strong>Importante:</strong> Pedido mínimo de 10 porciones y
            agendar con al menos 48 horas de anticipación.
          </div>
        </form>
      ) : (
        <p className={styles.confirmacion}>✅ Redirigiendo a WhatsApp…</p>
      )}
    </section>
  );
};

export default FormularioCotizacion;
