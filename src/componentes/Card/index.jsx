import styles from "./Card.module.css";
import iconHeathFill from "./iconHeathFill.png";

function Card({ id, capa, titulo }) {
  return (
    <div className={styles.container}>
      <img src={capa} alt={titulo} className={styles.capa} />
      <h2>{titulo} </h2>
      <img
        src={iconHeathFill}
        alt="Icono Favorito"
        className={styles.favorite}
      />
    </div>
  );
}

export default Card;
