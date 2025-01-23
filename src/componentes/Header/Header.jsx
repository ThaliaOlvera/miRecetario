import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "./Logo.png";
import CabeceraLink from "../HeaderLink/HeaderLink";

function Header() {
  return (
    <header className={styles.cabecera}>
      <Link to="/">
        <section className={styles.logoContainer}>
          <img src={Logo} alt="Logo Mi Recetario" /> <span>Recetario</span>
        </section>
      </Link>
      <nav>
        <CabeceraLink url="./">Home</CabeceraLink>
        <CabeceraLink url="./Favoritos">Favoritos</CabeceraLink>
        <CabeceraLink url="./NuevoVideo">+ Nuevo Video</CabeceraLink>
      </nav>
    </header>
  );
}

export default Header;
