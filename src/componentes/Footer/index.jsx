import styles from "./Footer.module.css";
import Logotipo from "./Logotipo.png";

function Footer() {
  return (
    <footer className={styles.pie}>
      <h2>Desarrollado por Thalia Olvera un proyecto para Alura Latam</h2>

      <div className={styles.redes}>
        <h3>Sígueme en mis redes sociales:</h3>
        <ul className={styles.listaRedes}>
          <li>
            <a
              href="https://www.linkedin.com/in/thalia-olvera/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
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
