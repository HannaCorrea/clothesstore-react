import React from "react";
import Image1 from "../../images/imag1.png";
import Image2 from "../../images/imag2.png";
import "./auxiliarBanners.css";

function AuxiliarBanners() {
  return (
    <section className="containerAux">
      <a className="position" href="/">
        <img className="aux1" src={Image1} alt="foto1" />
        <p className="etiqueta">MODA INFANTIL</p>
      </a>
      <a className="position" href="/">
        <img className="aux2" src={Image2} alt="foto2" />
        <p className="etiqueta">PROTECCIÓN</p>
      </a>
    </section>
  );
}

export default AuxiliarBanners;
