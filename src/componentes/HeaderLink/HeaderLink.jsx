import { Link } from "react-router-dom";
import styles from "./HeaderLink.module.css";

function CabeceraLink({ url, children, onClick }) {
  return (
    <Link to={url} className={styles.link} onClick={onClick}>
      {children}
    </Link>
  );
}

export default CabeceraLink;
