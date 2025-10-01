import { useState, useEffect } from "react";
import styles from "./SeccionCotizar.module.css";

const categoriasDisponibles = {
  Desayuno: ["Desayuno clásico", "Tazón energético", "Croissant relleno"],
  Postre: ["Brownie", "Tarta de frutas", "Cheesecake"],
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

const SeccionCotizar = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    evento: "",
    fecha: "",
    hora: "",
    cantidad: "",
    categoria: "",
    opcionMenu: "",
  });

  const [opcionesMenu, setOpcionesMenu] = useState([]);
  const [enviado, setEnviado] = useState(false);
  const [fechaMinima, setFechaMinima] = useState("");

  useEffect(() => {
    const fechaActual = new Date();
    fechaActual.setDate(fechaActual.getDate() + 2); // mínimo 48 horas
    setFechaMinima(fechaActual.toISOString().split("T")[0]);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "categoria") {
      setOpcionesMenu(categoriasDisponibles[value] || []);
      setFormData((prev) => ({ ...prev, opcionMenu: "" }));
    }
  };

  const convertirHora12 = (hora24) => {
    if (!hora24) return "";
    const [hora, minutos] = hora24.split(":");
    const h = parseInt(hora);
    const ampm = h >= 12 ? "PM" : "AM";
    const hora12 = h % 12 || 12;
    return `${hora12}:${minutos} ${ampm}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (parseInt(formData.cantidad) < 10) {
      alert("El pedido mínimo es de 10 porciones.");
      return;
    }

    const hora12 = convertirHora12(formData.hora);

    const mensaje = `
👋 Hola, soy *${formData.nombre}*
Estoy organizando un evento especial 🎉 y me gustaría cotizar con ustedes:

📌 *Evento:* ${formData.evento}
📅 *Fecha estimada:* ${formData.fecha}
⏰ *Hora de entrega:* ${hora12}
🍽️ *Cantidad de porciones:* ${formData.cantidad}
🍱 *Categoría:* ${formData.categoria}
🥘 *Opción de menú:* ${formData.opcionMenu}

¿Podemos hablar sobre esta cotización? Muchas gracias 💖
`;

    const numero = "573507881893";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(
      mensaje.trim()
    )}`;
    setEnviado(true);
    window.open(url, "_blank");
  };

  return (
    <section className={styles.cotizar}>
      <h2 className={styles.titulo}>💗 Cotiza tu experiencia</h2>
      <p className={styles.descripcion}>
        Estamos listos para consentir tus sentidos
      </p>

      {!enviado ? (
        <form className={styles.formulario} onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre"
            placeholder="Tu nombre completo"
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
            min={fechaMinima}
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
            placeholder="Cantidad de porciones"
            value={formData.cantidad}
            onChange={handleChange}
            required
          />

          <select
            name="categoria"
            value={formData.categoria}
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
              <option value="">Selecciona una opción de la categoría</option>
              {opcionesMenu.map((opcion, index) => (
                <option key={index} value={opcion}>
                  {opcion}
                </option>
              ))}
            </select>
          )}

          <button type="submit">Enviar cotización ✨</button>

          <div className={styles.alerta}>
            <p>
              ⚠️ <strong>Importante:</strong> Pedido mínimo 10 porciones. Agenda
              con 48 horas de anticipación. Garantizamos productos frescos y de
              alta calidad. Solo para eventos o reuniones.
            </p>
          </div>
        </form>
      ) : (
        <p className={styles.confirmacion}>✅ Redirigiendo a WhatsApp…</p>
      )}
    </section>
  );
};

export default SeccionCotizar;
