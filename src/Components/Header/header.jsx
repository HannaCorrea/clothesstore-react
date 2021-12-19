import React from "react";
import logo from "../../images/ClothesStore.png";
import "./header.css";
import Menu from "../Menu/menu";

function Header() {
  return (
    <header className="header__container">
      <div className="container__top">
        <img className="logo" src={logo} alt="" />
        <form className="searchContainer" action="">
          <input type="text" placeholder="Buscar aqui..." />
          <button>
            <i className="fas fa-search"></i>
          </button>
        </form>
        <button className="kart">
          <i className="fas fa-shopping-cart"></i>
        </button>
        <button className="userIcon">
          <i className="fas fa-user"></i>
        </button>
        <button className="login">Iniciar Sesión</button>
      </div>
      <Menu />
    </header>
  );
}

export default Header;
