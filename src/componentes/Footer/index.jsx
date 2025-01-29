import styles from "./Footer.module.css";
import Logotipo from "./Logotipo.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.pie}>
      <h2>
        Desarrollado por Thalia Olvera
        <br></br>un proyecto para Alura Latam
      </h2>

      <div className={styles.redes}>
        <p>Sígueme en mis redes sociales:</p>
        <ul className={styles.listaRedes}>
          <li>
            <FaLinkedin />
            <a
              href="https://www.linkedin.com/in/thalia-olvera/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <FaGithub />
            <a
              href="https://github.com/ThaliaOlvera"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
