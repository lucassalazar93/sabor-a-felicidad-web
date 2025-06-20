import React from "react";
import "./TerminosCondiciones.css";

const PoliticaPrivacidad = () => {
  return (
    <section className="legal">
      <div className="container">
        <h1>Política de Privacidad</h1>
        <p>
          En Sabor a Felicidad, valoramos tu privacidad. Esta política explica
          cómo recopilamos, usamos y protegemos tu información.
        </p>

        <h2>Datos que recolectamos</h2>
        <p>
          Recolectamos tu nombre, correo, fecha de evento y número de WhatsApp
          cuando haces una cotización.
        </p>

        <h2>Uso de datos</h2>
        <p>
          Usamos tu información para contactarte y brindarte una mejor
          experiencia. No compartimos tus datos con terceros.
        </p>

        <h2>Seguridad</h2>
        <p>
          Usamos medidas seguras para proteger tu información. Tú puedes
          solicitarnos acceso o eliminación en cualquier momento.
        </p>
      </div>
    </section>
  );
};

export default PoliticaPrivacidad;
