import { useEffect, useState } from "react";
import styles from "./CotizadorFlotante.module.css";

const productosPorMenu = {
  "Desayuno 🥐": ["Croissant de Jamón", "Tazón Energético", "Desayuno Clásico"],
  "Almuerzo típico 🍛": ["Bandeja Paisa", "Tamal Tolimense", "Sancocho casero"],
  "Almuerzo gourmet 🥩": [
    "Lomo en salsa de vino",
    "Risotto de setas",
    "Pollo thai",
  ],
  "Postre 🍰": ["Mousse de Maracuyá", "Brownie con Helado", "Panna Cotta"],
  "Snack 🌮": ["Wrap Express", "Empanadas mini", "Bandeja de salados"],
  "Fecha especial 🎁": [
    "Desayuno sorpresa",
    "Caja romántica",
    "Menú personalizado",
  ],
};

const CotizadorFlotante = ({ isOpen, onClose, categoriaPreseleccionada }) => {
  const [formulario, setFormulario] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    fecha: "",
    porciones: 10,
    tipoMenu: "",
    producto: "",
    mensaje: "",
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";

      const tipoMenu = categoriaPreseleccionada?.categoria || "";
      const producto = categoriaPreseleccionada?.nombre || "";

      setFormulario((prev) => ({
        ...prev,
        tipoMenu,
        producto,
        mensaje: producto
          ? `Deseo ${producto} (${tipoMenu}) para ${prev.porciones} personas, con jugo incluido...`
          : "",
      }));
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen, categoriaPreseleccionada]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "tipoMenu") {
      setFormulario((prev) => ({
        ...prev,
        tipoMenu: value,
        producto: "",
      }));
    } else {
      setFormulario((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      nombre,
      correo,
      telefono,
      fecha,
      porciones,
      tipoMenu,
      producto,
      mensaje,
    } = formulario;

    // ✅ Validación de mínimo 10 porciones
    if (porciones < 10) {
      alert("📌 El pedido mínimo es de 10 porciones.");
      return;
    }

    // ✅ Validación de 48h de anticipación
    const hoy = new Date();
    const fechaEvento = new Date(fecha);
    const diferenciaHoras = (fechaEvento - hoy) / (1000 * 60 * 60);

    if (diferenciaHoras < 48) {
      alert("⏰ Debes agendar con al menos 48 horas de anticipación.");
      return;
    }

    // ✅ Mensaje a WhatsApp
    const texto = `
📩 *Nueva solicitud de cotización*

🙋‍♂️ *Nombre:* ${nombre}
📧 *Correo:* ${correo}
📞 *Teléfono:* ${telefono}
📅 *Fecha del evento:* ${fecha}
🍽️ *Cantidad de porciones:* ${porciones}
📋 *Tipo de menú:* ${tipoMenu}
🍱 *Producto:* ${producto}
📝 *Preferencias:* ${mensaje}

💖 Enviado desde *Sabor a Felicidad*
`;

    const numeroWhatsApp = "573507881893";
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
      texto
    )}`;
    window.open(url, "_blank");
  };

  const productosDisponibles = productosPorMenu[formulario.tipoMenu] || [];

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.cerrar} onClick={onClose}>
          ✖
        </button>
        <h2 className={styles.titulo}>💌 Cotiza tu experiencia</h2>
        <p className={styles.subtitulo}>
          Estamos listos para consentir tus sentidos
        </p>
        <form className={styles.formulario} onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre"
            value={formulario.nombre}
            onChange={handleChange}
            placeholder="Tu nombre completo"
            required
          />
          <input
            type="email"
            name="correo"
            value={formulario.correo}
            onChange={handleChange}
            placeholder="Correo electrónico"
            required
          />
          <input
            type="tel"
            name="telefono"
            value={formulario.telefono}
            onChange={handleChange}
            placeholder="Teléfono de contacto"
            required
          />
          <input
            type="date"
            name="fecha"
            value={formulario.fecha}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="porciones"
            value={formulario.porciones}
            onChange={handleChange}
            placeholder="Cantidad de porciones"
            min={10}
            required
          />

          <select
            name="tipoMenu"
            value={formulario.tipoMenu}
            onChange={handleChange}
            required={!formulario.tipoMenu}
          >
            <option value="">Selecciona tipo de menú</option>
            {Object.keys(productosPorMenu).map((menu) => (
              <option key={menu} value={menu}>
                {menu}
              </option>
            ))}
          </select>

          {productosDisponibles.length > 0 && (
            <select
              name="producto"
              value={formulario.producto}
              onChange={handleChange}
              required={!formulario.producto}
            >
              <option value="">Selecciona un producto</option>
              {productosDisponibles.map((prod) => (
                <option key={prod} value={prod}>
                  {prod}
                </option>
              ))}
            </select>
          )}

          <textarea
            name="mensaje"
            value={formulario.mensaje}
            onChange={handleChange}
            placeholder="¿Tienes alguna preferencia especial? Ej: Sin azúcar, para cumpleaños, incluir bebida caliente, etc."
            rows={4}
          ></textarea>

          {/* ✅ Mensaje de requisitos */}
          <p style={{ fontSize: "0.9rem", color: "#a44", marginTop: "10px" }}>
            🔔 <strong>Importante:</strong> <br /> Pedido mínimo 10 porciones.
            Agenda con 48 horas de anticipación, garantizamos productos frescos
            y alta calidad. Solo para eventos o reuniones.
          </p>

          <button type="submit" className={styles.botonEnviar}>
            Enviar cotización ✨
          </button>
        </form>
      </div>
    </div>
  );
};

export default CotizadorFlotante;
