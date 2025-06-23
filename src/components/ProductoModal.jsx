// src/components/ProductoModal.jsx
import "./ProductoModal.css";

const ProductoModal = ({ producto, onClose, onCotizar }) => {
  if (!producto) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Botón de cierre */}
        <button className="close-button" onClick={onClose}>
          ✖
        </button>

        {/* Imagen destacada */}
        <div className="imagen-container">
          <img src={producto.imagen} alt={producto.nombre} />
        </div>

        {/* Contenido del producto */}
        <div className="contenido">
          {/* Título */}
          <h2>{producto.nombre}</h2>

          {/* Precio */}
          {producto.precio && (
            <p className="precio">
              <strong>DESDE </strong>
              <strong>
                {producto.precio.toLocaleString("es-CO", {
                  style: "currency",
                  currency: "COP",
                  minimumFractionDigits: 0,
                })}
              </strong>
            </p>
          )}

          {/* Descripción */}
          <p className="descripcion">
            {producto.descripcion_larga || producto.descripcion}
          </p>

          {/* Lista de lo que incluye */}
          {producto.incluye && (
            <ul className="incluye">
              {producto.incluye.map((item, i) => (
                <li key={i}>🍓 {item}</li>
              ))}
            </ul>
          )}

          {/* Descripción adicional "ideal para..." */}
          {producto.ideal && <p className="ideal">✨ {producto.ideal}</p>}

          {/* Botón centrado para cotizar */}
          <div className="btn-container">
            <button
              className="btn-cotizar"
              onClick={() => {
                onClose(); // Cierra el modal
                onCotizar(producto); // Llama la función de cotización
              }}
            >
              💌 Cotizar este {producto.nombre}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductoModal;
