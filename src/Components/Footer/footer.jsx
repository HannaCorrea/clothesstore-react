import React from "react";
import "./footer.css";

function Footer() {
  return (
    <section className="container__terms">
      <div className="container__terms__box">
        <span className="container__terms-title">POLÍTICAS</span>
        <ul>
          <li>
            <a href="/">Políticas de privacidad</a>
          </li>
          <li>
            <a href="/">Políticas de cambio</a>
          </li>
          <li>
            <a href="/">Políticas de envío</a>
          </li>
          <li>
            <a href="/">Términos y condiciones</a>
          </li>
          <li>
            <a href="/">Responsabilidad social</a>
          </li>
        </ul>
      </div>
      <div className="container__terms__box">
        <span className="container__terms-title">SOBRE NOSOTROS</span>
        <ul>
          <li>
            <a href="/">Encuentra tu tienda</a>
          </li>
          <li>
            <li>
              <a href="/">Contáctanos</a>
            </li>
            <a href="/">Trabaja con nosotros</a>
          </li>
        </ul>
      </div>
      <div className="container__terms__box">
        <span className="container__terms-title">SÍGUENOS EN :</span>
      </div>
    </section>
  );
}
export default Footer;
