import { useFavoritosContext } from "../../context/Favoritos";
import styles from "./Card.module.css";
import iconHeathFill from "./iconHeathFill.png";
import iconHeathEmpty from "./iconHeathEmpty.png";
import { Link } from "react-router-dom";

function Card({ id, capa, titulo }) {
  const { favorito, agregarFavorito } = useFavoritosContext();
  const isFavorito = favorito.some((fav) => fav.id === id);
  const icon = isFavorito ? iconHeathFill : iconHeathEmpty;
  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/${id}`}>
        <img src={capa} alt={titulo} className={styles.capa} />
        <h2>{titulo} </h2>
      </Link>
      <div className={styles.containerBtn}>
        <img
          src={icon}
          alt="Icono Favorito"
          className={styles.favorite}
          onClick={() => agregarFavorito({ id, titulo, capa })}
        />
        <button type="button">Editar</button>
        <button type="button">Guardar</button>
      </div>
    </div>
  );
}

export default Card;
