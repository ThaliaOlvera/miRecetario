import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "./Logo.png";
import CabeceraLink from "../HeaderLink/HeaderLink";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

function Header() {
  const HamburgerMenu = () => {
    const [menuAbierto, setMenuAbierto] = useState(false);

    const toggleMenu = () => {
      const nav = document.querySelector("nav");
      nav.classList.toggle(styles.active);
      setMenuAbierto(!menuAbierto);
    };

    return (
      <button className={styles.hamburger}>
        <FaBars onClick={toggleMenu} />
      </button>
    );
  };

  return (
    <header className={styles.cabecera}>
      <Link to="/">
        <section className={styles.logoContainer}>
          <img src={Logo} alt="Logo Mi Recetario" /> <span>Recetario</span>
        </section>
      </Link>
      <HamburgerMenu />

      <nav>
        <CabeceraLink url="./">Inicio</CabeceraLink>
        <CabeceraLink url="./Favoritos">Favoritos</CabeceraLink>
        <CabeceraLink url="./NuevoVideo">+ Nuevo Video</CabeceraLink>
      </nav>
    </header>
  );
}

export default Header;
