import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "./Logo.png";
import CabeceraLink from "../HeaderLink/HeaderLink";
import { FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";

function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const closeMenu = () => {
    setMenuAbierto(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const nav = document.querySelector("nav");
      const hamburgerButton = document.querySelector(`.${styles.hamburger}`);

      if (
        menuAbierto &&
        nav &&
        !nav.contains(event.target) &&
        hamburgerButton &&
        !hamburgerButton.contains(event.target)
      ) {
        setMenuAbierto(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [menuAbierto]);

  return (
    <header className={styles.cabecera}>
      <Link to="/" onClick={closeMenu}>
        <section className={styles.logoContainer}>
          <img src={Logo} alt="Logo Mi Recetario" /> <span>Recetario</span>
        </section>
      </Link>
      <button className={styles.hamburger} onClick={toggleMenu}>
        <FaBars />
      </button>

      <nav className={`${styles.nav} ${menuAbierto ? styles.active : ""}`}>
        <CabeceraLink url="./" onClick={closeMenu}>
          Inicio
        </CabeceraLink>
        <CabeceraLink url="./Favoritos" onClick={closeMenu}>
          Favoritos
        </CabeceraLink>
        <CabeceraLink url="./NuevoVideo" onClick={closeMenu}>
          + Nuevo Video
        </CabeceraLink>
      </nav>
    </header>
  );
}

export default Header;
