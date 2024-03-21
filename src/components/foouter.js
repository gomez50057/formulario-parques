import React from 'react';

const Footer = () => {
  return (
    <section className="foouter" style={{ backgroundImage: `url(img/foouter.webp)` }}>
      <div className="foouterLogo">
        <img src="img/LogotipoBlanco.webp" alt="Logo de la Unidad Planeación en blanco" />
      </div>
      <div className="fooutertxt">
        <div className="foouterBar"></div>
        <h2>Formulario Captura de Parques</h2>
        <div className="foouterInfo">
          <h2>Unidad de Planeación y Prospectiva</h2>
          <div className="foouterUbicacion">
            <img src="img/ubicacion.webp" alt="Icono de ubicación" />
            <p>Plaza Juárez S/N Col. Centro <span>Pachuca de Soto, Hidalgo, México.</span></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
