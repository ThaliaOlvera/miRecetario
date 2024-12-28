import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "./Logo.png";

function Header() {
  return (
    <header className={styles.cabecera}>
      <Link to="/">
        <section className={styles.logoContainer}>
          <img src={Logo} alt="Logo Mi Recetario" /> <span>Recetario</span>
        </section>
      </Link>
    </header>
  );
}

export default Header;
