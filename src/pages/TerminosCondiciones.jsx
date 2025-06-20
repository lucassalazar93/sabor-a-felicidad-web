import React from "react";
import "./TerminosCondiciones.css";

const TerminosCondiciones = () => {
  return (
    <section className="legal">
      <div className="container">
        <h1>Términos y Condiciones</h1>
        <p>
          Bienvenido a Sabor a Felicidad. Al acceder y utilizar nuestro sitio
          web, aceptas cumplir estos términos. Si no estás de acuerdo con alguno
          de ellos, por favor no utilices este sitio.
        </p>

        <h2>Uso del sitio</h2>
        <p>
          Puedes navegar, cotizar y conocer nuestros productos. No puedes usar
          el contenido para fines comerciales sin autorización.
        </p>

        <h2>Pedidos y pagos</h2>
        <p>
          Todos los pedidos están sujetos a disponibilidad. Los pagos deben
          realizarse mediante los medios ofrecidos en el sitio.
        </p>

        <h2>Modificaciones</h2>
        <p>
          Podemos actualizar estos términos en cualquier momento. Te sugerimos
          revisarlos regularmente.
        </p>
      </div>
    </section>
  );
};

export default TerminosCondiciones;
